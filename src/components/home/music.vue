<template>
 <div id="temp">

{{msg}}



<div id="ca"></div>


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

</style>
