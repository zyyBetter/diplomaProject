<template>
 <div id="temp">

{{msg}}







 </div>
</template>

<script>


  export default {
  data () {
    return {
      msg:"read"
    }
  },
  created:function (){
      this.getmessage();
  },
    methods:{
    getmessage(){
      var url ="http://127.0.0.1/diplomaProject/php/first.json";
      this.$http.get(url).then(function (res){
//        this.title = res.body.message;
        console.log(res.body.message);
      })
    }
    }
}
</script>

<style scoped>

</style>
