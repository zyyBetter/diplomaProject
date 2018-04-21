<template>
 <div id="temp">
   <!--登录界面-->
   <div id="panel">
     <!--面板的头部-->
     <div class="panel-header">
       <h2>账号注册</h2>
     </div>
     <!--面板的中间内容-->
     <!--<form >-->
       <div class="panel-content">
       <!--昵称-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_people.png">

         <input placeholder="请输入昵称" name="user" v-model="name">
       </div>
       <!--账号输入框-->
       <div class="user-pwd">
         <i class="el-icon-phone"></i>
         <input placeholder="手机号" name="number" v-model="tel">
       </div>
       <!--密码输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_password.png">
         <input placeholder="请输入密码" type="password" name="pwd" v-model="pwd">
       </div>
       <!--确认密码输入框-->
       <div class="user-pwd">
         <img src="../../../static/img/login/icon_password.png">
         <input placeholder="请确认密码" type="password" name="pwd" v-model="pwd2">
       </div>
       <!--确认密码输入框-->
       <div class="user-pwd">
         <i class="el-icon-view"></i>
         <input placeholder="宝宝的年龄" type="number" name="age" v-model="age">
       </div>


         <div style="margin: 20px auto;width: 40%;">
         <div class="userImg" id="title_img"  :style="{backgroundImage: 'url(' + HeadImageUrl + ')'}" >
           <input class="Cover_three"  name="pic[]" multiple id="myinput"
                  type="file" ref="coverImg"  @click="changeFile($event)"
                  accept="image/*"  multiple placeholder="请上传头像" style="opacity: 0">
         </div>
         <span style="text-align: center;width: 60%;display: inline-block">请上传头像</span>
         </div>

       <!--登录按钮-->
       <button class="login-btn" @click="resgiter">注册</button>

       <!--<router-link to="/login" class="pull-right">已经注册了?立即登录?</router-link>-->

     </div>
     <!--</form>-->

   </div>

   <Icon type="checkmark"></Icon>


 </div>
</template>

<script>

  import { Toast } from 'mint-ui';

  export default {
  data () {
    return {
      name:'',
      age:'',
      tel:'',
      pwd:'',
      pwd2:'',
      image:"",
      HeadImageUrl: "../../../static/img/upload.jpg" ,  //标题默认图片
    }
  },
  created:function (){

  },
    methods:{
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
        var url = "http://127.0.0.1/diplomaProject/php/Upload/upload.php";
        $.ajax({
          url: url,
          type: "post",
          data: fd,
          processData: false,
          contentType: false,
          success: function (res) {
//            保存图片的地址以及图片的路径
            scope.HeadUrl = res.data.pic.savepath + res.data.pic.savename;
            scope.image = scope.HeadUrl;

          },
          dataType: "json"
        })

      },
      //输入错误的弹出框
      open(mes,user,name) {
        this.$alert('请输入正确的密码', "111", {
          confirmButtonText: '确定',
          callback: action => {
//            name = ""
            if(name == 1){
//              this.password = ""
            }
          }
        });
      },
      resgiter(){

        //判断是否是手机号码的正则
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.name.length == 0)
          {
            return false;

          }
          else if(this.name.length > 14){

          return false;

        }
        else if(this.tel.length == 0){
          alert("请输入电话号码");
          return false;
        }
        else if(!myreg.test(this.tel)){
          alert("请检查是否输入正确的电话号码");
          return false;
        }
        else if(this.pwd.length == 0){
          alert("请输入电话号码")
          return false;
        }
        else if(this.pwd2.length == 0){
          alert("请输入确认电话号码")
          return false;
        }
        else if(this.pwd != this.pwd2){
          alert("两次密码输入不正确,请重新输入");
          return false;

        }
        else if(this.age == 0){
          alert("请输入宝宝年龄");
          return false;
        }
        else if(!(/(^[1-9]\d*$)/.test(this.age))){
          alert("请输入正确的宝宝年龄");
          return false;

        }
        else if(!this.image){
          alert("请上传图片");
          return false
        }
        else{
          this.resgiter2()
        }

      },


      resgiter2(){
        let that=this;
        this.$http.get('http://127.0.0.1/php.php',{
          params:{
            type:'res',
            name:that.name,
            tel:that.tel,
            pwd:that.pwd,
            age:that.age,
            image:that.image,
            roleId:1
          }
        }).then(function (res) {
          Toast({
            message: '注册成功',
            iconClass: 'icon el-icon-success'
          });
        })
      }
    }
}
</script>

<style scoped>
  *{
    margin: 0;
  }
  .pull-right{
    padding-bottom: 30px;
    margin-bottom: 50px;
  }

  p{
    width: 100px;
    height: 2000px;
    background: darkblue;
  }
  #temp{
    padding-top: 45px;
    padding-bottom: 60px;
    background: #e9f3fc ;
    width: 100%;
    height: 100%;
    -webkit-background-size: 100%;
    background-size: 100%;
    margin-bottom: -30px;

  }

  /*面板*/
  #panel{
    width:400px;
    height: 600px;
    background-color: white;
    /*重写*/
    text-align: left;
    border-radius: 5px;
    /*box-shadow: -10px 20px 100px black;*/
    /*定位*/
    margin: 0 38%;
    box-shadow: -2px 2px 60px #9aabb8;
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
    color:silver;

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
    border: 1px solid #475ee0;
    /*box-shadow: 0 0 10px #475ee0;*/
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
    /*margin-top: 15px;*/
    width: 100%;
    height: 38px;
    background-color: #475ee0;
    /*去除边框*/
    border: 0;
    font-size: 20px;
    color: white;
    border-radius: 5px;
  }

  .login-btn:focus{
    outline: none;
  }
.userImg{
  width:100px;
  height: 100px;
  -webkit-background-size: 100%;
  background-size: 100%;
  /*background: no-repeat;*/
}
  .reg{
    text-align: center;
    /*margin-bottom: 15px;*/
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
    color:blue;
    padding: 10px;
  }
  #tiaoli span:hover{
    /*text-decoration: underline;*/
    border-bottom: 1px solid orange;
  }


</style>
