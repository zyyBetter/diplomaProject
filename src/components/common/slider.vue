<template>
 <div id="temp">

   <div class="block">
     <el-carousel height="400px">
       <el-carousel-item >
         <img src="../../../static/img/home/slider00.jpg" alt="" class="imgs">
       </el-carousel-item>
       <el-carousel-item >
         <img src="../../../static/img/home/slider01.jpg" alt="" class="imgs">
       </el-carousel-item>
       <el-carousel-item >
         <img src="../../../static/img/home/slider02.jpg" alt="" class="imgs">
       </el-carousel-item>
     </el-carousel>
   </div>






 </div>
</template>

<script>


  export default {
  data () {
    return {

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
    /*background: deeppink;*/
    margin-top: 70px;
  }
  .block{
    width: 100%;
    height: 100%;
  }

  .block img{
    width: 100%;
    height: 100%;

  }

</style>
