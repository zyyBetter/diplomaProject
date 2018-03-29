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

     <div class="article_right"   >

       <ul>
         <li v-for="item in arrdetail">
           <img :src="item.src" alt="">
           <p>{{item.txt}}</p>
         </li>
       </ul>
     </div>
   </article>






 </div>
</template>

<script>


  export default {
  data () {
    return {
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
      respon:{
      sleep:{
        head:{src:"../../../../static/img/groom/1.jpg",title:"儿童睡前故事",detail:'月亮爬上树梢，星星不断眨眼，孩子却不肯睡觉，这可愁坏了爸妈。不如试试给孩子看看六一宝宝为您特别呈现的儿童睡前故事，让孩子伴随着唯美的童话故事，香甜入睡。'},
        num:[
          {src:"../../../../static/img/groom/2.jpg",txt:"ss"}
        ]
      },
      music:{
        head:{src:"../../../../static/img/groom/2.jpg",title:"儿歌大全100首 ",detail:'亲宝儿歌视频大全为小朋友们提供了最好看儿歌，全部都是小朋友们喜爱的经典儿歌，也都是亲宝网全力制作的新版亲宝儿歌，绝对好看绝对好听。'},
        num:[
          {src:"../../../../static/img/groom/1.jpg",txt:"ss"}
        ]
      },
      gir:{
        head:{src:"../../../../static/img/groom/4.jpg",title:"起司公主儿歌",detail:'《起司公主》是由亲宝文化在2015年全新推出的公主系动画片，公主系列是亲宝专门为女宝宝打造的早教作品，作品将父母对女儿宛若公主般的疼爱与呵护化为设计的灵感，将高贵、精致、优雅的公主元素贯穿于整个系列中，亲宝相信“每个女孩都有一个公主梦”，每个女孩也都将成为公主。'},
        num:[
          {src:"../../../../static/img/groom/1.jpg",txt:"ss"}
        ]
      },
      age:{
        head:{src:"../../../../static/img/groom/5.jpg",title:"0至3岁儿歌",detail:'所谓三岁看老，意思是0-3岁是宝宝早期教育的黄金时期。3岁以前对宝宝的教育决定了宝宝以后的性格及行为习惯的养成，此时，爸爸妈妈可以借助一些优良的儿歌载体，让宝宝多听一些有教育意义的儿歌视频，对宝宝的行为进行正确引导。0至3岁儿歌专题汇总了亲宝儿歌最受欢迎、最具教育意义、最有趣味性的儿歌。如果您喜欢，别忘了分享给更多拼音哦！'},
        num:[
          {src:"../../../../static/img/groom/1.jpg",txt:"ss"}
        ]
      }
      },
      id:'',
      arr:{},
      arrhead:{},
      arrdetail:[]


    }
  },
  created:function (){
    this.id = this.$route.query.id;//获取路由的参数
//    console.log(this.id);
    this.arrhead  = this.respon[this.id].head;
    this.arrdetail  = this.respon[this.id].num;
    console.log( this.arrhead)
  },
    methods:{
      getId(id){
        this.arrhead  = this.respon[id].head;
        this.arrdetail  = this.respon[id].num;
//        alert(id)
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
  }
  .article_right ul{
    width: 100%;
  }
  .article_right ul li {
    width: 33%;
  }


</style>
