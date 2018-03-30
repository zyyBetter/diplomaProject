<template>
 <div id="temp">


   <div class="mainbody"  style="min-height: 100vh;margin-top: -10px">
     <!--第一页-->
     <!--显示图片-->
     <div class="must_fill_bar" style="position: relative;left: 0;top: 0;">
       <div class="" style="overflow:hidden;">
         <div >
           <li   class="userImg"  v-if="HeadImageUrl!==null" :style="{backgroundImage: 'url(' + HeadImageUrl + ')'}"  id="title_img">
             <p style="text-align:center;line-height: 50vw;">
             </p>

           </li>
         </div>
       </div>

       <!--上传图片-->
       <!--<div class="uploadImg" v-show="!titleshow" >-->
       <div  class="uploadImg">
         <p-upload   widths="true" @imgChange="getChange(1)" :low_quality="true" :no_count="true" :no_show="false"
                     :upload_contain_id="'uploader'" upload_counter_id="uploadCount"
                     upload_files_id="uploaderFiles" upload_input_id="uploaderInput" photos_number="1"
                     upload_args="activityimg" ref="head" @doneStatus="getStatus(1)" ></p-upload>
       </div>

     </div>


   </div>






     </div>
</template>

<script>
//  import weui from '../../static/js/weui.min.js'
//  import $ from 'jquery'
import $ from "jQuery";
import pUpload from "./Photo_Uploader_Module.vue";

  export default {
    components: {
      pUpload,
    },
  data () {
    return {
      msg:"dingdang",
      HeadImageUrl: "http://oss.dyarea.com/upload_img/headimg_0321.png" ,  //标题默认图片
    }
  },
  created:function (){

  },
    watch:{

      upload_nums:function(){
        let scope=this;
        alert('封面图片保存成功', 'middle');
        //上传成功返回的路径
        this.headImage =' http://oss.dyarea.com'+scope.$refs.head.clone[scope.$refs.head.clone.length-1].imageUrl;
      },

      HeadImageUrl: function () {
//
        this.$refs.head.allUpload();
      },
    },
    methods:{
      getChange(num) {
//				标题图片
        if(num == 1){
          let scope = this;
          let time1 = setTimeout(function () {
            scope.HeadImageUrl = getComputedStyle(document.getElementById('uploaderFiles').getElementsByClassName('weui-uploader__file')[document.getElementById('uploaderFiles').getElementsByClassName('weui-uploader__file').length - 1], false).backgroundImage.split("(")[1].split(")")[0]
            clearTimeout(time1)
          }, 1000)}
//				二维码图片

      },
      getStatus(num) {

//				标题图片
        if(num == 1)
        {
          this.upload_nums++;
        }
//
      },
    }
}
</script>

<style scoped>
  .userImg {
    width: 92vw;
    height: 30vw;
    background-size: 100% 100%;
    margin: 0 auto;
    display: block;
    /*padding-top:100px;*/
    /*padding-bottom:20px;*/
    padding-right: 30px;
    /*padding-left: 30px;*/
    /*box-sizing: content-box;*/
    margin-top: 14px;
    /*margin-left: 30px;*/

  }
  .uploadImg {
    width: 100%;
    position: absolute;
    margin-top: -58px;
    top: 50%;
    left: 0;
    /*opacity: 0;*/
  }
</style>
