<template>
 <div id="temp">
   <!--头部-->
   <header>
     <span>课程列表</span>
     <div>
       <span>查看班级</span>
       <span>查看公开课</span>
     </div>
   </header>
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
           <!--<li>书法</li>-->
           <!--<li>故事</li>-->
           <!--<li>橡树鸟</li>-->
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





 </div>
</template>

<script>


  export default {
  data () {
    return {
      msg:"music"
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
header{
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
    /*background: darkgoldenrod;*/
  }
#title .title_01{
  width: 100%;
  /*height: 100%;*/
  overflow: hidden;
  border: 1px solid silver;
}
#title .title_01>li {
  border-bottom: 1px solid silver;

}
#title .title_01 li {
  /*width: 100%;*/
  height: 50px;
  /*border: 1px solid silver;*/
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
  /*background: seagreen;*/

}

</style>
