<template>
 <div id="temp">
   <!--头部的轮播图-->
   <div class="block">
     <el-carousel height="400px">
       <el-carousel-item v-for="item in imgarr" :key="item.id">
         <img :src="'../../../static/img/home/slider0'+item+'.jpg'" alt="" class="imgs">
       </el-carousel-item>
     </el-carousel>
   </div>

   <!--中间导航栏部分-->
   <div class="nav" >

     <div>
       <router-link to="/music">
       <img src='../../../static/img/home/nav1.jpg' alt="">
       </router-link>
     </div>
     <div>
       <router-link to="/story">
       <img src='../../../static/img/home/nav2.jpg' alt="">
       </router-link></div>
     <div>
       <router-link to="/handmake">
       <img src='../../../static/img/home/nav3.jpg' alt="">
       </router-link></div>
     <div>
       <router-link to="/handwrite">
       <img src='../../../static/img/home/nav4.jpg' alt="">
       </router-link></div>
     <div>
       <router-link to="/idioms">
       <img src='../../../static/img/home/nav5.jpg' alt="">
       </router-link></div>
     <div>
     <router-link to="/birds">
       <img src='../../../static/img/home/nav6.jpg' alt="">
       </router-link></div>


   </div>

   <!--专题部分-->
   <div id="project">

   </div>



 </div>
</template>

<script>
  var navs = document.getElementsByClassName('nav');

export default {
  data () {
    return {
      imgarr:[0,1,2,],

    }
  },
  created:function (){

  },
  methods:{

    beforeenter:function (){
     alert(1);
    },
    enter:function (el,done){
      el.offsetHeight;
      alert(2)
    },
    leave:function (){
      alert(3)
    }




  }
}
</script>

<style scoped>
  .imgs{
    width: 100%;
    height: 130%;
  }
  .nav{
    /*width: 100%;*/
  }
  .nav div{
    margin-top: 60px;
    margin-left: 10px;
    width: 14%;
    height: 200px;
    background: #ffb6d1;
    display: inline-block;
  }
  .nav div img{
    width: 100%;
    height: 100%;
  }
  .nav>div:hover{
    transform: translateY(15px) scale(1.2);
    box-shadow: -10px 10px 100px black
  }
  #project{
    width: 100%;
    height: 600px;
    background:pink;

  }

</style>

