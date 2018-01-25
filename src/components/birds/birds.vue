<template>
 <div id="temp">


   <!--<img src="bg1.png" alt="">-->
   <!--<ul>-->
     <!--<li v-for="item in img">-->
       <!--&lt;!&ndash;{{item.src}}&ndash;&gt;-->
       <!--<img :src="item.src" alt="">-->
     <!--</li>-->
   <!--</ul>-->

   <canvas id="canvas" width="900" height="600" style="border: 1px solid #000;">

   </canvas>




 </div>
</template>

<script>


  export default {
  data () {
    return {
      msg:"birds",
      img:[]
    }
  },
    created:function (){
    },
    mounted(){
//      let canvas=document.querySelector('#canvas');
//      console.log(canvas);
      this.get();

    },
    methods:{
    get(){
      var game = new Game({
        fps : 50,// 传-1表示电脑最大的 fps
        canvasId : 'canvas'
      });

      console.log(fps);
//   4.创建加载数据对象

//   2.修改画布的宽高
      game.canvas.width = window.innerWidth;
      game.canvas.height = window.innerHeight;


    }
//    getimg(){
//      var url = "http://127.0.0.1/bird/r.php";
//      this.$http.get(url).then(
//        function (res){
//          console.log(res.body.message);
//          this.img  = res.body.message;
//        },
//        function (err){
//
//          console.log(err);
//        }
//      )
//    }
    }
}


  import a from "../../../static/js/simple-inheritence.js"
  import b from "../../../static/js/underscore-min.js"
  import c from "../../../static/js/Game.js"
  import d from "../../../static/js/FrameUtil.js"
  import e from "../../../static/js/StaticSourceUtil.js"
  import f from "../../../static/js/Background.js"
  import g from "../../../static/js/Pipe.js"
  import h from "../../../static/js/Bird.js"





</script>

<style scoped>
  #temp{
    margin-top: 100px;
  }
  #canvas{
    margin: 0 auto;
    display: block;
    background-color: skyblue;
  }
</style>
