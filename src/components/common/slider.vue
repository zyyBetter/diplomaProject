<template>
 <div id="temp">

   <div class="block">
     <el-carousel height="500px">
       <el-carousel-item v-for="item in childMsg" >
         <img :src="item" alt="" class="imgs">
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
    props: ['childMsg'],
  created:function (){

  },
    methods:{

    }
}
</script>

<style scoped>
  #temp{
    width: 125%;
    height: 300px%;
    /*background: deeppink;*/
    margin-top: 60px;
    margin-left:-12.5%;
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
