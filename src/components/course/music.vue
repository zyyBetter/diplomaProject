<template>
 <div id="temp">
  <!-- &lt;!&ndash;头部&ndash;&gt;
   <header>
     <span>课程列表</span>
     <div>
       <span>查看班级</span>
       <span>查看公开课</span>
     </div>
   </header>-->
  <!-- &lt;!&ndash;分类&ndash;&gt;
   <section id="title">
     <ul class="title_01">
       <li>所有的分类:
         <ul class="title_02">
           <li>童谣</li>
           <li>故事</li>
           <li>手工制作</li>
           <li>书法</li>
           <li>故事</li>
           <li>橡树鸟</li>
         </ul></li>
       <li>
         分类:
         <ul class="title_02">
           <li>童谣</li>
           <li>故事</li>
           <li>手工制作</li>
           &lt;!&ndash;<li>书法</li>&ndash;&gt;
           &lt;!&ndash;<li>故事</li>&ndash;&gt;
           &lt;!&ndash;<li>橡树鸟</li>&ndash;&gt;
         </ul>
       </li>
       <li>专题:
         <ul class="title_02">
           <li>防火</li>
           <li>新年</li>
           <li>叮当</li>
           <li>早活动</li>
           <li>故事</li>
         </ul></li>
       <li>科目:</li>
     </ul>
   </section>
&lt;!&ndash;导航&ndash;&gt;
   <div id="nav">
     <ul class="nav_list1">
       <li>推荐</li>
       <li>最新</li>
       <li>最热</li>
     </ul>
     <ul class="nav_list2">
       <li><input type="checkbox" checked>免费课程</li>
       <li><input type="checkbox">会员课程</li>
     </ul>
   </div>

   &lt;!&ndash;课程导航的部分&ndash;&gt;
   <article id="course">
     <div class="clearfix">
       <ul id="list">
         <li>
           <img src="../../../static/img/course/pic3.jpg" alt="">
           <div>
             <span>sss</span>
             <span>sss</span>
           </div>
         </li>
         <li>
           <img src="../../../static/img/course/pic3.jpg" alt="">
           <div>
             <span>sss</span>
             <span>sss</span>
           </div>
         </li>
         <li>
           <img src="../../../static/img/course/pic3.jpg" alt="">
           <div>
             <span>sss</span>
             <span>sss</span>
           </div>
         </li>
       </ul>
     </div>
   </article>
-->
   <course :sendmes="arr"></course>

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
      arr:[
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"},
        {src:"../../../static/img/course/pic3.jpg",text1:"ss",text2:"dd"}
        ]
    }
  },
  created:function (){
  this.g()
  },
    methods:{
    g(){
      var va = document.getElementById("ca");
      console.log(va);

    }

    }
}
</script>

<style scoped>
/*header{
  width: 100%;
  height: 80px;
}
header>span{
  display: inline-block;
  width: 200px;
  height: 80px;
  float: left;
  line-height:60px;
  font-size: 20px;
  font-weight:bolder;
  color: #37b97d;
}
header div span{
  display: inline-block;
  width: 150px;
  height: 45px;
  background: #37b97d;
  float: right;
  margin-right: 30px;
  margin-top: 20px;
  border-radius: 8px;
  line-height:45px;
  color: white;
}
  #title{
    width: 100%;
    height: 200px;
    !*background: darkgoldenrod;*!
  }
#title .title_01{
  width: 100%;
  !*height: 100%;*!
  overflow: hidden;
  border: 1px solid silver;
}
#title .title_01>li {
  border-bottom: 1px solid silver;

}
#title .title_01 li {
  !*width: 100%;*!
  height: 50px;
  !*border: 1px solid silver;*!
  text-align: left;
  padding-left: 60px;
  line-height: 50px;
}
#title .title_01 .title_02{
  width: 100%;
  overflow: hidden;
}
#title .title_01 .title_02 li:hover {
  color: #37b97d;
}
#title .title_01 .title_02 li {
  cursor: pointer;
  float: left;
  width: 100px;
  margin-left: 10px;
  !*background: seagreen;*!

}
  #nav{
    width: 100%;
    height: 60px;
    margin-top: 40px;
    background:gainsboro;
    overflow: hidden;
  }
#nav ul {
  width: 50%;
  height: 100%;
}
#nav .nav_list1 {
  float: left;
}
#nav ul li {
  float: left;
  width: 120px;
  line-height:60px;
  font-size: 20px;
}
#nav ul li:hover{
  background:#37b97d;
  color:white;

}

  #nav .nav_list2{
    float: right;
    width: 30%;
  }

article{
  width: 100%;
  height: 1000px;
  background: deeppink;
  margin-top:20px;
}
article #list {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
article #list li{
  width: 30%;
  background: darkcyan;
  margin-left:20px;
  margin-top: 20px;
  float: left;
}
article #list li img{
  width: 100%;
  height: 100%;
}*/
</style>
