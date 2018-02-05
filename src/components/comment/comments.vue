<template>
 <div id="temp" class="clearfix">

   <!--左边盒子-->
   <div id="box_left" class="clearfix" >
     <!--轮播图-->
    <!-- <div class="block">
       <el-carousel height="400px">
         <el-carousel-item >
           <img src="../../../static/img/home/slider00.jpg" alt="" class="imgs">
         </el-carousel-item>
         <el-carousel-item >
           <img src="../../../static/img/home/slider01.jpg" alt="" class="imgs">
         </el-carousel-item>
         <el-carousel-item >
           <img src="../../../static/img/home/slider02.jpg" alt="" class="imgs">
         </el-carousel-item>
       </el-carousel>
     </div>-->
     <slider></slider>

     <!--评论区域-->
     <div id="comment">
       <div>

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

    }
}
</script>

<style scoped>
  #temp{
    margin-top: 90px;
  }
  /*左边的盒子*/
  #box_left{
    width:68%;
    height: 1000px;
    border: 1px solid seagreen;
    box-sizing: border-box;
    float: left;
  }

 /* .block img{
    width: 100%;
    height: 100%;

  }*/
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
