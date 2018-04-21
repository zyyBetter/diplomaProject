<template>
 <div id="temp">




   <!--登录界面-->
   <div id="panel">
     <!--面板的头部-->
     <div class="panel-header">
       <h2>登录</h2>
     </div>
     <!--面板的中间内容-->
     <div class="panel-content">
       <!--账号输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_people.png">
         <input placeholder="请输入用户名/手机号" name="user" v-model="user">
       </div>

       <!--密码输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_password.png">
         <input placeholder="请输入密码" type="password" name="pwd" v-model="password">
       </div>
       <!--默认的设置-->
       <div class="setting">
         <a href="#">
           <!--<input type="checkbox">-->
           下次自动登录</a>
         <a href="#" class="pull-right">忘记密码?</a>
       </div>
       <!--登录按钮-->
       <button class="login-btn" @click="login" @keyup.enter="login">登&nbsp;录</button>
       <!--立即注册-->
       <div class="reg">
         还没账号?&nbsp;&nbsp;
         <router-link to="/register">立即注册</router-link>
       </div>
     </div>
   </div>






 </div>
</template>

<script>

  //非父子之间的传值
  import {COUNTSTR,vm} from "../common/vm.js"
  import { Toast } from 'mint-ui';

  export default {
  data () {
    return {
        user:"",
        password:"",
        mes:"",
        img:"",
        image:"",//头像
        url:"",
      userID:0
    }
  },
  created:function (){
      if(this.$route.query.status == 'story'){
         this.url = 1;
      }
  },
    methods:{
//输入错误的弹出框
      open(mes,user,name) {
        this.$alert('请输入正确的'+user, mes, {
          confirmButtonText: '确定',
          callback: action => {
//            name = ""
            if(name == 1){
              this.password = ""
            }
          }
        });
      },

      login(){
          var obj ={};
          obj.user = this.user;
          obj.password = this.password;
          var url = 'http://127.0.0.1/php.php';
          this.$http.get(url,{
            params:{
              type:'login',
              name:obj.user,
              pwd:obj.password
            }
          }).then(function (res){
              if(res.body.length==0){
                this.mes =  "该用户不存在";
                let user = "用户名";
                this.open(this.mes,user)
              }else{
                for(var i=0;i<res.body.length;i++){
                  if(res.body[i].psw==obj.password){
                    this.image = res.body[i].image;  //获取头像的图片
                    this.userID = res.body[i].id;  //获取头像的图片


                    //设置一个对象存放数据,把登录的信息传放在临时存储中
                    let obj = {};
                    obj.userID =  this.userID;
                    obj.image =  this.image;
                    localStorage.setItem('user_mes', JSON.stringify(obj));
                    console.log(JSON.stringify(obj));

                    Toast({
                      message: '登录成功',
                      iconClass: 'icon el-icon-success',
                    });


                    //获取去数据库的图片 ,传值给APP组件,作为儿子,传值给父亲
                    this.img = this.image;
//                    this.$emit("","")
//                    把值放在vm上面,图片的放在常量里面
                    vm.$emit(COUNTSTR,this.img);
                    if(this.url == 1 ){
                      this.$router.push("/fire")
                    }
                    return

                  }

                }

                this.mes =  "密码输入错误";
                let user = "密码";
                this.open(this.mes,user,1)
              }
          })
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
    /*height: 2000px;*/
    background: darkblue;
  }

  /*面板*/
  #panel{
    width:400px;
    height: 400px;
    background-color: white;
    /*重写*/
    text-align: left;
    border-radius: 5px;

    box-shadow: -2px 2px 60px #f3f5f2;
    /*定位*/
    margin: 0 40%;
  }

  .panel-header{
    width:100%;
    height:64px;
    background-color: #475ee0;
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
    border: 1px solid #475ee0;
    box-shadow: 0 0 10px #dfe5e9;
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
    background-color: #475ee0;;
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
  #temp{
    width: 100%;
    height: 100%;
    margin-bottom: -30px;
    background: #e9f3fc ;
    -webkit-background-size:100%;
    background-size: 100%;
    padding-top:70px;
    padding-bottom:60px;

  }

</style>
