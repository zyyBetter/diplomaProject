<template>
  <div id="app">
    <!--头部的导航栏-->
    <nav>
      <el-row :gutter="10">
        <el-col class="hidden-sm-and-down" :md="4" :lg="4">

          <img src="../static/img/1.png" alt="" id="imgs">

        </el-col>

        <el-col :xs="24" :sm="16" :md="12" :lg="10">
          <ul class="navbar">
            <li>
              <router-link to="/home">首页</router-link>
            </li>
            <li>
              <router-link to="/lesson?lesson=music">课程</router-link>
            </li>
            <li>
              <router-link to="/active_submit">活动</router-link>

            </li>
            <li>
              <router-link to="/comments">评论</router-link>
            </li>
            <li>
              <router-link to="/shopcar">购物车</router-link>
            </li>

          </ul>
        </el-col>
        <el-col hidden-xs-only :sm="8" :md="8" :lg="10">
          <input placeholder="请搜索..." @click="change" @blur="restore" id="inp" class="hidden-sm-and-down" style="padding-left: 4px">
          <ul class="navlogin">
            <li  id="protior" ></li>
            <li>
              <router-link to="/login" id="login"><span style="color:white">登录</span></router-link>
            </li>
            <li>
              <router-link to="/register" style="color:white">注册</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </nav>
    <!--放置路由占位-->
    <router-view></router-view>

    <!--右边的固定的导航栏-->
    <div class="rightWall">

      <img src="../static/img/home/backTop.png" alt="">
      <span class="mask1" @click="backT"></span>



    </div>

    <!--底部的固定导航栏-->
    <footer class="clearfix">
      <div id="footer_all">

    <!--尾部的左边部分-->
      <div class="footer_left">

        <ul>
          <li>我是家长</li>
          <li>如何注册</li>
          <li>如何学习</li>
          <li>如何互动</li>
        </ul>
        <ul>
          <li>我是老师</li>
          <li>发布课程</li>
          <li>使用题库</li>
          <li>教学资料库</li>
        </ul>
        <ul>
          <li>商业应用</li>
          <li>会员专区</li>
          <li>题库增强版</li>
          <li>用户导入导出</li>
        </ul>
        <ul>
          <li>关于我们</li>
          <li>ES官网</li>
          <li>官方微博</li>
          <li>加入我们</li>
        </ul>
      </div>
        <!--尾部的右边部分-->
      <div id="footer_right">
        <span class="clearfix">
          <img src="../static/img/1.png" alt="" >
        </span>
        <div class="footer_right_img">
          <ul class="clearfix">
          <li><img src="../static/img/login/weixin.png"></li>
          <li><img src="../static/img/login/qq.png"></li>
          <li><img src="../static/img/login/sina.png"></li>
          </ul>
        </div>
      </div>
      </div>
      <div id="footer_bottom">
        <p>©2014-2017 ZYY网络科技有限公司 All Rights Reserved. 粤ICP备13006852号-1 粤0B2-20160872</p>
        <p class="gongan">
          <img src="../static/img/app/reference.png" alt="">
          <span>粤公网安备 33010802003864号</span>
        </p>
      </div>
    </footer>



  </div>
</template>

<script >

  $(function () {
    //滚动条监听
    $('.rightWall').hide();
    $(window).scroll(function (event) {
      //滚动距离大于150时显示返回顶部
      if ($(window).scrollTop() > 200) {
        $('.rightWall').show(200);

      } else {
        $('.rightWall').hide(500);
      }
    });

    //返回顶部点击事件
   /* $('#backT').click(function () {
//      $("#app").animate({scrollTop: 0}, 600)
      window.scrollTo(0,0);
    });*/
  })


  import {COUNTSTR,vm} from "./components/common/vm";
  //接收父组件传过来的图片值
  vm.$on(COUNTSTR,function (COUNTSTR){
    alert(COUNTSTR);
    var protior = document.getElementById('protior');
    var login = document.getElementById('login');
    protior.style.display = "block";
    protior.style.backgroundImage = "url("+COUNTSTR+")";
    login.style.display = "none";

  })
  export default {
    name: 'app',
    methods: {
      change() {
        var inp = document.getElementById("inp");
        inp.style.width = "120px";
        inp.style.transform = "translate(0px)";
      },
      restore() {
        inp.style.width = "100px";

      },
      backT() {
        window.scrollTo(0, 0);
      }
    }



  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  .mask1{
    width: 50px;
    height: 60px;
    display: inline-block;
    position: absolute;
    z-index:22;
    top: 60px;
    right:-5px;
  }

  nav {
    width: 100%;
    height: 50px;
    background: rgba(0, 33, 212, 0.72);
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

  }

  #imgs {
    height: 30px;
    /*width: 100px;*/
    margin-top: 10px;
  }

  .navbar li {
    width: 20%;
    height: 100%;
    float: left;
    color: white;

  }

  .navbar li a {
    color: white;
  }

  input {
    width: 100px;
    height: 30px;
    border-radius: 6px;
    float: left;
    margin-left: 150px;
    /*margin-right:150px;*/
    transition: all 0.5s ease;
    margin-top: 10px;
  }

  ul li {
    line-height: 50px;
    height: 100%;
    font-size: 14px;
    cursor: pointer;
  }

  .navlogin {
    width: 100%;
    height: 100%;
    /*margin-left:100px;*/

  }

  .navlogin li {
    width: 20%;
    float: left;
    color: white !important;

  }

  .rightWall {
    width: 60px;
    height: 300px;
    position: fixed;
    bottom: 30px;
    right:26px;
    opacity: 0.6;
    /*padding-top: 60px;*/
    /*padding-bottom: 60px;*/
    /*margin-bottom: 60px;*/
  }
  .rightWall:hover {
    opacity:1;
  }

  .rightWall ul {
    width: 100%;
    height: 100%;
    padding-top: 100px;
  }

  .rightWall .top li:nth-of-type(1) {
    line-height: 100%;

  }

  .rightWall ul li {
    /*margin-top:;*/
    width: 100%;
    height: 20%;

  }

  .rightWall ul li:hover {
    background: pink;
  }

  .rightWall .top img {
    width: 30px;
    height: 30px;
    margin-top: 20px;
  }

  .navlogin {
    /*width: 400px;*/
    /*float: right;*/
  }

  .el-icon-arrow-up {

  }
  footer{
    width: 100%;
    height: 200px;
    margin-top:30px;
    background:  url("../static/img/app/f_bg.jpg") repeat-x ;
    /*background: #583a46;*/
    /*overflow: hidden;*/
  }
  #footer_all{
    width: 100%;
    height: 100%;
    /*background: darkmagenta;*/
    /*margin: 0 auto;*/
  }
  .footer_left{
    /*background: darkcyan;*/
    width: 60%;
    height: 100%;
    float: left;
    overflow: hidden;
  }
  .footer_left ul{
    width: 20%;
    float: right;
    margin-top:30px;
  }
  .footer_left ul li{
    font-size:15px;
    line-height:35px;
    color: #c1c1c1;

  }
  .footer_left ul li:nth-of-type(1){
    font-size:20px;
    line-height:40px;
    color: #eeeeee;
  }


  #footer_right{
    /*background: white;*/
    width: 40%  ;
    height: 100%  ;
    float: right;
    /*background: salmon;*/

  }
  #footer_right span{
    width: 233px;
    margin-left:40px;

    display: inline-block;
    /*margin-top:30px;*/
    margin-top: 30px ;
    float: left;
    /*background:salmon;*/
    /*transform: translateX(-50px);*/



  }
  #footer_right>img{
    width: 100% ;
    float: left;

  }

  .footer_right_img {
    width: 50% ;
    margin-top: 40px ;
    /*background: chartreuse;*/
    /*border: 6px solid seagreen;*/
    margin-left:50px;

  }
  .footer_right_img li{
    float: left;
    margin-left: 20px;
    /*padding-left:20px;*/
    padding-top:30px;



  }
  .footer_right_img li img{
    width: 40px;
  }
  .footer_right_img li img:hover{
    animation: move 0.5s;

    /*tr*/
  }
  /*底部图片的旋转放大动画*/
  @keyframes move {
    0%{
      transform: rotateZ(90deg) scale(1.2);
    }
    25%{
      transform: rotateZ(180deg) scale(1.2) ;
    ;
    }
    50%{
      transform: rotateZ(270deg) scale(1.2);
    ;
    }
    100%{
      transform: rotateZ(360deg) scale(1.2) ;
    ;
    }

  }

  /*footer底部*/
  #footer_bottom{
    width: 100%;
    height: 100px;
    background: #533743;
  }
  #footer_bottom p:nth-of-type(1){
    width: 80%;
    color: #838383;
    padding-top:20px;
  }
  #footer_bottom .gongan{
    width: 15%;
    height: 30px;
    /*margin:10px ;*/
    margin:15px 35%;
    color: #f5f5f5;
  }
  #footer_bottom .gongan img{
    position: relative;
    top: 5px;
  }

  #protior{
    margin-top:5px;
    margin-left: 30px;
  width: 40px;
    display:none;
    height: 40px;
    border-radius:50%;
    -webkit-background-size: 100%;
    background-size: 100%;
  }



</style>
