﻿<template>
  <div id="temp">

    <slider :child-msg="arrimg" style="margin-top: 50px;" ></slider>

    <!--中间导航栏部分-->
    <div  id="bar">
      <div class="bar02_bottom_top">
        <span>课程</span>
      </div>
        <div id="bar_nav">
          <ul class="bar_nav_mp3">

            <li>
              <router-link to="/home" style="color:black">首页</router-link>
              <audio src="../../../static/source/a1.mp3" id="aa"></audio>
              <span class="bar_nav_mask"></span>
            </li>

            <li>
              <router-link to="/music" style="color:black">童谣</router-link>
              <audio src="../../../static/source/a2.mp3"></audio>
              <span class="bar_nav_mask"></span>
            </li>
            <li>
              <router-link to="/music" style="color:black">唐诗</router-link>
              <audio src="../../../static/source/a3.mp3"></audio>
              <span class="bar_nav_mask"></span>
            </li>
            <li>
            <router-link to="/music" style="color:black">手工绘制</router-link>
              <audio src="../../../static/source/a4.mp3"></audio>
              <span class="bar_nav_mask"></span>
            </li>
            <li>
              <router-link to="/music" style="color:black">绘画</router-link>
              <audio src="../../../static/source/a5.mp3"></audio>
              <span class="bar_nav_mask"></span>

            </li>
            <li>
              <router-link to="/music" style="color:black">成语故事</router-link>
              <audio src="../../../static/source/a6.mp3"></audio>
              <span class="bar_nav_mask"></span>
            </li>
            <li>
              <a href="http://127.0.0.1/diplomaProject/birds/" style="color:black">
                看图识字
              <span class="bar_nav_mask"></span>
              <audio src="../../../static/source/a7.mp3"></audio>
              </a>
            </li>
          </ul>
        </div>

      <div id="bar_left">
        <img src="../../../static/img/home/nav_title.jpg" alt="">
      </div>
      <div id="bar_right" >
        <ul>
          <li v-for="item in arrlesson" @click="move(item.rou)">
            <!--<router-link to="/music">-->
              <img :src='item.src' alt="">
            <!--</router-link>-->
          </li>

           <li>
             <a href="http://127.0.0.1/diplomaProject/birds/">
              <img src='../../../static/img/home/nav1.jpg' alt="">
             </a>
          </li>

        </ul>



      </div>



    </div>

    <!--专题部分 使用插件-->
    <div style="overflow: hidden;" id="bar02" >
      <div class="bar02_bottom_top" >
        <span>音乐</span>
        <!--<span>活动</span>-->
      </div>
      <!--左边面板-->
      <div class="clearfix">
      <div id="bar02_top" >
        <ul id="bar02_title">
          <li>专题</li>
          <li>生活百科</li>
          <li>推荐</li>
        </ul>
        <ul id="bar02_top_bottom">
          <li>
            <ul>
              <li>
                <router-link to="/fire"><p>防火安全,从我做起</p></router-link>
              </li>
              <li>
                <router-link to="/newyear"><p>旺旺狗年,幸福吉祥</p></router-link>
              </li>
              <li>
                <router-link to="/read"><p>半日早读课,学习不能断</p></router-link>
              </li>
              <li>
                <router-link to="/dingdang"><p>多啦A梦,遇见最美的你</p></router-link>
              </li>
              <li>
                <router-link to="/weather"><p>天气预报小知识</p></router-link>
              </li>
              <li>
                <a href="http://127.0.0.1/diplomaProject/birds/"><p>像素鸟,娱乐学习两不误</p></a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <router-link to="/active_submit"><p> 会下雨的“怪树”</p></router-link>
              </li>
              <li>
                <router-link to="/active_submit"><p>蚂蚁是怎么认路的..</p></router-link>
              </li>
              <li>
                <router-link to="/active_submit"><p>儿童科普：蝙蝠为什么倒挂着睡觉等</p></router-link>
              </li>
              <li>
                <router-link to="/active_submit"><p>下雨天蚂蚁为什么会搬家？</p></router-link>
              </li>
              <li>
                <router-link to="/active_submit"><p>蚂蚁是如何分辨方向的？</p></router-link>
              </li>
              <li>
                <router-link to="/active_submit"><p>牛痘的来历</p></router-link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <router-link to="/fire"><p>为什么轮船能浮在水面上并能行走...</p></router-link>
              </li>
              <li>
                <router-link to="/newyear"><p>鼠宝宝为什么要咬木头?</p></router-link>
              </li>
              <li>
                <router-link to="/read"><p>蚂蚁如何过冬的？</p></router-link>
              </li>
              <li>
                <router-link to="/dingdang"><p>为什么不能把头蒙在被子里睡觉？</p></router-link>
              </li>
              <li>
                <router-link to="/weather"><p>简单DIY儿童瀑布编发</p></router-link>
              </li>
              <li>
                <router-link to="/birds"><p>中秋节灯谜大全及谜底</p></router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="bar02_top_center" class="clearfix">
        <ul class="list_bar02">
          <li v-for="item in arrGroom" style="overflow: hidden">
            <img :src="item.src" alt="" @click="sendGroom(item.id)">
            <p style="width: 80%;height: 100%;margin: 0 auto;position: absolute;left: 10%;bottom: -75%;color:white;font-size: 20px;line-height: 50px;background: rgba(0,0,0,0.5);overflow: hidden">{{item.txt}}</p>
          </li>

        </ul>
      </div>
      </div>


      <!--数字滚动的效果-->
      <div id="section">
        <div class="animation-data">
          <ul>
            <li>
              <p>
                <span class="data-change">000,000,000</span>
              </p>
              <span>浏览</span>
            </li>
            <li>
              <p>
                <span class="data-change">00,000</span>
              </p>
              <span>次收藏</span>
            </li>
            <li>
              <p>
                <span class="data-change">000,000,000</span>
              </p>
              <span>学习</span>
            </li>

          </ul>
        </div>
      </div>



      <!--排他的动态的效果插画-->
      <div id="article"  class="clearfix" >
        <div class="clearfix">
          <div class="bar02_bottom_top">
            <span>插画</span>
          </div>
        </div>

        <div class="article_tag clearfix">
          <ul>
            <li @click="goshopcar(index)" v-for="(item,index) in childImg" >
              <div class="article_tag_first"><img :src="item.src" alt=""></div>
                <div class="mask1">{{item.txt}}</div>
            </li>
          </ul>
        </div>
        </div>

      <div id="bar02_bottom">
        <div class="bar02_bottom_top">
          <span>分享</span>
          <!--<span>活动</span>-->
        </div>

        <!--轮播图-->
        <div class="bar_bottom_slider">
          <slick ref="slick" :options="slickOptions" id="bar02_right" class="nav">

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
                <div class="mask">看图识字</div>
              </router-link>
            </div>
          </slick>
        </div>
        <div class="bar_bottom_slider"  id="bar02_right01">
          <div class="bar02_bottom_top">
            <span>链接</span>
          </div>

        </div>
      </div>
    </div>


    <!--脚部-->
    <div id="footer">

      <div id="footer_head">
        友情链接
      </div>
      <ul id="footer_list">
        <li><a href="http://www.o-star.cc/">东方之星学前教育</a></li>
        <li><a href="http://www.tjoys.cn/">幼儿园手工制作教程</a></li>
        <li><a href="http://www.yejs.com.cn/Sczy/mov2/id/812">幼儿园公开课视频</a></li>
        <li><a href="http://www.tjoys.cn/">幼儿教师网</a></li>
        <li><a href="http://www.7cxk.net/">7c教育资源网</a></li>
        <li><a href="http://www.yejs.com.cn/Jiaoan/">幼儿园教案</a></li>
        <li><a href="http://www.yejs.com.cn/">幼儿教育网</a></li>
        <li><a href="http://www.lamabang.com/">辣妈帮</a></li>

        <li><a href="http://www.offcn.com/jiaoshi/">幼儿教师网</a></li>
      </ul>
    </div>



  </div>
</template>

<script>
  /*导入指导轮播图插件*/
  import Slick from 'vue-slick';
  import '../../../node_modules/slick-carousel/slick/slick.css';
  import '../../../static/css/animate.css';
//  导入轮播图
  import slider from "../common/slider.vue"



  export default {
    components: {
      Slick,
      slider
    },


    data() {
      return {
        arrimg:[
          "../../../static/img/home/slider03.jpg",

          "../../../static/img/home/18.jpg",
          "../../../static/img/home/slider06.jpg",
          "../../../static/img/home/slider09.jpg",
          "../../../static/img/home/16.jpg",

        ],
        arrlesson:[
          {rou:"music",src:"../../../static/img/home/nav6.jpg"},
          {rou:"poem",src:"../../../static/img/home/nav2.jpg"},
          {rou:"handmake",src:"../../../static/img/home/nav3.jpg"},
          {rou:"paint",src:"../../../static/img/home/nav7.jpg"},
          {rou:"idoms",src:"../../../static/img/home/nav5.jpg"},

        ],

        arrGroom:[
          {src:"../../../static/img/groom/11.jpg",txt:"摇篮曲",id:'sleep'},
          {src:"../../../static/img/groom/22.jpg",txt:"教诲儿歌",id:'music'},
          {src:"../../../static/img/groom/33.jpg",txt:"连锁调歌",id:'gir'},
          {src:"../../../static/img/groom/44.jpg",txt:"字头歌",id:'age'},
        ],
        childImg:[
          {src:"../../../static/img/chahua/11.jpg",txt:"无限延续I",id:'age'},
          {src:"../../../static/img/chahua/22.jpg",txt:"<SALE BETA>",id:'age'},
          {src:"../../../static/img/chahua/33.jpg",txt:"大米粒,大道理",id:'age'},
          {src:"../../../static/img/chahua/44.jpg",txt:"朋友一起玩",id:'age'},
          {src:"../../../static/img/chahua/55.jpg",txt:"萌萌的奇妙世界",id:'age'},

        ],

        imgarr: [0, 1, 2],

        slickOptions: {
//          下面轮播图一页的的张数
          slidesToShow: 5,
        },
        activeName2: 'first',
      }
    },
    created: function () {
      this.get();

    },

    methods: {
      goin(){
      },
      sendGroom(id){
        this.$router.push("/story?id="+id);//进入不同的路由-
      },
      //课程点击进入不同的页面
      move(rou){
        this.$router.push("/lesson?lesson="+rou);//进入不同的路由-
      },
      goshopcar(index){
//         alert(index);
         this.$router.push("/fire");

      },


//     首页的动画
      get() {

        /*引入jq实例*/
        $(function () {




          //6.0导航栏的音乐导航
          $(".bar_nav_mp3 li").each(function (key,value){
//            console.log(key);
//            console.log(value);
            value.style.backgroundPosition = "0"+-(key+1)*40+"px";
          });

//          6.1音乐导航的图片(鼠标移入)
          $("#bar_right li").mouseover(
            function (){
              $(this).animate({top:"-20px"},500);
            }
          )
//          6.2音乐导航的图片(鼠标移出)
          $("#bar_right li").mouseout(
            function (){
              $(this).animate({top:"0px"},500);
            }
          )



//          5.0音乐导航栏的部分,鼠标经过播放音乐
          $(".bar_nav_mp3 li").mouseover(
            function (){
//             1 获取当前经过的格子下的audio
             var a=  $(this).find("audio")[0];
             //2播放动画
              $(this).find(".bar_nav_mask").stop().animate({top:"0px"},200);
              // 3重置0 没有播放完毕下次重新播放
              a.currentTime = 0;
              //4播放音乐
             a.play();
            }
          );
          //4.0鼠标移开清空动画
          $(".bar_nav_mp3 li").mouseout(function (){
            $(this).find(".bar_nav_mask").stop().animate({top:"40px"},200);

          });


//          键盘事件,点击键盘播放音乐
          $(window).keydown ( function (event) {

            //1.0获取索引
            var index = event.keyCode - 49;
//            console.log(index);

            //2.0根据索引获取对应的导航格子,并获取他的audio
            var audio = $(".bar_nav_mp3 li").eq(index).find("audio")[0];

            //3.0播放动画
            $(".bar_nav_mp3 li").eq(index).find(".bar_nav_mask").stop().animate({top:"0px"},300);
//            $(".bar_nav_mp3 li").eq(index).find(".bar_nav_mask").animate({top:"6px"},200);


            // 4.0播放音乐
            // 设置当前进度为0
            audio.currentTime = 0;
            audio.play();
          });
          //5.0键盘弹起,动画恢复
            $(window).keyup ( function (event) {
              var index = event.keyCode - 49;
              $(".bar_nav_mp3 li").eq(index).find(".bar_nav_mask").stop().animate({top:"40px"},300);
            })




//          4.0article中的排他
//           $(".article_tag_text2").css({display:"none"});
          $(".article_tag li").mouseover(function (){
            $(this).stop().animate({width:"23%",height:"100%",opacity:1},500).siblings().stop().animate({width:"19%",height:"100%",opacity:1},500)
          });



//1.0专题导航蒙版动画
          $(".maskpar").mouseover(function () {
            $(this).find(".mask").stop().animate({bottom: "-20px"}, 10);

          });
          $(".maskpar").mouseout(function () {
            $(this).find(".mask").animate({bottom: "-250px"}, 10);

          });

//  2.0        tag图切换
          $("#bar02_title>li").mouseover(function () {
            var index = $(this).index();
            $("#bar02_top_bottom>li").css({display: "none"}).eq(index).css({display: "block"})
            $("#bar02_title>li").eq(index).css({fontSize:'12px',fontWeight:"bolder",background:"blue",color:"white"}).siblings().css({fontSize:'12px',background:"white",color:'black'});
          });

            $("#bar02_top_bottom>li").mouseover(function () {
              var index = $(this).index();

            });

            /*
//  2.0        tag图切换
          $("#bar02_title>li").mouseover(function () {
            var index = $(this).index();

            $("#bar02_top_bottom>li").css({display: "none"}).eq(index).css({display: "block"})
          });

            $("#bar02_top_bottom>li").mouseover(function () {
              var index = $(this).index();
              $("#bar02_title>li").css({fontSize:'20px'}).eq(index).css({fontSize:'23px',fontWeight:"bolder"});
            });
*/

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

//              console.log($(window).scrollTop());
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
//        console.log(tab, event);
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
  slider{
    width: 100%;
    height: 100%;
  }

  .imgs {
    width: 100%;
    height: 100%;
  }

  #bar {
    /*background-image: url("../../../static/img/home/h_b.jpg");*/
    margin-top: 200px;
    /*margin-right: 50px;*/
    padding-left: 20px;
    /*border: 1px solid pink;*/
    /*box-shadow: 0px 10px 5px #ffe1e8;*/
    /*background: palegreen;*/
    border-radius: 20px;
    padding-bottom: 50px;
    height: 800px ;

  }
  #bar_nav{
    width: 100%;
    height: 40px;
    border-top: 2px solid seagreen;
    /*background:darkcyan;*/

  }


  #bar_nav  .bar_nav_mp3{
    width: 100%;
    height: 100%;
    /*background: pink;*/
    overflow: hidden;
    margin-left: 2%;
  }
  #bar_nav  .bar_nav_mp3  li{

    position: relative;
    float: left;
    width: 13%;
    height: 100%;
    border: 1px solid seagreen;
    /*background:darkcyan;*/
    text-align: center;
    margin-left:5px;
    line-height: 40px;
    background:url("../../../static/img/home/_r1_c1.png") no-repeat;
  }
  #bar_nav  .bar_nav_mp3 li span:nth-of-type(1)
  {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: rgba(46,139,87,0.3);
    position: absolute;
    top: 40px;
    left: 0;

  }



  #bar_left{
    float: left;
    width: 25%;
    height: 90%;
    margin-top: 2%;
  }
  #bar_left img{
    width: 100%;
    /*height: 90%;*/
    height: 100%;
  }
  #bar_right{
    float: right;
    width: 75%;
    height: 100%;
    /*background: cyan;*/
  }
  #bar_right ul{
    width: 100%;
    height: 100%;
  }
  #bar_right ul li{
    margin-left: 2% ;
    margin-top: 5% ;
    width: 30%;
    height: 40%;
    float: left;
    position: relative;

  }
  #bar_right ul li img {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);

  }

  #bar_title {
    border-bottom: 1px solid seagreen;
    margin-top: 10px;
    display: block;
    width: 100%;
    height: 60px;
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



  #bar02 {
    width: 100%;
    /*height: 600px;*/
    margin-bottom: 20px;
    border-top: 2px solid seagreen;

  }


  #bar02_top {
    width: 28%;
    height: 100%;
    margin-top: 15px;
    border: 1px solid blue;
    /*box-shadow: 10px 10px 5px #ffe1e8;*/
    border-radius: 20px;
    /*margin-left:10px;*/
    /*background: #fdf8f8;*/
    overflow: hidden;
    /*float: left;*/
    float: left;
    padding: 15px;


  }


  #bar02_title{
    float: right;

  }
  #bar02_top ul {
    width: 100%;
    /*margin: 10px auto;*/
    margin-left: 5%;
    margin-top: 5px;
    /*overflow: hidden;*/

  }

  #bar02_title li {
    float: left;
    width: 30%;
    line-height: 50px;
    margin-left: 6px;
    height: 50px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #475ee0;
    cursor: pointer;
    /*background: #475ee0;*/
    /*color:white*/

  }
 /* #bar02_title li:hover {
    background: #475ee0;
    color:white
  }*/

/*  #bar02_title li:hover {
    background: url("../../../static/img/home/a1.gif") repeat;
    background-size: cover;
    color: white;
    border-radius: 1px;
    height: 50px;
    border: 1px solid #fff2f4;
    box-shadow: none;

  }*/

  #bar02_top_center{
    width: 70%;
    height: 450px;
    background: #f7fbff;
    float: right;;
    margin-top: 20px;
  }
  #bar02_top_center  .list_bar02{
    width: 100%;
    height: 100%;

  }
  #bar02_top_center  .list_bar02 li {
    width: 50%;
    height: 45%;
    float: left;
    margin-bottom: 60px;
    position: relative;
    /*padding-top: 2%;*/
  }
  #bar02_top_center  .list_bar02 li img {
    width: 80%;
    vertical-align: middle;
    text-align: center;
  }
  #bar02_top_center  .list_bar02 li:hover p {
    animation:mymove 1s ;
    /*bottom:0%*/
  }

  @keyframes mymove {
    /*0% {bottom:-80%}*/
    0% {bottom:100%}
    100% {bottom:-75%}

  }

  #bar02_top_bottom {
    width: 100%;
    height: 100%;
    text-align: left;
    /*margin-top:250px;*/
    float: left;
    margin-top: 200px;
  }

  /*专题里面的样式*/
  #bar02_top_bottom ul {
    padding-right: 60px;
  }

  #bar02_top_bottom > li {
    display: none;

  }

  #bar02_top_bottom > li:nth-of-type(1) {
    display: block;
  }



  #bar02_top_bottom ul>li {
    line-height: 60px;
    /*border: 2px solid #fbd2dd;*/
    border-bottom: 1px dashed #475ee0;
    cursor: pointer;
  }
  #bar02_top_bottom ul>li:hover p{
    color:seagreen;
  }

  #bar02_bottom{
    border-top: 2px solid darkcyan;
    margin-top: 50px;
    margin-bottom:60px;
  }
  .bar02_bottom_top{
    width: 100%;
    height: 80px;
    /*border-bottom: 1px solid silver;*/
    overflow:hidden;
    padding-top:20px;
  }
  .bar02_bottom_top span{
    display: inline-block;
    width: 160px;
    height: 50px;
    padding-top: -40px;
    /*padding-left:20;*/
    /*background: darkmagenta;*/
    float: left;
    line-height:60px;
    /*margin-left: 30px;*/
    font-size: 25px;
    border-left: 1px solid seagreen;
    border-right: 1px solid seagreen;

  }
  .bar02_bottom_top:nth-of-type(1) span {
    background: url("../../../static/img/home/logo_1.png") 20px 15px no-repeat;
    /*background-attachment: fixed;*/
    /*background-position: center left;*/
    /*background-origin: border-box;*/
    margin-left: 30px;
  }
  .bar02_bottom_top:nth-of-type(2) span {
    background: url("../../../static/img/home/logo_see.png") 20px 20px no-repeat;
    /*border-right: 1px solid seagreen;*/

  }

  #bar02_right {
    /*border: 6px solid pink;*/
    margin-top: -30px;
    border-radius: 20px;
    width: 100%;
    /*height: 100%;*/
    /*float: right;*/
    /*height: 100%;*/
    /*padding-top: 5%;*/
    /*margin-right: 50px;*/
    /*overflow: hidden;*/
  }
  #bar02_right01{
    margin-top:60px;
    width: 100%;
    border-top: 2px solid darkcyan;
    /*height: 600px;*/
    /*background: cyan;*/

  }
  #bar02_right01 ul{
    width: 100%;
    overflow: hidden;
  }
  #bar02_right01 ul li{
    width: 24%;
    height: 50% ;
    border: 1px solid silver;
    float: left;
    margin-left:1%;
    margin-top: 30px;
    box-shadow: 0px 10px 10px #cbdaf8;
  }
  #bar02_right01 ul li img{
    width: 100%;
  }
  #bar02_right01 ul li p{
    height: 60px;
    width: 100%;
    line-height: 60px;
    perspective: 100px;
    font-size:18px;

  }
  #bar02_right01 ul li p:hover{
    transform: rotateY(30deg);
  }


  #bar02_right div {
    /*margin-top: 20px;*/
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  #bar02_right img {
    width: 100%;
    margin-left: -10px;
    background: white;

  }

  #bar02_right .mask {
    width: 100%;
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
    margin-top: 75px;
    padding-left: 20px;
    border-radius: 20px;
    height: 100px;
    color:white;
    background: #475ee0;
    /*border: 5px solid seagreen;*/
    /*background: rgba(46, 139, 87, 0.1) url("../../../static/img/home/swiper_1.png");*/
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
    border-left: 1px solid white;
    width: 30%;
    margin-top: 5px;

  }

  #section .animation-data li:nth-of-type(1) {
    border-left: none;
  }
  #article{
    width: 100%;
    height: 650px;
    margin-top:60px;
    overflow: hidden;

  }
  #article #article_title{
    width: 15% ;
    height: 50px;
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
    overflow: hidden;
    /*margin-left:7%;*/
  }

  #article .article_tag li{
    float: left;
    width: 18%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    background-size:100%;
    margin: 0 auto;
  }

  #article .article_tag li img{

    width: 100%;
  }
  .mask1{
    position: absolute;
    width: 20%;
    height: 80%;
    text-align: center;
    color:white;
    font-size:30px;
    /*line-height: 100%;*/
    left: 40%;
    top: 0%  ;
    Writing-mode:tb-rl
  }
  /*打开页面默认第三的LI是放大的*/
  #article .article_tag li:nth-of-type(3){
    width: 23%;
    height: 100%;
    /*transform: translateY(-10%);*/
  }

  /*脚部*/
  #footer{
    width: 98%;
    height: 280px;
    background: rgba(71, 94, 224, 0.42);
    padding-top:20px;
    margin: 0px auto;
    margin-bottom:60px;
    /*border: 1px solid #999;*/
    color:white;
    box-shadow: -10px 10px 30px rgba(43, 43, 43, 0.32);

  }
  #footer_head{
    width: 150px;
    height: 60px;
    color:white;
    margin-left: 100px;
    background: url("../../../static/img/home/footer_right.gif") no-repeat;
    background-size: cover;
    font-weight:bolder;
    font-size: 20px;
    line-height: 40px;
  }
  #footer_list{
    width: 90%;
    height: 150px;
    overflow: hidden;
    margin: 0 auto;
    color:white
  }
  #footer_list li{
    width: 20%;
    height: 50%;
    float: left;
    line-height: 100px;
  }
  #footer_list li a{
    color:black
  }
  #footer_list li a:hover{
    font-size:2em;
    /*color:*/
  }
  .article_tag_second{
    height: 65%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .article_tag_text{
    font-size: 20px;
    font-weight:bolder;
    line-height: 60px;
    height: 18%;
    margin-top: 15px;
  }
  .article_tag_text2{
    font-size:13px;
    line-height: 15px;
    padding: 5px;
  }
  .article_tag_second span{
    display:block;
    width: 90%;
    border-bottom: 2px solid slategray;
    margin: 0 auto;
  }
  .article_tag_second p{
    line-height: 20px;
  }

</style>

