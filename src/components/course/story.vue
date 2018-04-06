<template>
 <div id="temp">
<header>
  <ul>
    <li v-for="item in arrNar" @click="getId(item.id)"><span></span>{{item.txt}}</li>
  </ul>
</header>
<section>
  <div class="section_left">
  <img :src="arrhead.src" alt="">
  </div>
  <div  class="section_right">
    <p style="font-size: 20px;line-height: 60px;color:darkorange;font-weight: bolder;">{{arrhead.title}}</p>
    <p style="font-size: 16px;line-height: 30px;padding-right: 30px;">{{arrhead.detail}}</p>
  </div>
</section>



   <article class="clearfix"  style="margin-top: 20px;">
   <div style="float: left;width: 20%;background: papayawhip;">
     <span style=" float: left;display: inline-block;width: 30px;height: 30px;background: url('../../../static/img/lesson1/int.png') 0 -690px no-repeat"></span>
     <span style="font-size: 18px;line-height: 30px;width: 100px;float: left;">推荐</span>
     <ul class="clearfix">
       <li v-for="item in fav" style="width: 100%;padding: 10px;">
         <div style="float: left;"><img :src="item.src" alt=""></div>
         <div>
           <p style="margin-top: 10px;">{{item.text1}}</p>
           <p style="margin-top: 10px;">[{{item.text1}}]</p>
           <button style="background: #f66b20 url('../../../static/img/lesson1/int.png') -95px -504px;margin-top: 15px;color:white;border: none;width: 60px;" @click="play(item.video)">播放</button>
         </div>
       </li>
     </ul>
   </div>

     <div class="article_right"  v-show="ishowVideo"  >

       <ul id="list">
         <li v-for="item in arrdetail" @click="changeVideo(item.video)">
           <img :src="item.src" alt="">
           <p>{{item.txt}}</p>
         </li>
       </ul>


     </div>


     <!--点击切换MP4播放-->
     <div class="article_right" v-show="!ishowVideo">

       <video :src="videos" width="100%" height="600px" preload controls></video>
      <!-- <video id="video" width="100%" height="600px" preload controls>
         <source src="http://127.0.0.1/diplomaProject/3/1.mp4" type='video/mp4'  style="width: 100%; height: 100%;">
       </video>-->
     </div>
   </article>






 </div>
</template>

<script>


  export default {
  data () {
    return {
      ishowVideo:true,
      videos:"",
      arrNar:[
        {txt:"睡前故事",id:"sleep"},
        {txt:"儿歌大全",id:"music"},
        {txt:"公主歌",id:"gir"},
        {txt:"阶段儿歌",id:"age"},
      ],
      msg:"story",
      fav:[{
        src: "../../../static/img/fav/1.png", text1: "小苹果", text2: "中文儿歌",video:"http://s.61baobao.com//flash/2014/7/069.swf"
      },{
        src: "../../../static/img/fav/2.png", text1: "打电话儿歌", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/dadianhua2.swf"
      },{
        src: "../../../static/img/fav/3.png", text1: "小小少年", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/2012/shaonian.swf"
      },{
        src: "../../../static/img/fav/4.png", text1: "幸福拍手", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/2012/paishouge2.swf"
      },{
        src: "../../../static/img/fav/5.png", text1: "江南style", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/2012/jiangnan.swf"
      },{
        src: "../../../static/img/fav/6.png", text1: "甩葱歌", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/cong.swf"
      },{
        src: "../../../static/img/fav/7.png", text1: "祝你生日快乐", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/2012/shengri.swf"
      },{
        src: "../../../static/img/fav/8.png", text1: "常用汉字（一）", text2: "dd中文儿歌",video:"http://s.61baobao.com//zt/qinbao/shizi/001.swf"
      },{
        src: "../../../static/img/fav/9.png", text1: "常用汉字（二）", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/shizi/010.swf"
      },{
        src: "../../../static/img/fav/10.png", text1: "国学启蒙", text2: "d中文儿歌",video:"http://s.61baobao.com//common/flash/2013/qinbaoguoxueqimeng/1.swf"
      },
      ],

      id:'',
      arr:{},
      arrhead:{},
      arrdetail:[],
      message:""


    }
  },
  created:function (){
    this.id = this.$route.query.id;//获取路由的参数
//    console.log(this.id);
//    this.arrhead  = this.respon[this.id].head;
//    this.arrdetail  = this.respon[this.id].num;
//    console.log( this.arrhead)
    this.getimg()
  },
    methods:{
    getimg(){
        var url = "http://127.0.0.1/diplomaProject/php/first.php";
        this.$http.get(url,{
            params:{
              type:'music',
            }
          }
        ).then(
          function (res) {
//            alert(1)
//            console.log(res.bodyText);
//            this.message = res.bodyText;
            this.message =  JSON.parse(res.bodyText);


            console.log(this.message);


            this.arrhead = this.message[this.id].head;
            this.arrdetail = this.message[this.id].num;
            console.log(this.arrhead)
            console.log(this.arrdetail)

          },
          function (err) {

            console.log(err);
          }
        )
      },

      getId(id){
      alert(id)

        this.arrhead = this.message[id].head;
        this.arrdetail = this.message[id].num;
        this.ishowVideo = true;
//        alert(id)
      },
      changeVideo(video){
        this.ishowVideo = false;
//        setTimeout(function(){
//          alert(this.videos)
//
//        },100);
        this.videos = video;
        alert(this.videos)

      }

    }
}
</script >

<style scoped type="text/less">
  #temp{
    /*padding-bottom: 30px;*/
  }
  header{
    width: 100%;
    height: 90px;
    padding-top: 30px;
  }
  header ul{
    width: 100%;
    height: 100%;
  }
  header ul li{
    width: 25%;
    height: 100%;
    border: 1px  solid saddlebrown;
    float: right;
    line-height:40px;
    padding-bottom: 20px;
    font-size: 18px;
    color:white
  }
  header ul li span{
    width: 46px;
    height: 44px;
    display: inline-block;
    position: relative;
    top: 6px;
  }
  header ul li:nth-child(1){
    background: #49a5e5;
  }
  header ul li:nth-child(1) span{
    background: url("../../../static/img/lesson1/int.png") no-repeat -92px -269px;
  }
  header ul li:nth-child(1):hover span{
    background: url("../../../static/img/lesson1/Rocket.gif") ;
  }
 header ul li:nth-child(2){
    background: #2fccae;
  }
  header ul li:nth-child(2) span{
    background: url("../../../static/img/lesson1/int.png") no-repeat -191px -288px;
  }
  header ul li:nth-child(2):hover span{
    background: url("../../../static/img/lesson1/book.gif") ;
  }
 header ul li:nth-child(3){
    background: #f4903a;
  }
  header ul li:nth-child(3) span{
    background: url("../../../static/img/lesson1/int.png") no-repeat 0px -270px;
  }
  header ul li:nth-child(3):hover span{
    background: url("../../../static/img/lesson1/cd.gif") ;
  }
  header ul li:nth-child(4){
    background: #ac6ec5;
  }
  header ul li:nth-child(4) span{
    background: url("../../../static/img/lesson1/int.png") no-repeat -138.5px -270px;
  }
  header ul li:nth-child(4):hover span{
    background: url("../../../static/img/lesson1/game.gif") ;
  }
  section{
    margin-top: 30px;
    width: 100%;
    height: 200px;
    border: 1px solid saddlebrown;
  }
  .section_left{
    width: 30% ;
    float: left;
    vertical-align: middle;
    margin-top:25px;
  }
  .article_right{
    float: right;
    width: 78%;
    background: papayawhip;
    padding-top: 30px;
  }
  .article_right ul{
    width: 100%;
    overflow: hidden;

  }
  .article_right ul li {
    width: 33%;
    float: left;
  }

  #list li img{
    width: 90%;
    height: 90%;
  }


</style>
