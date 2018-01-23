<template>
  <div id="temp">
    <!--头部的轮播图-->
    <!--后台回去数据后,需要修改-->
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in imgarr" :key="item.id">
          <img :src="'../../../static/img/home/slider0'+item+'.jpg'" alt="" class="imgs">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--中间导航栏部分-->
    <div class="nav" id="bar">

      <div>
        <router-link to="/music">
          <img src='../../../static/img/home/nav1.jpg' alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/story">
          <img src='../../../static/img/home/nav2.jpg' alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/handmake">
          <img src='../../../static/img/home/nav3.jpg' alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/handwrite">
          <img src='../../../static/img/home/nav4.jpg' alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/idioms">
          <img src='../../../static/img/home/nav5.jpg' alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/birds">
          <img src='../../../static/img/home/nav6.jpg' alt="">
        </router-link>
      </div>


    </div>

    <!--专题部分 使用插件-->
    <slick ref="slick" :options="slickOptions" id="nav" class="nav">

      <div class="maskpar">
        <router-link to="/newyear">
          <img src='../../../static/img/home/pro1.jpg' alt="">
          <div class="mask">春节主题</div>
        </router-link>
      </div>


        <div  class="maskpar">
        <router-link to="/fire">
          <img src='../../../static/img/home/pro2.jpg' alt="">
          <div class="mask">消防安全主题</div>
        </router-link>
      </div>

      <div class="maskpar">
        <router-link to="/read">
          <img src='../../../static/img/home/pro3.jpg' alt="">
          <div class="mask">半日活动早准备</div>
        </router-link>
      </div>

      <div class="maskpar">
        <router-link to="/dingdang">
          <img src='../../../static/img/home/pro4.jpg' alt="">
          <div class="mask">多啦A梦</div>
        </router-link>
      </div>

      <div class="maskpar">
        <router-link to="/weather">
          <img src='../../../static/img/home/pro5.jpg' alt="">
          <div class="mask">天气预报</div>

        </router-link>
      </div>


      <div class="maskpar">
        <router-link to="/birds">
          <img src='../../../static/img/home/nav6.jpg' alt="">
          <div class="mask">像素鸟</div>
        </router-link>
      </div>
    </slick>

    <div id="section">

    </div>
  </div>
</template>

<script>
  /*导入指导轮播图插件*/
  import Slick from 'vue-slick';
  import '../../../node_modules/slick-carousel/slick/slick.css';
  import '../../../static/css/animate.css';
  //  import animate from "../static/css/animate.css"


  /*引入jq实例*/
  $(function () {


//专题导航蒙版动画
    $(".maskpar").mouseover(function (){
      $(this).find(".mask").stop().animate({bottom:"-20px"},50);

    });

    $(".maskpar").mouseout(function (){
      $(this).find(".mask").animate({bottom:"-100px"},50);

    })
  });

  export default {
    components: {
      Slick
    },
//    transitions: {
//      bounce: {
//        enterClass: 'bounceIn',
//        leaveClass: 'bounceOutRight'
//      }
//    },

    data() {
      return {

        imgarr: [0, 1, 2],

        slickOptions: {
//          下面轮播图一页的的张数
          slidesToShow: 5,
        },

      }
    },
    created: function () {

    },

    methods: {

      next() {
        this.$refs.slick.next();
      },

      prev() {
        this.$refs.slick.prev();
      },

      reInit() {
        this.$nextTick(() => {
          this.$refs.slick.reSlick();
        });
      },


    },
//

  }

</script>

<style scoped>

  .imgs {
    width: 100%;
    height: 130%;
  }

  #bar {
    background-image: url("../../../static/img/home/h_b.jpg");
    margin-top: 30px;
    margin-right: 50px;
    padding-left: 20px;
    border: 6px solid pink;
    background: #faeaed;
    border-radius: 20px;
    padding-bottom: 50px;

  }

  .nav div {
    margin-top: 60px;
    margin-left: 10px;
    width: 14%;
    height: 200px;
    display: inline-block;
    transition: all 0.3s ease
  }

  .nav div img {
    width: 100%;
    height: 100%;
  }

  .nav > div:hover {
    transform: translateY(15px) scale(1.2);
    box-shadow: -10px 10px 100px black
  }

  #nav {
    border: 6px solid pink;
    margin-top: 60px;
    margin-right: 50px;
    padding-left: 20px;
    background: #faeaed;
    border-radius: 20px;
  }

  #nav div {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  #nav img {
    width: 80%;
    margin-left: -5px;
    background: white;

  }

  #nav .mask {
    width: 80%;
    height: 70px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: -15px;
    bottom: -100px;
    color:white;
    font-size:20px;
    line-height:70px;
  }
  #section{
    margin-top:50px;
    margin-right: 50px;
    padding-left: 20px;
    border-radius: 20px;
    background-color: rgba(46,139,87,0.1);
    height: 500px;
    border: 5px solid seagreen;
    /*margin-bottom:300px;*/
  }


</style>

