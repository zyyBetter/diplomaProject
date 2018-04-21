<template>
 <div id="temp">

    <!--头部-->
 <header>
   <span>课程列表</span>
  <!-- <div>
     <span>查看课程</span>
     <span>推荐</span>
   </div>-->
 </header>
    <!--分类-->
   <section id="title">
     <ul class="title_01">

       <li v-for="item in arr1" @click="sendmes(item.id)">
         <span class="title_bg" ></span>
         {{item.title}}
       </li>
     </ul>
   </section>
 </div>
</template>
<script>
  export default {
  data () {
    return {
      msg:"idioms",
      arr1:[
        {title:"唐诗",id:"poem"},
        {title:"成语故事",id:"idoms"},
        {title:"手工制作",id:"handmake"},
        {title:"绘画",id:"paint"},
        {title:"童谣",id:"music"},

      ]
    }
  },

  created:function (){

  },
    methods:{
      sendmes(id){
        this.$emit("keyword",id)
      }

    }
}
</script>

<style scoped>
  #temp{
    width: 100%;
  }
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
    height: 40px;
    background: white;
  }
  #title .title_01{
    width: 100%;
    overflow: hidden;
    font-size:16px;
  }
  #title .title_01>li {
    border-bottom: 1px solid silver;
    width: 20%;
    float: left;

  }
  .title_bg{
    display: inline-block;
    width: 18px;
    height: 16px;
    background: url("../../../static/img/lesson1/int.png") no-repeat;
  }
  #title .title_01>li:nth-of-type(1) span{
    background-position: -72px -316px;
  }
  #title .title_01>li:nth-of-type(1){
    border:5px solid #e97576;
    border-right:none !important;

  }
  #title .title_01>li:nth-of-type(2) span{
    background-position: -36px -316px;

  }
  #title .title_01>li:nth-of-type(2){
    border:5px solid #5fb1e9;
    border-right:none !important;

  }
  #title .title_01>li:nth-of-type(3) span{
    background-position:  -54px -316px;
  }
  #title .title_01>li:nth-of-type(3){
    border:5px solid #f89f50;
    border-right:none !important;

  }
  #title .title_01>li:nth-of-type(4) span{
    background-position: -20px -316px;
  }
  #title .title_01>li:nth-of-type(4){
    border:5px solid #9e59bb;
    border-right:none !important;

  }
  #title .title_01>li:nth-of-type(5) span{
    background-position: 0px -316px;
  }
  #title .title_01>li:nth-of-type(5){
    border:5px solid #5cc9a6;
    /*border-right:none !important;*/

  }


  #title .title_01 li {
    height: 50px;
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
  }

</style>

