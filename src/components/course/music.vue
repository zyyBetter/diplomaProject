<template>
 <div id="temp">

   <course  @keyword="send_keyword"></course>
   <article id="course" v-show="isshow">
     <div class="clearfix">
       <ul id="list">
         <li v-for="a in arr" @click="watchMV">
           <!--<p>{{sendmes}}</p>-->
           <img :src="a.src" alt="">
           <div>
             <span class="text1">{{a.text1}}</span>
             <!--<span>{{a.text2}}</span>-->
           </div>
         </li>
       </ul>
     </div>


   </article>

   <section v-show="!isshow">
     <object width="645" height="433" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab" id="videogreen" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
       <param value="http://yuntv.letv.com/bcloud.swf?uu=e83fdad654&amp;pu=55087b3b4d&amp;vu=bc4c03b1a4&amp;auto_play=1&amp;gpcflag=1" name="movie">
       <param value="high" name="quality">
       <param name="wmode" value="transparent">
       <param value="always" name="allowScriptAccess">
       <param value="true" name="allowFullScreen">
       <param value="internal" name="allowNetworking">
       <embed width="645" height="433" align="middle" pluginspage="http://www.adobe.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" allownetworking="internal" loop="false" play="true" name="videogreen" wmode="transparent" id="FFvideogreen" quality="high" src="http://s.61baobao.com//flash/2016/7/014.swf">
     </object>






   </section>



 </div>
</template>

<script>

import course from "../common/course.vue"
  export default {
    components:{
     course
    },

  data () {
    return {
      alllArr: {
        poem:[
          {src: "../../../static/img/poem/1.png", text1: "行路难", text2: "dd"},
          {src: "../../../static/img/poem/2.png", text1: "回乡偶书（其一）", text2: "dd"},
          {src: "../../../static/img/poem/3.png", text1: "忆江南", text2: "dd"},
          {src: "../../../static/img/poem/4.png", text1: "小松", text2: "dd"},
          {src: "../../../static/img/poem/5.png", text1: "相见欢", text2: "dd"},
          {src: "../../../static/img/poem/6.png", text1: "酬乐天扬州初逢席上", text2: "dd"},
          {src: "../../../static/img/poem/7.png", text1: "春雨", text2: "dd"},
          {src: "../../../static/img/poem/8.png", text1: "江上渔者-范仲淹", text2: "dd"},
          {src: "../../../static/img/poem/9.png", text1: "村居-高鼎", text2: "dd"},
          {src: "../../../static/img/poem/10.png", text1: "望庐山瀑布", text2: "dd"}],

      music:[
          {src: "../../../static/img/music/1.png", text1: "地图", text2: "dd"},
          {src: "../../../static/img/music/2.png", text1: "大雁", text2: "dd"},
          {src: "../../../static/img/music/3.png", text1: "推磨嘎摇磨嘎", text2: "dd"},
          {src: "../../../static/img/music/4.png", text1: "石榴婆婆", text2: "dd"},
          {src: "../../../static/img/music/5.png", text1: "猪宝宝的大餐", text2: "dd"},
          {src: "../../../static/img/music/6.png", text1: "啄木鸟", text2: "dd"},
          {src: "../../../static/img/music/7.png", text1: "铃铃铃", text2: "dd"},
          {src: "../../../static/img/music/8.png", text1: "马大嫂", text2: "dd"},
          {src: "../../../static/img/music/9.png", text1: "看天", text2: "dd"},
          {src: "../../../static/img/music/10.png", text1: "十个手指头", text2: "dd"},
          {src: "../../../static/img/music/11.png", text1: "小蚂蚁搬虫虫", text2: "dd"},
          {src: "../../../static/img/music/12.png", text1: "骆驼志气大", text2: "dd"},
          {src: "../../../static/img/music/13.png", text1: "小司机", text2: "dd"},
          {src: "../../../static/img/music/14.png", text1: "大树", text2: "dd"},
          ],
        paint:[
          {src: "../../../static/img/paint/1.png", text1: "学画圣诞树", text2: "dd"},
          {src: "../../../static/img/paint/2.png", text1: "学画南瓜", text2: "dd"},
          {src: "../../../static/img/paint/3.png", text1: "学画小象", text2: "dd"},
          {src: "../../../static/img/paint/4.png", text1: "学画恐龙", text2: "dd"},
          {src: "../../../static/img/paint/5.png", text1: "学画火箭", text2: "dd"},
          {src: "../../../static/img/paint/6.png", text1: "学画小熊", text2: "dd"},
          {src: "../../../static/img/paint/7.png", text1: "学画飞机", text2: "dd"},
          {src: "../../../static/img/paint/8.png", text1: "学画蝴蝶", text2: "dd"},
          {src: "../../../static/img/paint/9.png", text1: "学画斑点狗", text2: "dd"},
          {src: "../../../static/img/paint/10.png", text1: "学画马", text2: "dd"},
          {src: "../../../static/img/paint/11.png", text1: "学画猫", text2: "dd"},
        ],
        handmake:[
          {src: "../../../static/img/handmake/1.png", text1: "糖果屋童话拼图", text2: "dd"},
          {src: "../../../static/img/handmake/2.png", text1: "迪士尼公主拼图", text2: "dd"},
          {src: "../../../static/img/handmake/3.png", text1: "唐老鸭填色", text2: "dd"},
          {src: "../../../static/img/handmake/4.png", text1: "儿童填色游戏：玫瑰", text2: "dd"},
          {src: "../../../static/img/handmake/5.png", text1: "填色游戏：麻雀", text2: "dd"},
          {src: "../../../static/img/handmake/6.png", text1: "给小动物填色", text2: "dd"},
          {src: "../../../static/img/handmake/7.png", text1: "幼儿涂色游戏：鲸鱼", text2: "dd"},
          {src: "../../../static/img/handmake/8.png", text1: "生日蛋糕卡片", text2: "dd"},
          {src: "../../../static/img/handmake/9.png", text1: "白雪公主的拼接服饰", text2: "dd"},
          {src: "../../../static/img/handmake/10.png", text1: "奥迪车拼图", text2: "dd"},
        ],
        idoms:[
          {src: "../../../static/img/idoms/1.png", text1: "拔苗助长", text2: "dd"},
          {src: "../../../static/img/idoms/2.png", text1: "以五十步笑百步", text2: "dd"},
          {src: "../../../static/img/idoms/3.png", text1: "枯鱼之肆", text2: "dd"},
          {src: "../../../static/img/idoms/4.png", text1: "惊弓之鸟", text2: "dd"},
          {src: "../../../static/img/idoms/5.png", text1: "家徒四壁", text2: "dd"},
          {src: "../../../static/img/idoms/6.png", text1: "只许州官放火，不许", text2: "dd"},
          {src: "../../../static/img/idoms/7.png", text1: "狗血淋头", text2: "dd"},
          {src: "../../../static/img/idoms/8.png", text1: "刻舟求剑现代版", text2: "dd"},
          {src: "../../../static/img/idoms/9.png", text1: "朝三暮四", text2: "dd"},
          {src: "../../../static/img/idoms/10.png", text1: "挥汗成雨", text2: "dd"},
          {src: "../../../static/img/idoms/11.png", text1: "狼狈为奸成语故事", text2: "dd"},
          {src: "../../../static/img/idoms/12.png", text1: "鱼目混珠", text2: "dd"},
      ]
      },
      lesson:"",
      arr:[],
      isshow:true,
    }
  },
  created:function (){
      this.lesson = this.$route.query.lesson;//获取路由的参数
    this.arr  = this.alllArr[this.lesson];
//    this.getmes();
//    alert(this.arr)

  this.g();
  this.animate();
//  alert( this.lesson)
  },
    methods:{
    //子组件传值给父组件
      send_keyword(id){
//        alert(id);
        this.arr  = this.alllArr[id];
      },
      watchMV(){ //点击播放视频
         this.isshow = false;
      },
      animate(){
        $(function () {

          $("#list li").mouseover(
            function (){
              $(this).stop().animate({top:"-10px"},500);
//              alert(1)
            }
          )
//          6.2音乐导航的图片(鼠标移出)
          $("#list li").mouseout(
            function (){
              $(this).stop().animate({top:"0px"},500);
            }
          )

        })
      },
    g(){
      var va = document.getElementById("ca");
      console.log(va);

    }

    }
}
</script>
<link rel="stylesheet" href="css/video-js.css" type="text/css"/>

<style scoped>


article{
  width: 100%;
  /*height: 1000px;*/
  /*background: deeppink;*/
  margin-top:20px;
  border: 1px solid silver;
}
article #list {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
article #list li{
  width: 30%;
  /*background: darkcyan;*/
  margin-left:20px;
  margin-top: 30px;
  float: left;
  position: relative;

}
article #list li img{
  width: 80%;
  height: 80%;
}
  .text1{
    display: inline-block;
    padding: 10px;
    width: 80%;
    /*height: 40%;*/
    background: #37b97d;
    color: white;

  }
.text1:hover{
  color: white;

}

</style>
