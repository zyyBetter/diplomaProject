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
  import a from "./simple-inheritence.js"
  import b from "./underscore-min.js"
  import c from "./Game.js"
  import d from "./FrameUtil.js"
  import e from "./StaticSourceUtil.js"
  import f from "./Background.js"
  import g from "./Pipe.js"
  import h from "./Bird.js"

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
