<template>
 <div id="temp">

   <section>
     <!--头部的照片-->
     <div id="sec_head">
       <div><img src="../../../static/img/home/pro2.jpg" alt=""></div>
       <!--头部的文字-->
       <div id="sec__head_ri">
         <span class="sec_head_title">消防安全主题</span>
         <p>消防安全演练活动方案、教案、总结、反思，防火安全常识以及相关的环创内容。</p>
       </div>
       <!--按钮效果-->
       <div id="sec_head_btn">
        加入教育圈子
       </div>
     </div>

   </section>





 </div>
</template>

<script>


  export default {
  data () {
    return {
      msg:"fire"
    }
  },
  created:function (){

  },
    methods:{

    }
}
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    margin-top: 62px;


  }
  #sec_head{
    width: 100%;
    height: 250px;
    background:white;
    border: 1px solid silver;
    overflow: hidden;

  }
  #sec_head img{
    width: 180px;
    /*height: 18%;*/
    height: 180px;
    float: left;
    margin-top: 35px;
    margin-left: 30px;
  }
  #sec__head_ri{
    float: left;
    /*width: 50%;*/
    height: 60%;
    /*width: 100%;*/
    /*background: deeppink;*/
    margin-left:20px;
    margin-top: 40px;
  }
  #sec__head_ri .sec_head_title{
    color: #70b67c;
    font-size: 25px;
    font-weight:bolder;
    line-height: 60px;
  }
  #sec__head_ri p{
    margin-left: 60px;
    font-size:18px;

  }
  #sec_head_btn{
    width: 150px;
    height: 50px;
    background: #70b67c;
    float: right;
    margin-top: 150px;
    margin-right: 60px;
    color:white;
    border-radius: 8px;
    font-weight:bolder;
    line-height:50px;
  }

</style>
