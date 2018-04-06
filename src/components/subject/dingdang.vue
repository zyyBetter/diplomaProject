<template>
 <div id="temp">
<div id="main" class="clearfix">
   <section>
     <div class="sec_head clearfix">
     <img src="../../../static/img/details.png" alt="">
       <h2 style="text-align: left;">童话奇幻记-辛小帅系列亲子插画</h2>
       <p style="color: #9aabb8;text-align: left;">
         <span style="margin-right: 10px;display:inline-block;border-radius:3px ;padding: 6px;background: #dfe5e9;">原创</span>
         <span>分类:</span>
         <span style="color:#8c98dd">幼儿插图</span>
         <span style="margin-right: 10px;margin-left: 15px;">版权:<i class="el-icon-news" style="margin-right:5px;margin-left: 10px;"></i></span>
       </p>

       <p style="color: #9aabb8;text-align: left;margin-top: 6px;">
         <i class="el-icon-view" style="margin-right:5px;margin-left: 10px;"></i>11
         <i class="el-icon-star-on" style="margin-right:5px;margin-left: 10px;"></i>11
         <i class="el-icon-loading" style="margin-right:5px;margin-left: 10px;"></i>11
         <i class="el-icon-date" style="margin-right:5px;margin-left: 10px;"></i>2015-2-9
       </p>
     </div>

   </section>
   <article>
     <div class="artcile_top">

       <div class="artcile_img">
         <i class="el-icon-plus" style="width: 30px;height: 30px;padding:5px;background: #3498db;font-size: 18px;font-weight: bolder;color:white;position: absolute;bottom: -15px;left: 45%;border-radius: 50%"></i>
       </div>

     </div>
     <div class="artcile_bottom clearfix">
       <span>
         <p>浏览</p>
         <p>11</p>
       </span>

       <span>
 <p>赞</p>
       <p>22</p>
       </span>


     </div>
   </article>
</div>







 </div>
</template>

<script>


  export default {
  data () {
    return {
      msg:""
    }
  },
  created:function (){

  },
    methods:{

    }
}
</script>

<style scoped>
  #temp{
    width: 100%;
    background: #eff3f5;

    overflow: hidden;
  }
  section{
    width: 70%;
    height: 1000px;
    background: white;
    margin-left: 2%;
    float: left;
  }
  article{
    width: 22%;
    height: 1000px;
    float: right;
    /*background: wheat;*/
    margin-right: 2%;
    /*padding-top: 20px;*/
  }
  #main{
    margin-top: 30px;
  }
  .sec_head{
    /*margin-top: 20px;*/
    padding-top: 20px;
    margin-left: 10px;
    position: relative;
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #eff3f5;
  }
  .sec_head img{
    position: absolute;
    top: -3px;
    right: 3px;
  }
  article .artcile_top{
    width: 100%;
    height: 200px;
    background: white;
    padding-top: 20px;
    position: relative;

  }
  article .artcile_bottom{
    width: 100%;
    height: 60px;
    background: papayawhip;

  }
  article .artcile_bottom span{
    display: inline-block;
    width: 50%;
    height: 100%;
  }
  article .artcile_bottom span p{
    line-height:30px;
  }
  article .artcile_bottom span:nth-of-type(1) {
    float: left;
  }
 article .artcile_bottom span:nth-of-type(2) {
    float: right;
  }
  article .artcile_bottom span p{
    line-height:30px;
  }

  article .artcile_img{
    background: deeppink url("../../../static/img/title1.jpg");
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0px auto;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

</style>
