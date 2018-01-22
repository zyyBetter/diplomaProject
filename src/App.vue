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
            <li>课程</li>
            <li>评论</li>
            <li>购物车</li>
            <li>会员</li>
          </ul>
        </el-col>
        <el-col hidden-xs-only :sm="8" :md="8" :lg="10">
          <input placeholder="请搜索..." @click="change" @blur="restore" id="inp" class="hidden-sm-and-down">
          <ul class="navlogin">
            <li>
              <router-link to="/login"><span>登录</span></router-link>
            </li>
            <li>
              <router-link to="/register">注册</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </nav>
    <!--放置路由占位-->
    <router-view></router-view>

    <!--右边的固定的导航栏-->
    <div class="rightWall">
      <ul class="top">
        <li>学习中心</li>
        <li>
          <img src="../static/img/login/weixin.png">
        </li>
        <li>
          <img src="../static/img/login/sina.png">
        </li>
        <li>
          <img src="../static/img/login/qq.png">
        </li>
        <li>
          <!--回到顶部-->
          <i class="el-icon-arrow-up"></i>
        </li>

      </ul>


    </div>


  </div>
</template>

<script scoped>

  export default {
    name: 'app',
    methods: {
      change() {
        var inp = document.getElementById("inp");
        inp.style.width = "200px";
        inp.style.transform = "translate(0px)";


      },
      restore() {
        inp.style.width = "100px";

      }

    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    width: 100%;
    height: 60px;
    background: black;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

  }

  #imgs {
    height: 50px;
    /*width: 100px;*/
    margin-top: 5px;
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
    height: 40px;
    border-radius: 10px;
    float: left;
    margin-left: 150px;
    /*margin-right:150px;*/
    transition: all 0.5s ease;
    margin-top: 10px;
  }

  ul li {
    line-height: 60px;
    height: 100%;
    font-size: 20px;
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
    width: 40px;
    height: 100%;
    position: fixed;
    background: #fad4df;
    right: 0;
    top: 0;
    padding-top: 60px;
    padding-bottom: 60px;
    margin-top: 60px;
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


</style>
