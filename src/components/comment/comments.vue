<template>
 <div id="temp" class="clearfix">

   <!--左边盒子-->
   <div id="box_left" >
     <!--轮播图-->
     <slider></slider>

     <!--评论区域-->
     <div id="comment" class="clearfix"  >
       <!--发送-->
       <div class="takeComment">
         <textarea name="textarea" class="takeTextField" id="submitText" @keyup.enter="submit">
           请输入评论~~~~
         </textarea>
         <div class="takeSbmComment clearfix" >
           <!--<input id="btn_send" type="button" class="inputs" value="czxcczx" />-->
           <span class="btns">
           <span>(可按Enter回复)</span>
           <img src="../../../static/img/comments/btn.png" alt="" id="btn_send" @click.enter="submit">
             </span>
         </div>
       </div>

       <!--展示-->
       <div id="commentOn">
         <ul>
           <li>
             <div class="commentOn_show">
               123456
             </div>
             <div class="commentOn_act clearfix">
               <div class="commentOn_time">2017-10-10</div>
               <div class="commentOn_event">
                 <span>1<span class="add" @click="add"></span></span>
                 <span>2<span class="down" @click="down"></span></span>
                 <span>2<span class="del" @click="del"></span></span>
               </div>

             </div>
           </li>
           <li>
             <div class="commentOn_show">
               123456
             </div>
             <div class="commentOn_act clearfix">
               <div class="commentOn_time">2017-10-10</div>
               <div class="commentOn_event">
                 <span>1<span class="add"></span></span>
                 <span>2<span class="down"></span></span>
                 <span>2<span class="del"></span></span>
               </div>

             </div>
           </li>
         </ul>

       </div>


     </div>
   </div>

   <!--右边盒子-->
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
             ES小剧场：考试中的那些尴尬瞬间
           </p>
         </li>
         <li>
           <p>
             <span>2</span>
             3分钟告诉你如何做促销活
           </p>
         </li>
         <li>
           <p>
             <span>3</span>
             三种高效在线教育运营方式，总有一款
           </p>
         </li>
         <li>
           <p>
             <span>4</span>
             教育不能打折，教育云可以
           </p>
         </li>
         <li>
           <p>
             <span>5</span>
             7大网校促销方法，让你摆脱打折的窘境
           </p>
         </li>
         <li>
           <p>
             <span>6</span>
             阔知发布第二期在线教育报告
           </p>
         </li>
         <li>
           <p>
             <span>7</span>
             加措活佛：让蜡烛点亮黑暗
           </p>
         </li>
         <li>
           <p>
             <span>8</span>
             沪江网校分享，移动互联时代招生策略
           </p>
         </li>
         <li>
           <p>
             <span>9</span>
             阔知受邀2017中国M，提出“智慧课堂”
           </p>
         </li>
         <li>
           <p>
             <span>10</span>
             在线教育运营圈丨3种不同类型的群
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
             1EduSoho年终大促，双重钜惠强势来袭
           </p>
         </li>
         <li>
           <p>
             <span>2</span>
             “互动即内容”
           </p>
         </li>
         <li>
           <p>
             <span>3</span>
             加措活佛：让蜡烛点亮黑暗
           </p>
         </li>
         <li>
           <p>
             <span>4</span>
             阔知发布第二期在线教育报告
           </p>
         </li>
         <li>
           <p>
             <span>5</span>
             7大网校促销方法
           </p>
         </li>
         <li>
           <p>
             <span>6</span>
             3分钟告诉你如何做促销活动
           </p>
         </li>
         <li>
           <p>
             <span>7</span>
             盘点2016年12月在线教育
           </p>
         </li>
         <li>
           <p>
             <span>8</span>
             教育不能打折，教育云可以
           </p>
         </li>
         <li>
           <p>
             <span>9</span>
             我抢到了一张“技术门诊”专家号送给你
           </p>
         </li>
         <li>
           <p>
             <span>10</span>
             有CRM在手，网校管理得心应手
           </p>
         </li>
       </ul>
     </div>

   </div>






 </div>
</template>

<script>
  import slider from "../common/slider.vue"


  export default {
    components:{
      slider
    },
  data () {
    return {
    }
  },
    methods:{
//      1.0点击发送留言
      submit(){
        alert(1);
      },

//   2.0点击赞
      add(){
        alert(2)
      },
//   2.0点击踩
      down(){
        alert(3)
      },
//   2.0点击删除
      del(){
        alert(4)

      }

    }
}
</script>

<style scoped>
  #temp{
    margin-top: 90px;
    /*overflow: hidden;*/
  }
  /*左边的盒子*/
  #box_left{
    width:68%;
    /*height: 1000px;*/
    border: 1px solid seagreen;
    box-sizing: border-box;
    float: left;
    /*padding-top: -100px;*/
  }
  slider{
    /*margin-top: 600px;*/
  }

  /*评论区域*/
  #comment{
    width: 100%;
    height: 900px;
    /*background:lightgreen;*/
    /*margin-top: -600px;*/

  }
  .takeComment{
    /*width: 100%;*/
    /*height: 200px;*/
    padding-top:20px;
    background: #f3f8fd;
    border: 1px solid silver;
    /*border: 1px solid silver;*/

  }
  #submitText{
    width: 90%;
    height: 130px;
    resize: none;
    color:grey;
    border: 1px solid seagreen;
    padding-top: 30px;
  }

  #btn_send{
    /*margin-top: 20px;*/
  }
   .btns {
    margin-right:40px;
    float: right;
    display: inline-block;
    /*width: 60px;*/
    /*background: deeppink;*/
  }
  .btns>span{
    display: inline-block;
    /*margin-bottom:90px;*/
    /*line-height: 40px;*/
    position: relative;
    top: -10px;
    color:gray;
  }
  /*留言展示*/
  #commentOn{
    width: 100%;
    height: 600px;
    /*background: darkblue;*/
    margin-top: 20px;

  }
#commentOn ul{
  width: 100%;
}
  #commentOn ul li {
    width: 90%;
    /*background: #f8e3e8;*/
    height: 150px;
    padding-top:15px;
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
    margin-top:10px;
  }
  #commentOn .commentOn_time {
    width: 30%;
    height: 100%;
    float: left;
    line-height:40px;
  }
  #commentOn .commentOn_event {
    width: 30%;
    height: 100%;
    float: right;
    /*background: darkmagenta;*/
  }
  #commentOn .commentOn_event>span {
    margin-left:15px;
    line-height: 40px;
    padding-bottom:20px;

  }
  #commentOn .commentOn_event span>span {
    display: inline-block;
    margin-left:5px;
    width: 30px;
    height: 35px;
    background: url("../../../static/img/comments/icons.png")  no-repeat;
    background-size: 100%;
  }
  #commentOn .commentOn_event span:nth-of-type(1) span{
    background-position: 0px 0px;
  }
  #commentOn .commentOn_event span:nth-of-type(2) span {
    background-position: 0px -30px;
  }
 #commentOn .commentOn_event span:nth-of-type(3) span{
    background-position: 0px -60px;
  }

  /*右边的盒子*/
#box_right{
  width: 30%;
  /*height: 1000px*/
  /*border: 1px solid seagreen;*/
  box-sizing: border-box;
  float: right;
  /*overflow: hidden;*/
}
  #box_right .ri_top,
  #box_right .ri_bottom{
    border: 3px solid #c0c0c0;
    width: 100%;
    height: 650px;
    margin-bottom:20px;
  }

  #box_right .ri_top .ri_title,
  #box_right .ri_bottom .ri_title
  {
    width: 100%;
    height: 100px;
    background: #e6e6e6;
  }
  #box_right .ri_top .ri_title .ri_font,
  #box_right .ri_bottom .ri_title .ri_font
  {
    float: left;
    width: 100px;
    height: 35px;
    font-size: 20px;
    margin-top: 35px;
    font-weight:bolder;
  }
  #box_right .ri_top .ri_title .ri_logo,
  #box_right .ri_bottom .ri_title .ri_logo{
  display: inline-block;
    width: 10px;
    height: 50px;
    background: #20b573;
    float: left;
    margin-left:20px;
    margin-top: 25px;
  }
  #box_right .ri_top .ri_list,
  #box_right .ri_bottom .ri_list{
    width: 100%;
    height:550px;
    /*background: pink;*/
    overflow: hidden;
  }
  #box_right .ri_top .ri_list li,
  #box_right .ri_bottom .ri_list li{
    width: 100%;
    height: 10%;
    line-height:50px;
    overflow: hidden;
    font-size:16px;
  }
  #box_right .ri_top .ri_list li:hover,
  #box_right .ri_bottom .ri_list li:hover{
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
    color:white
  }
  #box_right .ri_top .ri_list li:nth-of-type(2) span, #box_right .ri_bottom .ri_list li:nth-of-type(2) span{
    background: #4cc38f;
    color:white
  }
  #box_right .ri_bottom .ri_list li:nth-of-type(3) span,
  #box_right .ri_top .ri_list li:nth-of-type(3) span{
    background: #90dab9;
    color:white
  }

  #box_right .ri_top .ri_list li p,
  #box_right .ri_bottom .ri_list li p {
    float: left;
    margin-left: 5%;
    line-height: 50px;

  }



</style>
