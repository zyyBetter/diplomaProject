<template>
 <div id="temp">

   <div v-show="mainshow">
   <section>


     <ul id="list">
       <li><img src="../../../static/img/chahua2/53.png" alt=""></li>
       <li><img src="../../../static/img/chahua2/54.png" alt=""></li>
       <li><img src="../../../static/img/chahua2/50.png" alt=""></li>
       <li><img src="../../../static/img/chahua2/51.png" alt=""></li>
       <li><img src="../../../static/img/chahua2/52.png" alt=""></li>
     </ul>
     <div class="slider_ctl">
       <span class="slider_prev" @click="turnLeft"></span>
       <span class="slider_next" @click="turnRight"></span>
     </div>



   </section>

   <div id="box1" class="clearfix">

     <div>
     <i class="el-icon-search" ></i>
     <input type="text" v-model="logo" placeholder="请搜索" id="inp">
     </div>

   </div>

   <div id="box">

       <ul class="clearfix">
         <li class="clearfix"  v-for="item in filteredData" @click="details(item.mes)">
           <img :src="item.src" alt="">
           <p style="font-size:16px;margin-right: 8px;float: left;width: 100%;text-align: left"></i>{{item.txt1}}</p>
           <p style="color: #9aabb8;text-align: left;"><span style="display:inline-block;border-radius:3px ;padding: 3px;background: #dfe5e9;font-size:10px;">原创</span><i class="el-icon-view" style="margin-right:5px;margin-left: 10px;"></i>{{item.txt2}}<i class="el-icon-star-on" style="margin-right:5px;margin-left: 10px;"></i>{{item.txt3}}<i class="el-icon-loading" style="margin-right:5px;margin-left: 10px;"></i>{{item.txt4}}</p>
         </li>
       </ul>
     </div>

   <div id="submits" @click="getMore">点击加载 ...</div>
   </div>


   <Detail v-show="!mainshow" :child-msg="arrimg"></Detail>







 </div>
</template>

<script>

    import $ from 'jquery';
    import Detail from "./dingdang.vue"


  export default {
  data () {
    return {
      arrimg:"",
      mainshow:true,
      msg:"fire",
      logo:'',
      arrMess1:"",
      arrMess:[],
      num:1,
      dataArr : [
        {   //  1
          width:400,
          top:20,
          left:50,
          opacity:0.2,
          zIndex:2
        },
        {  // 2
          width:600,
          top:70,
          left:0,
          opacity:0.8,
          zIndex:3
        },
        {   // 3
          width:800,
          top:100,
          left:200,
          opacity:1,
          zIndex:4
        },
        {  // 4
          width:600,
          top:70,
          left:600,
          opacity:0.8,
          zIndex:3
        },
        {   //5
          width:400,
          top:20,
          left:750,
          opacity:0.2,
          zIndex:2
        }
      ]

  }
  },
    components: {
      Detail
    },
      computed: {
//    过滤器
        filteredData: function () {
          var self = this;
          return this.arrMess.filter(function (item) {
            return item.txt1.toLowerCase().indexOf(self.logo.toLowerCase()) !== -1;
          })
        }
    },

      mounted:function (){
        this.animate();

      },
    created(){
      this.getimg(this.num)
    },
    methods:{
      details(mes){
        this.mainshow = false;
        this.arrimg = mes;
        console.log(this.arrimg);
      },
      //进行动画
      animate(){
        var oul = document.getElementById("list");
//        alert(oul);
        var list = oul.children;
//        alert(list)

        // 规定 false没有动画 true 正在动画中
        $(".slider_ctl").mouseover(function(){
//          alert(11111)
          $(this).animate({'opactiy':1},500);
        }) ;
        $(".slider_ctl").mouseout(function(){
          $(this).animate({'opactiy':0},500);
        });

//旋转轮播图
        for(var i= 0; i<list.length; i++){
          var li = list[i];

          $("#list li").eq(i).animate({"width":this.dataArr[i].width,"top":this.dataArr[i].top,"left":this.dataArr[i].left,"opacity":this.dataArr[i].opacity,"zIndex":this.dataArr[i].zIndex,},1000)

        }


      },
      turnLeft(){
        // 删除数组中第一个元素,添加到最后一个
        this.dataArr.push(this.dataArr.shift());
        this.animate()

      },
      turnRight(){
        //  删除数组中最后一个元素添加到第一个
        var ele = this.dataArr.pop();
        this.dataArr.unshift(ele);
        this.animate()
      },
      getimg(num){
        var url = "http://127.0.0.1/diplomaProject/php/first.php";
        this.$http.get(url,{
            params:{
              type:'pic',
              index:num,
            }
          }
        ).then(
          function (res) {
            this.message = res.bodyText;
            this.message =  JSON.parse(res.bodyText);
            for(var i=0;i<this.message.length;i++){
              this.arrMess.push(this.message[i])
            }
//            console.log(this.arrMess)

          },
          function (err) {

            console.log(err);
          }
        )
      },
      getMore(){

        this.num++;
//        alert( this.num);
        this.getimg(this.num);
      }
//

    }
}
</script>

<style scoped>
  #temp{
    width: 90%;
  }
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
  article{
    width: 100%;
    height: 1000px;
    margin-top: 30px;
    background: pink;
  }

  #box{
    position: relative;
    width: 100%;
    margin-top: 10px;
    background: #eff3f5;
    padding-top:30px;
  }
  #box1{
    width: 100%;
    height: 60px;
    background: #f8f9fa !important;
    margin-top: 130px;
  }
  #box1 div{
    border: 1px solid silver;
    width: 220px;
    height: 40px;
    background: white;
    border-radius: 8px;
    float: right;
    margin-top: 10px;
    margin-right: 60px;

  }
  #box ul{
    width: 100%;
    height: 100%;
  }
  #box ul li:hover{
    background: white;
  }
  #box ul li{
    width: 23%;
    margin-left: 1.5%;
    height: 280px;
    /*border: 1px solid silver;*/
    float: left;
    margin-bottom: 30px;
    padding: 13px;

  }
  #box ul li img{
    width: 100%;
    height: 200px;
  }
  .box1{
    float: left;
    padding:15px 0 0 15px;
  }
  .box2{
    padding:10px;
    margin: 0 auto;
    border:1px solid slateblue;
    border-radius: 5px;
  }
  .pic{
    width: 165px;
  }
  #submits{
    width: 150px;
    height: 40px;
    color:white;
    font-size: 16px;
    background: #20b573;
    border-radius: 10px;
    line-height:40px;
    margin: 30px auto;

  }
  #inp{
    padding-top:10px;
    box-sizing: content-box;
  }
 section{
    width: 1200px;
    height: 500px;
    margin: 30px auto;
    position: relative;
   margin-left: -45px;
  }
  section ul{
    width: 100%;
    height: 100%;
    list-style: none;
    position: relative;
  }
  section ul li{
    position: absolute;
    left: 200px;
    top: 0;
  }
  section ul li img{
    width: 100%;
    height: 100%;
  }
  .slider_ctl{
    opacity:1;
    background: darkblue;
  }

  .slider_ctl .slider_prev{
    background: url("../../../static/images/prev.png") no-repeat;
    width: 76px;
    height: 112px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
    z-index: 998;
  }
  .slider_ctl .slider_next{
    background: url("../../../static/images/next.png") no-repeat;
    width: 76px;
    height: 112px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
    z-index: 998;
  }

</style>
