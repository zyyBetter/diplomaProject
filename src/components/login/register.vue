<template>
 <div id="temp">
   <!--登录界面-->
   <div id="panel">
     <!--面板的头部-->
     <div class="panel-header">
       <h2>启蒙教育注册</h2>
     </div>
     <!--面板的中间内容-->
     <form action="">
       <div class="panel-content">
       <!--昵称-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_people.png">

         <input placeholder="请输入昵称" name="user">
       </div>
       <!--账号输入框-->
       <div class="user-pwd">
         <i class="el-icon-phone"></i>
         <input placeholder="手机号" name="number">
       </div>
       <!--密码输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_password.png">
         <input placeholder="请输入密码" type="password" name="pwd">
       </div>
       <!--确认密码输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_password.png">
         <input placeholder="请确认密码" type="password" name="pwd">
       </div>
       <!--确认密码输入框-->
       <div class="user-pwd">
         <i class="el-icon-view"></i>
         <input placeholder="宝宝的年龄" type="number" name="age">
       </div>
       <!--确认性别-->
       <div class="user-sex">
         <!--<span>性别</span>
         男
         <input type="radio" name="sex" value="man" checked="checked">
         女
         <input type="radio" name="sex" value="women" >-->
         <input type="checkbox" value="sure"><router-link to="/rules" id="tiaoli">《儿童教育网站条例》</router-link>

       </div>

       <!--登录按钮-->
       <button class="login-btn" @click="resgiter">注册</button>
       <router-link to="/login" class="pull-right">已经注册了?立即登录?</router-link>

     </div>
     </form>
     <!--面板的尾部-->
     <div class="panel-footer">
       <span>社交账号注册: </span>
       <img src="../../../static/img/login/sina.png">
       <img src="../../../static/img/login/weixin.png">
       <img src="../../../static/img/login/qq.png">
     </div>
   </div>

   <Icon type="checkmark"></Icon>


 </div>
</template>

<script>


  export default {
  data () {
    return {
    }
  },
  created:function (){

  },
    methods:{
      resgiter(){
        alert(1);
      }
    }
}
</script>

<style scoped>
  *{
    margin: 0;
  }

  p{
    width: 100px;
    height: 2000px;
    background: darkblue;
  }

  /*面板*/
  #panel{
    width:400px;
    height: 700px;
    background-color: white;
    /*重写*/
    text-align: left;
    border-radius: 5px;
    box-shadow: -10px 20px 100px black;
    /*定位*/
    position: absolute;
    top:50%;
    left:50%;
    margin-left: -200px;
    margin-top: -200px;
  }

  .panel-header{
    width:100%;
    height:64px;
    background-color: #ec7a9d;
    border-radius: 5px 5px 0 0;
    line-height: 64px;
    color:white;
    text-align: center;
    margin-bottom: 10px;
    cursor: move;
  }

  /*中间的主要内容*/
  .panel-content{
    padding: 20px;
  }

  .panel-content .user-pwd{
    margin-bottom: 15px;
    height: 40px;

    position: relative;
  }

  .panel-content .user-pwd img{
    position: absolute;
    top: 7px;
    left: 6px;
  }
  i{
    position: absolute;
    top: 8px;
    left: 7px;
    font-size: 24px;
    color: #d1d1d1;
    border-right: 1px solid #d1d1d1 ;
    padding-right:5px;
  }


  .panel-content .user-pwd input{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /*设置内边距*/
    padding-left: 38px;
    border-radius: 5px;
    border:1px solid #dddddd;

  }

  .panel-content .user-pwd input:focus{
    outline: none;
    border: 1px solid orange;
    box-shadow: 0 0 10px orange;
  }

  .setting a{
    color: darkgray;
    font-size: 13px;
  }

  .setting a {
    float: right;
  }

  /*按钮*/
  .login-btn{
    margin: 15px 0;
    width: 100%;
    height: 38px;
    background-color: #ec7a9d;
    /*去除边框*/
    border: 0;
    font-size: 20px;
    color: white;
    border-radius: 5px;
  }

  .login-btn:focus{
    outline: none;
  }

  .reg{
    text-align: center;
    margin-bottom: 15px;
    color: darkgray;
    font-size: 13px;
  }

  .reg a{
    color: orangered;
  }


  /*尾部*/
  .panel-footer{
    padding:0 20px;
    height: 44px;
    line-height: 44px;
  }

  .panel-footer img{
    width: 30px;
    vertical-align: middle;
  }

  .user-sex span{
    display:inline-block;
    margin-left:10px;
  }
  input[type='checkbox']{
    width: 20px;
    height: 20px;
    margin-left:10px;
  }
  #tiaoli{
    color:deeppink;
  }


</style>
