<template>
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
     <slider id="sliders"></slider>

     <!--评论区域-->
     <div id="comment" class="clearfix">


       <div  id="hotcom" class="clearfix">
         <p style="font-size: 20px;color:orange;text-align: left">【最热话题】</p>
         <div class="hot_Top clearfix" >
           <div class="hot_Top_left">
             <img src="../../../static/img/submit/1.jpg" alt="">
           </div>
           <div class="hot_Top_right clearfix">
             <h2 style="color:seagreen"><img src="../../../static/img/submit/read.png" alt=""><span style="display: inline-block;position: relative;top: -10px;padding-left: 10px;">孩子们的世界是美好的</span></h2>
              <p><img src="../../../static/img/submit/store.png" alt=""><span style="display: inline-block;position: relative;top: -30px;padding-left: 35px;">有时候娃们说的话真是超级搞笑，听过的让人无奈的童言无忌的小故事...</span></p>
             <p><img src="../../../static/img/submit/comment.png" alt=""><span style="display: inline-block;position: relative;top: -10px;padding-left: 10px;">2017-09-12 12:16:30</span></p>

             <div id="submits" @click="submit_activite">点击发布</div>
           </div>
         </div>



       </div>

       <div class="hot_body" v-show="isshow1">
         ddfasdf
       </div>


       <!--发送信息-->
       <div v-show="isshow2" class="mainbody"  style="min-height: 100vh;margin-top: -10px">
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

           <!-----------填写内容------>
           <el-form ref="form" :model="form" label-width="80px">
             <el-form-item label="文章名称">
               <el-input v-model="form.name"></el-input>
             </el-form-item>
         <!--
           <el-form-item label="活动内容">
             <el-input type="textarea" v-model="form.desc"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit">立即创建</el-button>
             <el-button>取消</el-button>
           </el-form-item>-->
           </el-form>


           <!--发表文字-->
           <div class="up_title">
             <span class="line"></span>
             <p class="lineText">活动内容图文编辑</p>
           </div>


           <div>
             <ul class="up_list" id="up_list">


               <li v-for="(item,index) in addTextObj">

                 <!--文字-->
                 <div  class="text_fa"  >
                   <span class="text_del" ><img src="http://oss.dyarea.com/upload_img/del02_0319.png" alt=""></span>
                   <p v-html="item.content" style="text-indent:2em;word-break:break-all"></p>
                 </div>


                 <!--图片-->
                 <div   :style="{backgroundImage: 'url(' + item.content + ')'}"
                      class="activite_pic"
                 >
                   <span class="img_del" @click="del_img(item)" ><img src="http://oss.dyarea.com/upload_img/del02_0319.png" alt=""></span>

                   <img style="width:100vw;" :src="item.content" alt="">
                 </div>
               </li>

               <!--<p style="text-align:center;line-height: 5vw;position: relative;top:-50vw">-->
                 <!--<inline-loading v-show="isshowsctivity1"  text="dengku"></inline-loading>-->
                 <!--<loading :show="isshowsctivity1" text="图片上传中"></loading>-->
               <!--</p>-->
             </ul>

             <!--确认是否删除文字-->


             <!--确认删除图片-->

           </div>


           <!--按钮-->
           <!-------添加文字------>
           <div style="background: url('http://oss.dyarea.com/upload_img/btn1.png'); background-size: 100% 100%;width: 70%;height: 60px;" class="btn_up1"
               ></div>
           <!-------添加图片------>
           <div style="background: url('http://oss.dyarea.com/upload_img/btn2.png'); background-size: 100% 100%;width: 70%;height: 60px;"  class="btn_up2"
               >

             <!-------------------添加图片------------------------->
             <p-upload  class="addimg" widths="true" @imgChange="addChange" :low_quality="true" :no_count="true"                                       :no_show="false"
                        :upload_contain_id="'share1'" upload_counter_id="share2"
                        upload_files_id="share3" upload_input_id="share4"                                           photos_number="1"
                        upload_args="activityimg" ref="head1" @doneStatus="getStatus(3)"></p-upload>

           </div>

         </div>


       </div>

       </div>



   </div>









     </div>
</template>

<script>
//  import weui from '../../static/js/weui.min.js'
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
    }
  },
  created:function (){

  },
    watch:{

        add_nums:function (){
            let scope=this;
            //上传成功返回的路径
            this.imgurls = scope.GLOBAL.oss +scope.$refs.head1.clone[scope.$refs.head1.clone.length-1].imageUrl;

//            scope.addTextObj[scope.addTextObj.length-1].content = scope.imgurls;

//            console.log(scope.addTextObj);
//			$('html, body').animate({scrollTop: $(document).height()}, 10);
//            $('html, body').animate({scrollTop: $('#box').offset().top}, 1000)




        },

      upload_nums:function(){
        let scope=this;
//        alert('封面图片保存成功', 'middle');
        //上传成功返回的路径
//        this.headImage =' http://oss.dyarea.com'+scope.$refs.head.clone[scope.$refs.head.clone.length-1].imageUrl;
      },

      HeadImageUrl: function () {
//
        this.$refs.head.allUpload();
      },
    },
    methods:{
        onSubmit() {
            console.log('submit!');
        },
    //点击发布
      submit_activite(){
        this.isshow1 = false;
        this.isshow2 = true;

      },
        //增加详情图片
        addChange(){
//				return false;
            let scope = this;
            let time1 = setTimeout(function () {
                scope.shareImageUrl = getComputedStyle(document.getElementById("share3").getElementsByClassName('weui-uploader__file')[document.getElementById('share3').getElementsByClassName('weui-uploader__file').length - 1], false).backgroundImage.split("(")[1].split(")")[0];
                clearTimeout(time1);
//                   alert(scope.shareImageUrl)
            }, 1000)

          var obj = {};
            console.log( scope.shareImageUrl)

            obj.content = scope.shareImageUrl;
           obj.contentType = 1;
           scope.addTextObj.push(obj);
           console.log( obj)
        },



        getChange(num) {
//				标题图片
        if(num == 1){
          let scope = this;
          let time1 = setTimeout(function () {
            scope.HeadImageUrl = getComputedStyle(document.getElementById('uploaderFiles').getElementsByClassName('weui-uploader__file')[document.getElementById('uploaderFiles').getElementsByClassName('weui-uploader__file').length - 1], false).backgroundImage.split("(")[1].split(")")[0]
            clearTimeout(time1)
          }, 1000)
//          alert(this.HeadImageUrl)
//          img的地址
//          scope.HeadImageUrl

        }



      },
      getStatus(num) {

//				标题图片
        if(num == 1)
        {
          this.upload_nums++;
        }
          //详情图片
      else if(num == 3){
              this.add_nums++;
          }
//
      },
    }
}
</script>

<style scoped>
  .userImg {
    width: 100%;
    height: 200px;
    background-size: 100% 100%;
    display: block;
    padding-right: 30px;
    margin-top: 14px;
  }
  .uploadImg {
    width: 100%;
    position: absolute;
    /*margin-top: -58px;*/
    top: 0%;
    left: 0;
    height: 300px;
    /*opacity: 0;*/
  }

  /*左边的盒子*/
  #box_left {
    width: 68%;
    /*height: 1000px;*/
    border: 1px solid seagreen;
    box-sizing: border-box;
    float: right;
    /*padding-top: -100px;*/
    /*background:darkmagenta;*/
  }
  #sliders{
    margin-top: 0px;
  }



  /*评论区域*/
  #comment {
    width: 100%;
    /*height: 900px;*/
    margin-top: 50px;
    /*background:lightgreen;*/
    /*margin-top: -600px;*/

  }

  .takeComment {
    /*width: 100%;*/
    /*height: 200px;*/
    padding-top: 20px;
    background: #f3f8fd;
    border: 1px solid silver;
    /*border: 1px solid silver;*/

  }

  #submitText {
    width: 90%;
    height: 130px;
    resize: none;
    color: grey;
    border: 1px solid seagreen;
    padding-top: 30px;
  }

  #btn_send {
    /*margin-top: 20px;*/
  }

  .btns {
    margin-right: 40px;
    float: right;
    display: inline-block;
    /*width: 60px;*/
    /*background: deeppink;*/
  }

  .btns > span {
    display: inline-block;
    /*margin-bottom:90px;*/
    /*line-height: 40px;*/
    position: relative;
    top: -10px;
    color: gray;
  }

  /*留言展示*/
  #commentOn {
    width: 100%;
    height: 600px;
    /*background: darkblue;*/
    margin-top: 20px;

  }

  #commentOn ul {
    width: 100%;
  }

  #commentOn ul li {
    width: 90%;
    /*background: #f8e3e8;*/
    height: 150px;
    padding-top: 15px;
    margin: 0 auto;
    border: 1px solid silver;

  }

  #commentOn .commentOn_show {
    width: 100%;
    height: 80px;
    /*background: darkcyan;*/
    border: 1px solid silver;

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
    /*background: darkmagenta;*/
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
    width: 30%;
    /*height: 1000px*/
    /*border: 1px solid seagreen;*/
    box-sizing: border-box;
    float: left;
    /*overflow: hidden;*/
  }

  #box_right .ri_top,
  #box_right .ri_bottom {
    border: 3px solid #c0c0c0;
    width: 100%;
    height: 650px;
    margin-bottom: 20px;
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
    /*background: pink;*/
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
    /*font-style: oblique;*/
    /*font-style: oblique;*/

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
  }
  #hotcom .hot_Top{
    width: 100%;
    padding:20px 0;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
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
    height: 1000px;
    background: pink;
  }

  .up_title {
    position: relative;
    margin-bottom: 5px;
    margin-top: 5px;
  }


    .line {
      display: inline-block;
      width: 94%;
      margin-left: 3%;
      border-top: 1px solid #999a9d;
    }

  .lineText {
    background: #fbf9fe;
    width: 50%;
    position: absolute;
    left: 25%;
    top: 25%;
    text-align: center;
  }

  .up_list  {
    width: 100%;
    height: 100%;
    /*padding-bottom: 6vw;*/
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
    /*margin-bottom:-20px;*/
    margin: 0 auto;

  }
  .text_fa div p{
    word-break:break-all
  }
  .up_list img {
    width: 100%;
  }

  .text_del {
    width: 4vw;
    height: 4vw;
    display:block ;
    position: relative;
    z-index: 22;
    top: 2vw;
    left: -2vw;
    padding-right:3vw;
    /*background: deeppink;*/
  }
  .text_del img {
    width: 100%;
    height: 100%;

  }
  .img_del {
    width: 4vw;
    height: 4vw;
    display:block ;
    position: relative;
    z-index: 22;
    top: 10vw;
    left: 6vw;
    padding-right:3vw;
    text-align: center;
    line-height: 5vw;
    /*margin-top: 10vw;*/

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
    width: 100vw;
    height: 100vw;
    -webkit-background-size: 100%;
    background-size: 100%;
    /*opacity: 0.5;*/
    background: no-repeat;
    background-origin: content-box;
    position: relative;


  }
  .activite_pic1{
    /*background: #000;*/
    /*background-size: 100%;*/
    background: none !important;
    /*background-clip: padding-box;*/


  }
  .activite_pic{
    width: 100vw;
    height: 100vw;
    -webkit-background-size: 100%;
    background-size: 100%;
    /*opacity: 0.5;*/
    background: no-repeat;
    background-origin: content-box;
    position: relative;


  }




</style>
