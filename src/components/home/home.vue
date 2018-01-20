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
    <div class="nav">

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
      <div transition="bounce" class="animated">

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


    </slick>

    <h1>ddd</h1>

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
    $("h1").click(function () {
      alert(1)
    })

  })

  export default {
    components: {
      Slick
    },
    transitions: {
      bounce: {
        enterClass: 'bounceIn',
        leaveClass: 'bounceOutRight'
      }
    },

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


  }

</script>

<style scoped>

  .imgs {
    width: 100%;
    height: 130%;
  }

  .nav div {
    margin-top: 60px;
    margin-left: 10px;
    width: 14%;
    height: 200px;
    background: #ffb6d1;
    display: inline-block;
    transition:all 0.3s ease
  }

  .nav div img {
    width: 100%;
    height: 100%;
  }

  .nav > div:hover {
    transform: translateY(15px) scale(1.2);
    box-shadow: -10px 10px 100px black
  }

  Slick {
    width: 80%;
    margin: 0 auto;
  }

</style>

