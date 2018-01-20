<template>
 <div id="temp">




   <!--登录界面-->
   <div id="panel">
     <!--面板的头部-->
     <div class="panel-header">
       <h2>SeeMyGo教育系统</h2>
     </div>
     <!--面板的中间内容-->
     <div class="panel-content">
       <!--账号输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_people.png">
         <input placeholder="请输入用户名/手机号" name="user">
       </div>
       <!--账号输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_people.png">
         <input placeholder="请输入用户名/手机号" name="user">
       </div>
       <!--密码输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_password.png">
         <input placeholder="请输入密码" type="password" name="pwd">
       </div>
       <!--默认的设置-->
       <div class="setting">
         <a href="#">
           <!--<input type="checkbox">-->
           下次自动登录</a>
         <a href="#" class="pull-right">忘记密码?</a>
       </div>
       <!--登录按钮-->
       <button class="login-btn">登&nbsp;录</button>
       <!--立即注册-->
       <div class="reg">
         还没账号?&nbsp;&nbsp;
         <router-link to="/register">立即注册</router-link>
       </div>
     </div>
     <!--面板的尾部-->
     <div class="panel-footer">
       <span>社交账号登录: </span>
       <a href=""><img src="../../../static/img/login/sina.png"></a>
       <a href=""><img src="../../../static/img/login/weixin.png"></a>
       <a href=""><img src="../../../static/img/login/qq.png"></a>
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
    height: 500px;
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
    border: 1px solid #ec7a9d;
    box-shadow: 0 0 10px #ec7a9d;
  }

  .setting a{
    color: darkgray;
    font-size: 13px;
  }

  .setting a.pull-right{
    float: right;
  }

  /*按钮*/
  .login-btn{
    margin: 15px 0;
    width: 100%;
    height: 38px;
    background-color: #ec7a9d;;
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

</style>
