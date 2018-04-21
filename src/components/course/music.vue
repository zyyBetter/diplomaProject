<template>
 <div id="temp">
<!--头部的组件-->
   <course  @keyword="send_keyword"></course>


   <div id="box">
     <!--商品列表-->
     <ul>
       <li  v-for="item in arrNar" >
         <img :src="item.src" alt="" @click="playVideo(item.video)">
         <p>{{item.text1}}</p>
       </li>
     </ul>
     <!--蒙板-->
     <div id="mask" @mousedown="moveing">
       <span></span>
     </div>
   </div>



   <article id="course" v-show="isshow">
     <div class=" clearfix">
       <ul id="list">
         <li v-for="a in arr" @click="watchMV(a.video)">
           <img :src="a.src" alt="">
           <div>
             <span class="text1">{{a.text1}}</span>
           </div>
         </li>
       </ul>
     </div>
   </article>

   <section v-show="!isshow" class="clearfix">

     <div style="float: left;width: 20%;background: papayawhip;">
       <span style=" float: left;display: inline-block;width: 30px;height: 30px;background: url('../../../static/img/lesson1/int.png') 0 -690px no-repeat"></span>
       <span style="font-size: 18px;line-height: 30px;width: 100px;float: left;">猜你喜欢的</span>
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
       <div @click="getMore" style="margin-top: 15px;cursor: pointer;color:#9b9aff;margin-bottom: 10px;" v-show="getmores">点击加载更多</div>
     </div>

     <div style="float: left;width: 60%;padding: -100px;margin-left: 1%;">
     <object width="60%" height="33" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab" id="videogreen" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
       <param value="http://yuntv.letv.com/bcloud.swf?uu=e83fdad654&amp;pu=55087b3b4d&amp;vu=bc4c03b1a4&amp;auto_play=1&amp;gpcflag=1" name="movie">
       <param value="high" name="quality">
       <param name="wmode" value="transparent">
       <param value="always" name="allowScriptAccess">
       <param value="true" name="allowFullScreen">
       <param value="internal" name="allowNetworking">

       <embed width="830" height="600"  controls="console"  align="middle" pluginspage="http://www.adobe.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" allownetworking="internal" loop="false" play="true" name="videogreen" wmode="transparent" id="FFvideogreen" quality="high" :src="video" autostart=false>
     </object>


     </div>









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
      arrNar:[
        {src: "../../../static/img/nar/1.jpg", text1: "兔子跳",video:"http://s.61baobao.com//zt/qinbao/2012/tuziwu.swf"},
        {src: "../../../static/img/nar/2.jpg", text1: "爱我你就抱抱我",video:"http://s.61baobao.com//common/flash/2012/09/51.swf"},
        {src: "../../../static/img/nar/3.jpg", text1: "猪之歌",video:"http://s.61baobao.com//common/flash/2013/9/22.swf"},
        {src: "../../../static/img/nar/4.jpg", text1: "小喇叭",video:"http://s.61baobao.com//zt/qinbao/2012/xiaolaba.swf"},
        {src: "../../../static/img/nar/5.jpg", text1: "两只老虎",video:"http://s.61baobao.com//zt/qinbao/2011/062.swf"},
        {src: "../../../static/img/nar/6.jpg", text1: "妈妈的吻",video:"http://s.61baobao.com//zt/qinbao/2012/mamadewen.swf"},
        {src: "../../../static/img/nar/7.jpg", text1: "小老鼠上台灯",video:"http://s.61baobao.com//zt/qinbao/2011/022.swf"},
        {src: "../../../static/img/nar/8.jpg", text1: "拔萝卜",video:"http://s.61baobao.com//zt/qinbao/baluobo2.swf"},
        {src: "../../../static/img/nar/9.jpg", text1: "种太阳",video:"http://s.61baobao.com//zt/qinbao/2011/132.swf"},
        {src: "../../../static/img/nar/10.jpg", text1: "数鸭子",video:"http://s.61baobao.com//zt/qinbao/2011/042.swf"},
        {src: "../../../static/img/nar/5.jpg", text1: "咕哩动画",video:"http://s.61baobao.com//flash/2016/7/010.swf"},
        {src: "../../../static/img/nar/12.jpg", text1: "kiyomi",video:"http://s.61baobao.com//zt/qinbao/2012/maibaoge.swf"},
        {src: "../../../static/img/nar/1.jpg", text1: "兔子跳",video:"http://s.61baobao.com//zt/qinbao/2012/tuziwu.swf"},
        {src: "../../../static/img/nar/2.jpg", text1: "爱我你就抱抱我",video:"http://s.61baobao.com//common/flash/2012/09/51.swf"},
        {src: "../../../static/img/nar/3.jpg", text1: "猪之歌",video:"http://s.61baobao.com//common/flash/2013/9/22.swf"},
        {src: "../../../static/img/nar/4.jpg", text1: "小喇叭",video:"http://s.61baobao.com//zt/qinbao/2012/xiaolaba.swf"},
        {src: "../../../static/img/nar/5.jpg", text1: "两只老虎",video:"http://s.61baobao.com//zt/qinbao/2011/062.swf"},
        {src: "../../../static/img/nar/6.jpg", text1: "妈妈的吻",video:"http://s.61baobao.com//zt/qinbao/2012/mamadewen.swf"},
        {src: "../../../static/img/nar/5.jpg", text1: "咕哩动画",video:"http://s.61baobao.com//zt/qinbao/2012/maibaoge.swf"},
        {src: "../../../static/img/nar/12.jpg", text1: "kiyomi",video:"http://s.61baobao.com//flash/2015/8/101.swf"},
      ],
//      _______________________________________________________________________
      alllArr: {
        poem:[
          {src: "http://127.0.0.1/diplomaProject/falsh/po_1.jpg", text1: "登岳阳楼记", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_1.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_2.jpg", text1: "回乡偶书（其一）", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_2.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_3.jpg", text1: "晚次鄂州", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_3.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_4.jpg", text1: "小松", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_4.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_5.jpg", text1: "相见欢", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_5.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_6.jpg", text1: "酬乐天扬州初逢席上", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_6.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_7.jpg", text1: "春雨", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_7.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_8.jpg", text1: "江上渔者-范仲淹", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_8.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_9.jpg", text1: "村居-高鼎", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_9.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/po_10.jpg", text1: "望庐山瀑布", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/po_10.swf"}],

      music:[
          {src: "http://127.0.0.1/diplomaProject/falsh/m_1.jpg", text1: "地图", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_1.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_2.jpg", text1: "大雁", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_2.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_3.jpg", text1: "推磨嘎摇磨嘎", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_3.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_4.jpg", text1: "石榴婆婆", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_4.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_5.jpg", text1: "猪宝宝的大餐", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_5.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_6.jpg", text1: "啄木鸟", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_6.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_7.jpg", text1: "铃铃铃", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_7.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_8.jpg", text1: "马大嫂", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_8.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_9.jpg", text1: "看天", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_9.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_10.jpg", text1: "十个手指头", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_10.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_11.jpg", text1: "小蚂蚁搬虫虫", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_11.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_12.jpg", text1: "骆驼志气大", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_12.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_13.jpg", text1: "小司机", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_13.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/m_14.jpg", text1: "大树", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/m_14.swf"},
          ],
        paint:[
          {src: "http://127.0.0.1/diplomaProject/falsh/p_1.jpg", text1: "学画圣诞树", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_1.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_2.jpg", text1: "学画南瓜", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_2.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_3.jpg", text1: "学画小象", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_3.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_4.jpg", text1: "学画恐龙", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_4.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_5.jpg", text1: "学画火箭", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_5.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_6.jpg", text1: "学画小熊", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_6.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_7.jpg", text1: "学画飞机", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_7.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_8.jpg", text1: "学画蝴蝶", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_8.swf"},
         /* {src: "http://127.0.0.1/diplomaProject/falsh/p_9.jpg", text1: "学画斑点狗", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_9.swf"},*/
          {src: "http://127.0.0.1/diplomaProject/falsh/p_10.jpg", text1: "学画马", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_10.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/p_11.jpg", text1: "学画猫", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/p_11.swf"},
        ],
        handmake:[
          {src: "http://127.0.0.1/diplomaProject/falsh/h_1.jpg", text1: "糖果屋童话拼图", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_1.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_2.jpg", text1: "迪士尼公主拼图", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_2.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_3.jpg", text1: "唐老鸭填色", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_3.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_4.jpg", text1: "儿童填色游戏：玫瑰", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_4.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_5.jpg", text1: "填色游戏：麻雀", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_5.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_6.jpg", text1: "给小动物填色", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_6.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_7.gif", text1: "幼儿涂色游戏：鲸鱼", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_7.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_8.png", text1: "生日蛋糕卡片", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_8.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_9.gif", text1: "白雪公主的拼接服饰", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_9.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/h_10.jpg", text1: "奥迪车拼图", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/h_10.swf"},
        ],
        idoms:[
          {src: "http://127.0.0.1/diplomaProject/falsh/i_1.jpg", text1: "拔苗助长", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_1.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_2.jpg", text1: "刻舟求剑", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_2.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_3.jpg", text1: "围魏救赵", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_3.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_4.jpg", text1: "惊弓之鸟", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_4.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_5.jpg", text1: "鸟尽弓藏", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_5.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_6.jpg", text1: "只许州官放火，不许百姓点灯", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_6.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_7.jpg", text1: "狗血淋头", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_7.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_8.jpg", text1: "朝三暮四", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_8.swf"},
          {src: "http://127.0.0.1/diplomaProject/falsh/i_9.jpg", text1: "声东击西", text2: "dd",video:"http://127.0.0.1/diplomaProject/falsh/i_9.swf"},
      ]
      },
      fav:[{
        src: "../../../static/img/fav/1.png", text1: "小苹果", text2: "中文儿歌",video:"http://127.0.0.1/diplomaProject/falsh/f_1.swf"
      },{
        src: "../../../static/img/fav/2.png", text1: "打电话儿歌", text2: "中文儿歌",video:"http://127.0.0.1/diplomaProject/falsh/f_2.swf"
      },{
        src: "../../../static/img/fav/3.png", text1: "小小少年", text2: "中文儿歌",video:"http://127.0.0.1/diplomaProject/falsh/f_3.swf"
      },{
        src: "../../../static/img/fav/4.png", text1: "幸福拍手", text2: "中文儿歌",video:"http://127.0.0.1/diplomaProject/falsh/f_4.swf"
      },{
        src: "../../../static/img/fav/5.png", text1: "江南style", text2: "中文儿歌",video:"http://127.0.0.1/diplomaProject/falsh/f_5.swf"
      },{
        src: "../../../static/img/fav/6.png", text1: "甩葱歌", text2: "中文儿歌",video:"http://127.0.0.1/diplomaProject/falsh/f_6.swf"
      }
      ],
      fav1:[
        {
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
        },
        {
        src: "../../../static/img/fav/7.png", text1: "祝你生日快乐", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/2012/shengri.swf"
      },{
        src: "../../../static/img/fav/8.png", text1: "常用汉字（一）", text2: "dd中文儿歌",video:"http://s.61baobao.com//zt/qinbao/shizi/001.swf"
      },{
        src: "../../../static/img/fav/9.png", text1: "常用汉字（二）", text2: "中文儿歌",video:"http://s.61baobao.com//zt/qinbao/shizi/010.swf"
      },{
        src: "../../../static/img/fav/10.png", text1: "国学启蒙", text2: "d中文儿歌",video:"http://s.61baobao.com//common/flash/2013/qinbaoguoxueqimeng/1.swf"
      }
      ],

      lesson:"",
      arr:[],
      isshow:true,
      video:"",
      getmores:true,
    }
  },
  created:function (){
      this.lesson = this.$route.query.lesson;//获取路由的参数
    this.arr  = this.alllArr[this.lesson];
//    this.getmes();
//    alert(this.arr)

  this.animate();

  },
    methods:{
    //点击加载更多
      getMore(){
       this.fav = this.fav1;
        this.getmores = false;
      },
      playVideo(video){
        alert(video)
//        alert(1);
        this.isshow = false;
        this.video = video;
      },
    //点击播放
      play(video){
//        alert(0);
        this.video = video;

      },
    //子组件传值给父组件
      send_keyword(id){
//        alert(id);
        this.isshow = true;
        this.arr  = this.alllArr[id];
      },
      watchMV(video){ //点击播放视频
         this.isshow = false;
         this.video = video;
      },
      animate(){
        $(function () {

          $("#list li").mouseover(
            function (){
              $(this).stop().animate({top:"-10px"},500);
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

      moveing(){
      // 1.获取需要的标签
      var box = document.getElementById('box');
      var oul = box.children[0];
      var mask = document.getElementById('mask').children[0];

      // 2.动态计算滚动条的宽度
      // 滚动条的长度 / 盒子的长度 = 盒子的长度 / 内容的长度
      // 滚动条长度 = ( 盒子的宽度 / 内容的宽度) * 盒子的宽度
      mask.style.width = box.offsetWidth / oul.offsetWidth * box.offsetWidth + 'px';

      // 3.滚动条移动
      mask.onmousedown = function (event) {
        var event = event || window.event;
        var offsetX = event.clientX - mask.offsetLeft;

        // 移动事件
        document.onmousemove = function (event) {
          var event = event || window.event;

          // 1.计算移动的距离
          var x = event.clientX - offsetX;
          // 2.临界值判断
          if(x < 0){
            x = 0;
          }else if(x >= box.offsetWidth - mask.offsetWidth -2){
            x = box.offsetWidth - mask.offsetWidth -2;
          }
          mask.style.left = x + 'px';

          // 2.内容移动
          // 内容走的距离 / 滚动条走的距离 =（内容的长度 - 盒子的长度） / (盒子长度 - 滚动条的长度)
          oul.style.left = -(oul.offsetWidth - box.offsetWidth) / (box.offsetWidth - mask.offsetWidth) * x + 'px';

          return false;
        };
        return false;
      };

      document.onmouseup = function () {
        document.onmousemove = null;
      }


    }

    }
}
</script>
<link rel="stylesheet" href="css/video-js.css" type="text/css"/>

<style scoped>
  #temp{
    width: 80%;
  }

  #box{
    width: 100%;
    height: 170px;
    margin: 10px auto;
    border: 1px solid #ccc;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;

  }
  #box ul{
    list-style: none;
    width: 2600px;
    position: absolute;
    left:0;
    top: 5px;
  }
  #box ul li{
    float: left;
    width: 5%;
    margin-top: 20px;
  }
  #mask{
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    position: absolute;
    left: 0;
    bottom: 0;
    background: darkgrey;

  }
  #mask span{
    width: 100px;
    background-color: red;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 10px;
    cursor: pointer;
  }


article{
  width: 100%;
  /*height: 1000px;*/
  /*background: deeppink;*/
  /*margin-top:20px;*/
  border: 1px solid silver;
  margin: 0 auto;

}
article #list {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
article #list li:hover{
  background: rgba(55, 185, 125, 0.45);
}
article #list li{
  width: 25%;
  float: left;
  position: relative;
  margin: 0 auto;
  padding:15px;

}
article #list li img{
  width: 100%;
  height: 100%;
}
  .text1{
    display: inline-block;
    padding: 10px;
    width: 80%;
    /*background: rgba(182, 182, 185, 0.35);*/
    color: black;

  }
.text1:hover{
  color: white;

}
  .list_left{

  }

</style>
