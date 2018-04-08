<template>
	<div id="upload_component">
		<div class="weui-cells weui-cells_form" :id="''+a_id" :style="{backgroundColor:bgc}">
			<div class="weui-cell">
				<div class="weui-cell__bd">
					<div class="weui-uploader">

						<div class="weui-uploader__bd">
							<ul class="weui-uploader__files" v-show="show_pic" :id="''+c_id" @click="handleClickUploadList">
								<li class="weui-uploader__file"  v-for="(list,index) in s_list"  :id='list.id'  :style="{backgroundImage: 'url('+GLOBAL.returnHead(list.imageUrl) + ')'}" :key="index"></li>
							</ul>
							<div class="weui-uploader__input-box" v-show="p_nums!=currentPhotos">
								<!--<input name="file" :id="''+d_id" class="weui-uploader__input" type="file" accept="image/*"  multiple />-->
								<input name="file" :id="''+d_id" class="weui-uploader__input" type="file"  multiple   />
							</div>
						</div>
						<div class="weui-uploader__hd">
							<p class="weui-uploader__title"></p>
							<div class="weui-uploader__info"><span :id="''+b_id">{{currentPhotos}}</span>/{{p_nums}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import weui from '.././../../static/js/weui.min.js'
	import $ from 'jquery'
//	var uploadCount = 0 //初始化上传图片数量
//	var uploadCountDom = null //初始化 显示上传图片数量的Dom元素
//	var uploadList = [] //初始化选择的图片列表
//	var successImgList = [] //初始化上传成功的图片列表
	export default {
		props: {
			widths:{
				type: String
			},
			upload_contain_id: {
				type: String
			},
			upload_counter_id: {
				type: String
			},
			upload_files_id: {
				type: String
			},
			upload_input_id: {
				type: String
			},
			photos_number:{
				type:String,
				default:'0'
			},
			save_list:{
				type:Array,
				default: function () {
			        return []
			    }
			},
			upload_args:{
				type:String
			},
			no_count:{
				type:Boolean,
				default:false
			},
			no_show:{
				type:Boolean,
				default:true
			},
			low_quality:{
				type: Boolean,
				default: false
			},
			bg:{
				type:String,
				default:'#eee'
			},
			iconBg:{
				type:String,
				default:"0"
			}

		},
		data() {
			return {
				minwidth:this.widths,//上传图片点击按钮的宽度
				a_id: this.upload_contain_id,//上传容器
				b_id: this.upload_counter_id,//计数节点
				c_id: this.upload_files_id,//上传的图片容器
				d_id: this.upload_input_id,//上传图片input file
				p_nums:this.photos_number,//图片数量
				s_list:this.save_list,//已保存过的图片数组，旧数组
				clone:[],//克隆的图片数组 与父组件交互的数组 例如最终提交数据
				u_args:this.upload_args,//上传的图片接口 参数字符串 类别
				upload_done_status:false,//全部图片上传成功状态
				start_upload:false,//图片开始上传状态
				pre_img_change:false,//有没有改变原来的图片 例如本来有2张图片  修改了其中一张
				// my_url:'',
				uploadList:[],//将上传的图片数组
				uploadCountDom:null,//上传的数量dom节点
				successImgList:[],//成功上传的图片数组
				dont_count:this.no_count,//是否默认上传  例如头像修改直接改变就上传 无需按钮触发
				gallery_dom:null,//获取点开图片的dom
				show_pic:this.no_show,//修改头像不显示dom
				quality:0.6,//压缩质量
				l_quality: this.low_quality,//低质量
				bgc:this.bg,//背景图
				count_num:0,//成功上传的图片数量  计算当数量与将上传的图片数组长度一样 则发出状态完成给父组件
				currentPhotos:0,//当前存在的图片数量
				iconBgg : this.iconBg,//图片上传的+号的背景图

			}
		},
		watch:{
			upload_done_status:function (val){
				// 监听全部上传成功状态
				if(val===true){
					this.$emit('doneStatus',val)
				}
			},
			start_upload:function(val){
				// 监听开始上传状态
				if(val===true){
					this.$emit('startUpload',val)
				}
			},
			clone:function(val){
				// 克隆数组监听
				this.pre_img_change=true
			},
			s_list:function(val){
				// 读取旧照片
				let scope=this
				this.currentPhotos=this.s_list.length
				console.log('current:'+this.s_list.length)
				for(var i=0;i<val.length;i++){
					this.clone.push(val[i])
					if(i===val.length-1){
						setTimeout(function(){
							scope.pre_img_change=false
						},3000)
					}
				}

			},
			pre_img_change:function(v){
				// 图片是否修改过状态
				let scope=this
				if(this.pre_img_change===true){
					scope.$emit('imgChange',v)
				}
			},
			count_num:function(v){
				// 数上传图片
				if(v==this.uploadList.length&&v!=0){
					var self=this
					// 恢复原状
					setTimeout(function(){
						self.start_upload=false
						self.upload_done_status=false
						self.uploadList=[]
						// self.clone=[]
						self.count_num=0
					},1000)
				}

			}
		},
		created() {

		},
		methods: {
			// 上传全部图片
			allUpload () {
				let scope=this
				if(scope.pre_img_change===false)
				{
					//图片没更改 不上传
					// this.$vux.toast.text('图片没更改', 'middle')
					return false
				}else if(scope.pre_img_change===true){
					this.start_upload=true
					//有新增加上传图片
					console.log(this.uploadList)
					if(this.uploadList.length!==0){
						for(var i=0;i<this.uploadList.length;i++){
							this.uploadList[i].upload()
						}
					}else{
						//没有新增图片  默认上传完成
						this.upload_done_status=true
					}
					//恢复原状
				}
			},
			handleClickUploadList(e) {
				var tat = e.target
				var self=this;
//				alert("11111111");

				while(!tat.classList.contains('weui-uploader__file') && tat) {
					tat = tat.parentNode
				}
				if(!tat) return
				var url = tat.getAttribute('style') || ''
				var id = tat.getAttribute('data-id')||tat.getAttribute('id')
				if(url) {
					url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '')
				}
				var gallery = weui.gallery(url, {
					className: 'custom-name',

					onDelete: function() {
						weui.confirm('确定删除该图片?', function() {
							self.currentPhotos--
							//列表渲染的图片clone
							console.log(self.clone)
							for(let i=0;i<self.clone.length;i++){
								let tar=self.clone[i]
								if(tar.id + ''===id){
									self.clone.splice(i,1)
									break
								}
							}
							// 将上传的图片数组 删除操作
							for(let i = 0, len = self.uploadList.length; i < len; ++i) {
								var file = self.uploadList[i]
								if(file.id + '' === id) {
									self.uploadList.splice(i, 1)
									break
								}
							}
							tat.remove()
							gallery.hide()
							this.pre_img_change=true
						})
					}
				})
				self.gallery_dom=gallery
			}
		},
		beforeMounted () {
		},

		mounted() {
			/*if(this.auto_upload == "true"){
				alert(1)
//            $("#d_id").click();
        }*/


			if(this.minwidth == "true"){
				$(".weui-uploader__input").css("width","100vw");
//				$(".weui-uploader__input").he(10000);

			}


			if(this.iconBgg == 1){
				$(".weui-uploader__input-box").removeClass().addClass("iconBg");

			}
			var self = this
			// this.my_url=this.GLOBAL.oss
			self.uploadCountDom = document.getElementById(this.b_id)
			// 压缩质量判断
			if(self.l_quality!= null && self.l_quality == true){
				self.quality = 0.2
			}else{
				self.quality = 0.6
			}
			weui.uploader('#' + self.a_id,

        {
//				上传的参数
				url: 'http://oss.dyarea.com'+'/api/pictures?uploadType='+self.u_args,
				auto: false,
				type: 'file',
				compress: {
					width: 1600,
					height: 1600,
					quality: self.quality
				},
				onBeforeQueued: function(files) {

					if(['image/jpg', 'image/jpeg', 'image/gif','image/png'].indexOf(this.type) < 0) {
						weui.alert('请上传图片')
						return false
					}
					if(this.size > 3 * 1024 * 1024) {
						weui.alert('请不要上传超过3M的图片');
						return false;
					}
					if((files.length > self.p_nums)&&self.dont_count===false) {
						weui.alert('最多只能上传'+self.p_nums+'张图片，请重新选择')
						console.log($('#'+self.c_id))
						return false
					}
					if(($('#' + self.c_id).children().length + 1 > self.p_nums)&&self.dont_count===false) {
						weui.alert('最多只能上传 '+self.p_nums+'张图片')
//						console.log()
						return false
					}
					//不计算数量 例如头像
					if(self.dont_count===true){
						if(files.length!==1){
							weui.alert('不要上传多张图片')
						}else{
							self.uploadList=[]
							self.$emit('imgChange',true)
						}
					}else{
						// 其他正常上传的图片数组
						let num=$('#' + self.c_id).children().length+1
						self.currentPhotos=num
					}
					self.pre_img_change=true
				},
				onQueued: function() {
					self.uploadList.push(this)
//					let file=this
//					file.upload()
				},
				onBeforeSend: function() {
				},
				onProgress: function() {
//					console.log(this, procent)

				},
				onSuccess: function(ret) {
					console.log('--onSuccess--', this, ret)
					self.count_num++
					console.log('上传返回'+ret)
//					console.log('res.result.data[0]  :'+ret.result.data[0])
					//
					self.clone.push({
						imageUrl:ret.result.data[0],
						isHeadImage:false,
						isModify:false
					})
					self.uploadList.length===self.count_num?self.upload_done_status=true:console.log('ing')
				},
				onError: function(err) {
					console.log(this, err)
				}

			})
		},
		beforeUpdated() {
			for(var i=0;i<self.s_list.length;i++){
				this.clone.push(self.s_list[i])
			}
		},
		updated() {

			if(this.currentPhotos==0){
				this.uploadCountDom = document.getElementById(this.b_id)
				// if(this.clone.length==0){
				// 	this.uploadCountDom.innerHTML=0
				// }{
				// 	this.uploadCountDom.innerHTML=this.s_list.length||0
				// }
			}
		},
		attached() {
		},
	}
</script>

<style lang="less" type="text/less">
	#upload_component{
		.weui-cells{
			margin-top: 1vh;
		}
	}
	.iconBg{
		float: left;
		position: relative;
		margin-right: 3vw;
		margin-bottom: 3vw;
		width: 1000vw;
		height: 28vw;
		border: 1px solid #d9d9d9;
		background: url("http://oss.dyarea.com/upload_img/starZoneSubmit2.png") no-repeat 0 0;
		background-size: 100% 100%;
	}

	/*选择框的大小*/
/*
.weui-uploader__input{
	width: 100vw;
	height: 100%;
}
*/

</style>
