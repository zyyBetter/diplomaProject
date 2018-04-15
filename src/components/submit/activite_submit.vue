<template>

  <div style="background: #eff3f5;margin-bottom: -50px;">
 <div id="temp" class="clearfix">

<!--左边-->
   <div id="box_right" class="clearfix">

     <div class="ri_top">
       <div class="ri_title">
         <p>
           <span class="ri_logo"></span>
           <span class="ri_font">热门资讯</span>
         </p>
       </div>
       <ul class="ri_list">
         <li>
           <p>
             <span>1</span>
             会下雨的"怪树"
           </p>
         </li>
         <li>
           <p>
             <span>2</span>
             蚂蚁是怎么认路的
           </p>
         </li>
         <li>
           <p>
             <span>3</span>
             蝙蝠为什么倒挂着睡觉等
           </p>
         </li>
         <li>
           <p>
             <span>4</span>
             下雨天蚂蚁为什么会搬家
           </p>
         </li>
         <li>
           <p>
             <span>5</span>
             蚂蚁是如何辨别方向的
           </p>
         </li>
         <li>
           <p>
             <span>6</span>
             牛豆的来历
           </p>
         </li>
         <li>
           <p>
             <span>7</span>
             防火安全,从娃娃抓起
           </p>
         </li>
         <li>
           <p>
             <span>8</span>
             半日早读课,学习不能断
           </p>
         </li>
         <li>
           <p>
             <span>9</span>
             旺旺狗年,学习不能断
           </p>
         </li>
         <li>
           <p>
             <span>10</span>
             遇见A梦,遇见最美的你
           </p>
         </li>
       </ul>
     </div>

     <!--下面的tag-->
     <div class="ri_bottom ">
       <div class="ri_title">
         <p>
           <span class="ri_logo"></span>
           <span class="ri_font">推荐资讯</span>
         </p>
       </div>
       <ul class="ri_list">
         <li>
           <p>
             <span>1</span>
             为什么轮船能在水面上并行走
           </p>
         </li>
         <li>
           <p>
             <span>2</span>
             鼠宝宝为什么要咬木头
           </p>
         </li>
         <li>
           <p>
             <span>3</span>
             蚂蚁如何过冬
           </p>
         </li>
         <li>
           <p>
             <span>4</span>
             为什么不能把头蒙在被子里面睡觉
           </p>
         </li>
         <li>
           <p>
             <span>5</span>
             简单的DIY儿童瀑布编发
           </p>
         </li>
         <li>
           <p>
             <span>6</span>
             中秋节灯谜大全
           </p>
         </li>
         <li>
           <p>
             <span>7</span>
             蚂蚁是怎么认路的
           </p>
         </li>
         <li>
           <p>
             <span>8</span>
             会下雨的"怪树"
           </p>
         </li>
         <li>
           <p>
             <span>9</span>
             蚂蚁是如何辨别方向的
           </p>
         </li>
         <li>
           <p>
             <span>10</span>
             牛痘的来历
           </p>
         </li>
       </ul>
     </div>

   </div>


   <!--右边-->

   <div id="box_left">
     <!--轮播图-->
     <slider id="sliders" :child-msg="arrimg" v-show="isshow_slider"></slider>

     <!--评论区域-->
     <div id="comment" class="clearfix">
       <p class="topic">【最热话题】</p>

       <div  id="hotcom" class="clearfix">
         <div class="hot_Top clearfix" >
           <div class="hot_Top_left">
             <img src="../../../static/img/submit/1.jpg" alt="">
           </div>
           <div class="hot_Top_right clearfix">
             <h2 style="color:seagreen"><img src="../../../static/img/submit/read.png" alt=""><span style="display: inline-block;position: relative;top: -10px;padding-left: 10px;">孩子们的世界是美好的</span></h2>
              <p><img src="../../../static/img/submit/store.png" alt=""><span style="display: inline-block;position: relative;top: -30px;padding-left: 35px;">有时候娃们说的话真是超级搞笑，听过的让人无奈的童言无忌的小故事...</span></p>
             <p><img src="../../../static/img/submit/comment.png" alt=""><span style="display: inline-block;position: relative;top: -10px;padding-left: 10px;">2017-09-12 12:16:30</span></p>

             <div id="submits" @click="submit_activite">点击分享</div>
           </div>
         </div>



       </div>

       <div class="hot_body" v-show="isshow1">
         <p class="topic">【所有话题】</p>
         <ul>
           <li v-for="item in arrMes" style="overflow: hidden;overflow: hidden">
             <div :style="{backgroundImage: 'url(' +  uerimg(item.url) + ')'}" class="head"></div>
             <div style="float: left;width: 65%;margin-left: 5%;" >
               <div :style="{backgroundImage: 'url(' +  uerimg1(item.image) + ')'}" alt=""  class="personimg"></div>
               <span class="headTitle">{{item.name}}</span>
               <p>{{item.time}}</p>
             </div>
           </li>
         </ul>
       </div>


       <!--发送信息-->
       <div v-show="isshow2" class="mainbody"  >
         <!--第一页-->
         <!--显示图片-->
         <div class="must_fill_bar" style="position: relative;left: 0;top: 0;">
           <div class="" style="overflow:hidden;">
               <li   class="userImg"   :style="{backgroundImage: 'url(' + HeadImageUrl + ')'}"  id="title_img">
                 <input class="Cover_three"  name="pic[]" multiple id="myinput"
                        type="file" ref="coverImg"  @click="changeFile($event)"
                        accept="image/*"  multiple />
                 <p style="text-align:center;line-height: 50vw;">
                 </p>
               </li>
           </div>

           <!--上传图片-->

           <div  class="uploadImg">
           </div>
           <!-----------填写内容------>
           <el-form ref="form" :model="form" label-width="80px" style="margin-top: 30px;">
             <el-form-item label="文章名称">
               <el-input v-model="form.name" style="width: 60%;"></el-input>
             </el-form-item>
             <el-form-item label="活动内容">
             </el-form-item>
           </el-form>


           <div>
             <ul class="up_list" id="up_list">
               <li v-for="(item,index) in addTextObj">
                 <!--文字-->
                 <div @click="changText(item)"  class="text_fa" v-show="item.contentType==0" >
                   <span @click="del_txt(item)" class="text_del" ><img src="http://oss.dyarea.com/upload_img/del02_0319.png" alt=""></span>
                   <p v-html="item.content" style="text-indent:2em;word-break:break-all"></p>
                 </div>


                 <!--图片-->
                 <div    class="activite_pic"  v-show="item.contentType==1">
                   <span class="img_del" @click="del_img(item)" ><img src="http://oss.dyarea.com/upload_img/del02_0319.png" alt=""></span>
                 <img :src="uerimg(item.content)" alt="" style="width: 50%;margin: 20px auto;">
                 </div>
               </li>
             </ul>
           </div>

           <!--点击添加文字-->
           <el-form ref="form" :model="form" label-width="80px"  v-show="ishowText">
             <el-form-item label="活动内容" >
               <el-input type="textarea" v-model="form.desc" style="width: 60%;" ></el-input>
               <button @click="finish(form.desc)">提交</button>
             </el-form-item>
           </el-form>


           <!--按钮-->
           <!-------添加文字------>
           <div style="background: url('http://oss.dyarea.com/upload_img/btn1.png'); background-size: 100% 100%;width: 70%;height: 60px;" class="btn_up1"
            @click="addText"   ></div>
           <!-------添加图片------>
           <div style="background: url('http://oss.dyarea.com/upload_img/btn2.png'); background-size: 100% 100%;width: 70%;height: 60px;"  class="btn_up2"
               >

             <input type="file" name="pic1[]" multiple id="myinput1" @click="uploadIMg" style="opacity: 0">
                         <!-------------------添加图片------------------------->

           </div>
         </div>
         <el-row>
           <el-button type="success" @click="submitAll">提交</el-button>
         </el-row>
       </div>
       </div>
   </div>
     </div>
  </div>
</template>
<script>
//  import $ from 'jquery'
import slider from "../common/slider.vue"

import $ from "jQuery";
import pUpload from "./Photo_Uploader_Module.vue";
  export default {
    components: {
      pUpload,
      slider
    },
  data () {
    return {
      arrimg:[
        "../../../static/img/home/slider17.jpg",
        "../../../static/img/home/slider09.jpg",
        "../../../static/img/home/slider06.jpg",
      ],
      isshow_slider:true,
      isshow1:true,
      isshow2:false,
      msg:"dingdang",
      HeadImageUrl: "http://oss.dyarea.com/upload_img/headimg_0321.png" ,  //标题默认图片
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
        shareImageUrl:"",
        addTextarr:[],//添加文字
        addTextObj:[],
        addImgarr:[],//增加图片
        ishowText:false,//点击添加文字框是否显示
      arrMes :[],//获取列表发布的信息
      index1:0,
      indexs:0,
      HeadUrl:"",
      ActUrl:"",
      currentdate:"",
      personlimg:""
    }
  },
  created:function (){
    this.get_save()
  },
    watch:{
    },
    methods: {
      uerimg(imgurl) {
        return "http://127.0.0.1/diplomaProject/php/Upload/uploads/" + imgurl;
      },
      uerimg1(imgurl) {
        return "http://127.0.0.1/diplomaProject/" + imgurl;
      },

      uploadIMg() {
        var fd = new FormData();
        fd.append("pic", document.getElementById("myinput1").files[0]);
        var url = "http://127.0.0.1/diplomaProject/php/Upload/upload.php";
        var scope = this
        $.ajax({
          url: url,
          type: "post",
          data: fd,
          processData: false,
          contentType: false,
          success: function (res) {
            console.log(res);
            scope.ActUrl = res.data.pic.savepath + res.data.pic.savename;
            var obj = {};
            obj.content = scope.ActUrl;
            obj.contentType = 1;
            scope.addTextObj.push(obj);

          },
          dataType: "json"
        })


      },
      //用事件的方式触发input的click事件
      coverTop() {
        return this.$refs.coverImg.click();
      },

      //获取input的属性对象
      changeFile(e) {
//---------------获取图片的数据流------------------
        var scope = this
        let file = e.target.files[0];
        if (window.FileReader) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          //监听文件读取结束后事件
          reader.onloadend = function (e) {
            scope.HeadImageUrl = e.target.result
          };
        };
//     ---------获取图片的具体的信息,并上传到服务器,并返回--------
        var fd = new FormData();
        fd.append("pic", document.getElementById("myinput").files[0]);
        console.log(fd)
        var url = "http://127.0.0.1/diplomaProject/php/Upload/upload.php";
        $.ajax({
          url: url,
          type: "post",
          data: fd,
          processData: false,
          contentType: false,
          success: function (res) {
            console.log(res.data.pic);
//            保存图片的地址以及图片的路径
            scope.HeadUrl = res.data.pic.savepath + res.data.pic.savename;

          },
          dataType: "json"
        })

      },
      open(item) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
              type: 'success',
              message: '删除成功!',
            },
          );
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //提交发布的数据
      submitAll() {
        //获取当前发布的时间
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        this.currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + date.getHours() + seperator2 + date.getMinutes()
          + seperator2 + date.getSeconds();
        alert(this.currentdate)
        if (this.HeadUrl == "") {
          this.$message('请输入标题图片');
        }
        else if (!this.form.name) {
          this.$message('文章名称为空,请输入');
        }
        else if (this.addTextObj == "") {
          this.$message('请输入文章的内容');
        }
        else {
          this.submitAll1()
        }
      },
      //真正提交所有的数据
      submitAll1() {
        console.log(JSON.stringify(this.addTextObj));
        var that = this;
        this.$http.get('http://127.0.0.1/php.php', {
          params: {
            type: 'save',
            obj: JSON.stringify(that.addTextObj),
            name: that.form.name,
            url: that.HeadUrl,
            time: that.currentdate,
            image: that.personlimg, //上传当前用户的头像,
          }
        }).then(function (res) {
          alert("保存成功")
        })
      },
      //点击修改文字
      changText(txt) {
        event.stopPropagation();
        this.ishowText = true;
        this.index1 = this.addTextObj.indexOf(txt);
        alert(this.index1)
        this.form.desc = txt.content;
        this.indexs = -1;

      },
      //点击提交文字
      finish(mes) {
        if (this.indexs == -1) {
          this.addTextObj[this.index1].content = mes;
          this.index1 = 0;
          this.indexs = 0
          this.ishowText = false;
        }
        else if (!mes) {
          this.ishowText = false;
          alert("请输入内容")
          return false;
        }
        else {
          let scope = this;
          var obj = {};
          obj.content = mes;
          obj.contentType = 0;
          scope.addTextObj.push(obj);
          scope.ishowText = false;
        }
        this.form.desc = "";


      },
      //点击添加文字
      addText() {
        this.ishowText = true;
      },
      get_save: function () {
        this.$http.get('http://127.0.0.1/php.php', {
          params: {
            type: 'get_save'
          }
        }).then(function (res) {
          this.arrMes = res.body;
          console.log(this.arrMes);
        })
      },
      //删除字体
      del_txt(txt) {
        var index = this.addTextObj.indexOf(item)
        this.addTextObj.splice(index, 1);
        event.preventDefault()
        event.stopPropagation();

        return false;
      },
//    删除图片
      del_img(item) {
        var index = this.addTextObj.indexOf(item)
        this.addTextObj.splice(index, 1);

      },
      onSubmit() {
        console.log('submit!');
      },

      //提醒弹框
      open() {
        this.$alert('请登录账号', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push("/login");
          }
        });
      },

      //点击发布
      submit_activite() {

        //获取本地数据,是否有登录的
        this.isshow_slider = false;
        var data = JSON.parse(localStorage.getItem('user_mes'));
        if (data == null) {
          this.open();
        }
        else {
          this.personlimg = data.image; //获取当前用户的头像
          this.isshow1 = false;
          this.isshow2 = true;

        }

      },
    }
}
</script>

<style scoped>
  #temp{
    padding-top: 60px;
    background: #eff3f5;
    padding-bottom:70px;
  }
  .userImg {
    width: 100%;
    height: 200px;
    background-size: 100% 100%;
    display: block;
    margin-top: 14px;
    position: relative;
  }
  .uploadImg {
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0;
    height: 300px;
    opacity: 0;
  }

  /*左边的盒子*/
  #box_left {
    width: 73%;
    box-sizing: border-box;
    float: right;
  }
  #sliders{
    margin-top: 0px;
  }



  /*评论区域*/
  #comment {
    width: 100%;
    margin-top: 50px;
  }

  .takeComment {
    padding-top: 20px;
    background: #f3f8fd;

  }

  #submitText {
    width: 90%;
    height: 130px;
    resize: none;
    color: grey;
    /*border: 1px solid seagreen;*/
    padding-top: 30px;
  }

  #btn_send {
  }

  .btns {
    margin-right: 40px;
    float: right;
    display: inline-block;
  }

  .btns > span {
    display: inline-block;
    position: relative;
    top: -10px;
    color: gray;
  }

  /*留言展示*/
  #commentOn {
    width: 100%;
    height: 600px;
    margin-top: 20px;

  }

  #commentOn ul {
    width: 100%;
  }

  #commentOn ul li {
    width: 90%;
    height: 150px;
    padding-top: 15px;
    margin: 0 auto;
    /*border: 1px solid silver;*/

  }

  #commentOn .commentOn_show {
    width: 100%;
    height: 80px;
    /*border: 1px solid silver;*/

  }

  #commentOn .commentOn_act {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }

  #commentOn .commentOn_time {
    width: 30%;
    height: 100%;
    float: left;
    line-height: 40px;
  }

  #commentOn .commentOn_event {
    width: 30%;
    height: 100%;
    float: right;
  }

  #commentOn .commentOn_event > span {
    margin-left: 15px;
    line-height: 40px;
    padding-bottom: 20px;

  }

  #commentOn .commentOn_event span > span {
    display: inline-block;
    margin-left: 5px;
    width: 30px;
    height: 35px;
    background: url("../../../static/img/comments/icons.png") no-repeat;
    background-size: 100%;
  }

  #commentOn .commentOn_event span:nth-of-type(1) span {
    background-position: 0px 0px;
  }

  #commentOn .commentOn_event span:nth-of-type(2) span {
    background-position: 0px -30px;
  }

  #commentOn .commentOn_event span:nth-of-type(3) span {
    background-position: 0px -60px;
  }

  /*右边的盒子*/
  #box_right {
    width: 25%;
    box-sizing: border-box;
    float: left;
  }

  #box_right .ri_top,
  #box_right .ri_bottom {
    width: 100%;
    height: 650px;
    margin-bottom: 30px;
    background: white;

  }

  #box_right .ri_top .ri_title,
  #box_right .ri_bottom .ri_title {
    width: 100%;
    height: 100px;
    background: #e6e6e6;
  }

  #box_right .ri_top .ri_title .ri_font,
  #box_right .ri_bottom .ri_title .ri_font {
    float: left;
    width: 100px;
    height: 35px;
    font-size: 20px;
    margin-top: 35px;
    font-weight: bolder;
  }

  #box_right .ri_top .ri_title .ri_logo,
  #box_right .ri_bottom .ri_title .ri_logo {
    display: inline-block;
    width: 10px;
    height: 50px;
    background: #20b573;
    float: left;
    margin-left: 20px;
    margin-top: 25px;
  }

  #box_right .ri_top .ri_list,
  #box_right .ri_bottom .ri_list {
    width: 100%;
    height: 550px;
    overflow: hidden;
  }

  #box_right .ri_top .ri_list li,
  #box_right .ri_bottom .ri_list li {
    width: 100%;
    height: 10%;
    line-height: 50px;
    overflow: hidden;
    font-size: 16px;
  }

  #box_right .ri_top .ri_list li:hover,
  #box_right .ri_bottom .ri_list li:hover {
    color: #20b573;
    cursor: pointer;
  }

  #box_right .ri_top .ri_list li span,
  #box_right .ri_bottom .ri_list li span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #e6e6e6;
    line-height: 30px;
  }

  #box_right .ri_top .ri_list li:nth-of-type(1) span,
  #box_right .ri_bottom .ri_list li:nth-of-type(1) span {
    background: #20b573;
    color: white
  }

  #box_right .ri_top .ri_list li:nth-of-type(2) span, #box_right .ri_bottom .ri_list li:nth-of-type(2) span {
    background: #4cc38f;
    color: white
  }

  #box_right .ri_bottom .ri_list li:nth-of-type(3) span,
  #box_right .ri_top .ri_list li:nth-of-type(3) span {
    background: #90dab9;
    color: white
  }

  #box_right .ri_top .ri_list li p,
  #box_right .ri_bottom .ri_list li p {
    float: left;
    margin-left: 5%;
    line-height: 50px;

  }
  #hotcom{
    width: 100%;
    background:white;

  }
  #hotcom .hot_Top{
    width: 100%;
    padding:20px 0;
    position: relative;
  }
  #hotcom .hot_Top .hot_Top_left{
    width: 35%;
    float: left;

  }
  #hotcom .hot_Top .hot_Top_left img{
    width: 100%;
  }
  #hotcom .hot_Top .hot_Top_right {
    float: left;
    width: 50%;
    margin-left: 2%;
    padding-left: 30px;
  }
  #hotcom .hot_Top .hot_Top_right h2 {
    text-align: left;

  }
  #hotcom .hot_Top .hot_Top_right p{
    font-size: 14px;
    color: #646466;
    text-align: left;
  }
  #hotcom .hot_Top .hot_Top_right p:nth-of-type(2){
    font-size: 14px;
    line-height: 25px;
  }
  #submits{
    width: 40%;
    height: 40px;
    color:white;
    font-size: 20px;
    background: #20b573;
    border-radius: 10px;
    line-height:40px;
    position: absolute;
    bottom: 30px ;
    right: 40px;

  }
  .hot_body{
    margin-top: 30px;
    width: 100%;
  }
  .topic{
   font-size: 20px;
    color:orange;
    text-align: left;
    background: white;
    margin-bottom: 2px;
  }


  .hot_body ul{
    width: 100%;
    height: 100%;
  }
  .hot_body ul li{
    width: 100%;
    height: 180px;
    padding:25px;
    margin-top:10px;
    background:white;
  }
  .hot_body ul li .head{
    width: 30%;
    background-size: 100% auto;
    float: left;
    height: 100%;
  }



  .line {
      display: inline-block;
      width: 94%;
      margin-left: 3%;
      border-top: 1px solid #999a9d;
    }


  .up_list  {
    width: 100%;
    height: 100%;
    background: #ffffff;


  }
  .up_list li {
    height: 100%;
    width: 100%;

  }
  .text_fa{
    width: 85%;
    padding: 5%;
    padding-top: 0;
    margin: 0 auto;

  }
  .text_fa div p{
    word-break:break-all
  }
  .up_list img {
    width: 100%;
  }

  .text_del {
    width: 15px;
    height: 15px;
    display:block ;
    z-index: 22;
    margin-left:-60px ;


  }
  .text_del img {
    width: 100%;
    height: 100%;

  }
  .img_del {
    width: 15px;
    height: 15px;
    display:block ;
    margin-left:-23px ;

  }
  .img_del img {
    width: 100%;
    height: 100%;

  }

  .btn_up1 {
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
    background: deeppink;
  }
  .btn_up2 {
    margin: 30px auto;
    overflow: hidden;
  }
  .addimg{
    width: 85%;
    height: 20%;
    margin-left: 15%;
    opacity: 0;

  }
  .activite_pic{
    width: 85%;
    height: 300px;
    -webkit-background-size: contain;
    background-size: contain;
    background: no-repeat;
    position: relative;
    margin: 10px auto;


  }
  .Cover_three{
    position: absolute;
    top:0%;
    left: 0;
    flex: 0;
    width: 100%;
    height: 100%;
    background: red;
    opacity: 0;
    z-index: 999;
  }
  .mainbody{
    margin-top: 10px;
    margin-bottom: 30px;
    background: white;
  }

 .personimg{
   width: 50px !important;
   height: 50px !important;
   border-radius: 50%;
   background-size: 100%;
 }
  .headTitle{
   line-height: 30px;
    width: 30%;
    position: relative;
    top: -20%;

  }

</style>
