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
      <span id="nav_title">课程选择 >> 启蒙</span>

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
    <div style="overflow: hidden" id="bar02">
      <!--左边面板-->
      <div id="bar02_left">
        <ul id="tag_title">
          <li>专题</li>
          <li>活动</li>
          <li>推荐</li>
        </ul>
        <ul id="tag">
          <li>
            <ul>
              <li>
                <router-link to="/fire"></router-link>
              </li>
              <li>
                <router-link to="/newyear">旺旺狗年,幸福吉祥</router-link>
              </li>
              <li>
                <router-link to="/read">半日早读课,学习不能断</router-link>
              </li>
              <li>
                <router-link to="/dingdang">多啦A梦,遇见最美的你</router-link>
              </li>
              <li>
                <router-link to="/weather">天气预报小知识</router-link>
              </li>
              <li>
                <router-link to="/birds">像素鸟,娱乐学习两不误</router-link>
              </li>
            </ul>
          </li>
          <li>2</li>
          <li>3</li>
        </ul>

      </div>


      <!--右边的面板-->
      <slick ref="slick" :options="slickOptions" id="nav" class="nav">

        <div class="maskpar">
          <router-link to="/newyear">
            <img src='../../../static/img/home/pro1.jpg' alt="">
            <div class="mask">春节主题</div>
          </router-link>
        </div>


        <div class="maskpar">
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
    </div>

    <!--数字滚动的效果-->
    <div id="section">
      <div class="animation-data">
        <ul>
          <li>
            <p>
              <span class="data-change">00,000</span>
            </p>
            <span>次安装</span>
          </li>
          <li>
            <p>
              <span class="data-change">000,000,000</span>
            </p>
            <span>用户直播</span>
          </li>
          <li>
            <p>
              <span class="data-change">000,000,000</span>
            </p>
            <span>学习次数</span>
          </li>
        </ul>
      </div>
    </div>

    <!--排他的动态的效果-->
    <div id="article" >
      <div class="clearfix">
      <p  id="article_title" >
        <span></span>
        特色课推介
      </p>
      </div>

      <div class="article_tag">
        <ul>
          <li>
            <div class="1">1</div>
            <div class="2">2</div>
          </li>
          <li>
            <div class="1">1</div>
            <div class="2">2</div>
          </li>
          <li>
            <div class="1">1</div>
            <div class="2">2</div>
          </li>
          <li>
            <div class="1">1</div>
            <div class="2">2</div>
          </li>
          <li>
            <div class="1">1</div>
            <div class="2">2</div>
          </li>

        </ul>
      </div>

    </div>


  </div>
</template>

<script>
  /*导入指导轮播图插件*/
  import Slick from 'vue-slick';
  import '../../../node_modules/slick-carousel/slick/slick.css';
  import '../../../static/css/animate.css';
  //  import animate from "../static/css/animate.css"


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
          slidesToShow: 4,
        },
        activeName2: 'first',
      }
    },
    created: function () {
      this.get();

    },

    methods: {

//     首页的动画
      get() {

        /*引入jq实例*/
        $(function () {
//          4.0article中的排他
          $(".article_tag li").mouseover(function (){
            $(this).find(".1").css({display:"none"}).siblings().css({display:"block"});
            $(this).stop().animate({width:"25%",height:"80%",opacity:0.6},400).siblings().stop().animate({width:"15%",height:"60%",opacity:1},400).find(".2").css({display:"none"}).siblings().css({display:"block"});
          });


//1.0专题导航蒙版动画
          $(".maskpar").mouseover(function () {
            $(this).find(".mask").stop().animate({bottom: "-20px"}, 10);

          });
          $(".maskpar").mouseout(function () {
            $(this).find(".mask").animate({bottom: "-250px"}, 10);

          });

//  2.0        tag图切换
          $("#tag_title>li").mouseover(function () {
            var index = $(this).index();

            $("#tag>li").css({display: "none"}).eq(index).css({display: "block"})
          });

            $("#tag>li").mouseover(function () {
              var index = $(this).index();
              $("#tag_title>li").css({fontSize:'20px'}).eq(index).css({fontSize:'30px'});
            });


//  3.0        数字的滚动
//          section里面的,当页面滚动到一定距离的时候数字滚动显示使用的人数

          var a = 10;
          var b = 170;
          var c = 280;
          var d = 530;
          var e = 610;
          var f = 0;
          var h = 0;
          var index = 0;
          var flag = true;
          var flag2 = true;

          $(window).scroll(function (event) {
            if ($(window).scrollTop() > 800 && flag == true) {
//              alert(1)

              console.log($(window).scrollTop());
              ;
              flag = false;
              var timer = setInterval(function () {
                index++;
                a += 1;
                b += 1;
                c += 1;
                d += 1;
                e += 1;
                f += 1;
                h += 1;
                var data1 = a + ',' + b;
                var data2 = c + ',' + d + ',' + c;
                $('.data-change').eq(0).html(data1);
                $('.data-change').eq(1).html(data2);
                $('.data-change').eq(2).html(data2);
                if (index > 300) {
                  clearInterval(timer)
                }
              }, 10)
            }
            if ($(this).scrollTop() > 4200 && flag2 == true) {
              flag2 = false;
              var timer2 = setInterval(function () {
                index++;
                a += 1;
                b += 1;
                c += 1;
                d += 1;
                e += 1;
                f += 1;
                h += 1;
                var data2 = c + ',' + d + ',' + c;
                $('.recovery strong').eq(0).html(data2);
                if (index > 300) {
                  clearInterval(timer2)
                }
              }, 10)
            }
          })

        });
      },

      handleClick(tab, event) {
        console.log(tab, event);
      },

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


  el-carousel-item {
    width: 100%;
    height: 150%;

  }

  .imgs {
    width: 100%;
    height: 100%;
  }

  #bar {
    /*background-image: url("../../../static/img/home/h_b.jpg");*/
    margin-top: 30px;
    /*margin-right: 50px;*/
    padding-left: 20px;
    border: 6px solid pink;
    /*box-shadow: 0px 10px 5px #ffe1e8;*/
    background: #ffffff;
    border-radius: 20px;
    padding-bottom: 50px;

  }

  #nav_title {
    margin-left: 60px;
    margin-top: 10px;
    display: block;
    width: 60%;
    height: 60px;
    background: #ffffff url("../../../static/img/home/h_b.jpg") no-repeat;
    line-height: 50px;
    color: deeppink;
    font-weight: bolder;
    text-align: justify;
    cursor: pointer;
    padding-left: 10px;
  }

  .nav div {
    margin-top: 20px;
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

  #bar02 {
    width: 100%;

  }

  #nav {
    border: 6px solid pink;
    margin-top: -300px;
    border-radius: 20px;
    width: 70%;
    float: right;
    /*margin-right: 50px;*/
    /*overflow: hidden;*/
  }

  #bar02_left {
    width: 23%;
    height: 300px;
    margin-top: 100px;
    border: 1px solid pink;
    box-shadow: 10px 10px 5px #ffe1e8;
    border-radius: 20px;
    /*margin-left:10px;*/
    background: #fdf8f8;
    overflow: hidden;

  }

  #bar02_left ul {
    width: 100%;
    margin-left: 5%;
    margin-top: 5px;
    overflow: hidden;

  }

  #tag_title li {
    float: left;
    width: 30%;
    line-height: 40px;
    margin-left: 2px;
    height: 40px;
    font-size: 18px;
    background: #fff2f4;
    border-radius: 5px;
    border: 1px solid #fbd2dd;
    color: deeppink;
    box-shadow: 5px 5px 2px #fbd2dd;
    cursor: pointer;

  }

  #tag_title li:hover {
    background: url("../../../static/img/home/a1.gif") repeat;
    background-size: cover;
    color: white;
    border-radius: 1px;
    height: 50px;
    border: 1px solid #fff2f4;
    box-shadow: none;

  }

  #tag {
    width: 100%;
    height: 100%;
    text-align: left;
    /*margin-top:250px;*/
    float: left;
    margin-top: 60px;
  }

  #tag > li {
    display: none;
  }

  #tag > li:nth-of-type(1) {
    display: block;
  }

  /*专题里面的样式*/
  #tag ul {
    padding-right: 60px;
  }

  #tag ul li {
    line-height: 35px;
    border-bottom: 1px dashed deeppink;
    cursor: pointer;
  }

  /* #tag ul>li:hover span{
     color: deeppink !important;
     background: darkmagenta;
   }*/

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
    height: 200px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: -15px;
    bottom: -250px;
    color: white;
    font-size: 30px;
    font-weight: bolder;
    line-height: 200px;
  }

  #section {
    margin-top: 50px;
    padding-left: 20px;
    border-radius: 20px;
    height: 100px;
    border: 5px solid seagreen;
    background: rgba(46, 139, 87, 0.1) url("../../../static/img/home/swiper_1.png");
    background-size: cover;
  }

  #section .animation-data {
    width: 60%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;

  }

  #section .animation-data ul {
    /*text-align: center;*/
    /*width: 80%;*/
    height: 100%;
    margin: 0 auto;

  }

  #section .animation-data li {
    float: left;
    text-align: center;
    line-height: 40px;
    font-weight: bolder;
    font-size: 20px;
    /*margin-left:30px;*/
    /*padding-left:30px;*/
    border-left: 5px solid seagreen;
    width: 30%;
    margin-top: 5px;

  }

  #section .animation-data li:nth-of-type(1) {
    border-left: none;
  }
  #article{
    width: 100%;
    height: 600px;
    border-radius: 20px;
    margin-top:60px;

  }
  #article #article_title{
    width: 15% ;
    height: 50px;
    /*background: darkblue;*/
    float: left;
    font-size: 20px;
    font-weight:bolder;
  }
  #article #article_title span {
    display: inline-block;
    width: 20px;
    height: 40px;
    background: deeppink;
    position: relative;
    top: -10px;
    float: left;
  }
  #article .article_tag{
    width: 100%;
    height: 90%;
    border-top: 2px solid seagreen;
    /*margin-top: -8%;*/

  }
  #article .article_tag ul{
    width: 100%;
    height: 100%;
    margin-top: 40px;
    margin-left:7%;
  }
  #article .article_tag li{
    float: left;
    width: 15%;
    height: 60%;
    background: cyan;
    border: 1px solid silver;
  }
  /*打开页面默认第三的LI是放大的*/
  #article .article_tag li:nth-of-type(3){
    width: 25%;
    height: 80%;
    /*transform: translateY(-10%);*/
  }

</style>

