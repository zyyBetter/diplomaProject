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

   <!--<article>-->
     <div id="box">

     </div>
   <!--</article>-->





 </div>
</template>

<script>
//  import '../../../static/js/underscore.js';





  export default {
  data () {
    return {
      msg:"fire"
    }
  },

  mounted:function (){
//    this.getimg();
  },
    methods:{
  /*  getimg(){

      //1.0
      function $(id){
        return document.getElementById(id);
      }

      //2.0
      function getTagName(obj,tagName)
      {
        return obj.getByTagName(tagName);
      }

      //3.0
      function scroll(){
        //最新浏览器,IE9+
        if(window.pageXOffset||window.pageYOffset)
        {
          return {
            top:window.pageYOffset,
            left:window.pageXOffset        }}
        //标准模式
        else if(document.compatMode=="css1Compat"){
          return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
          }
        }
        //怪异模式
        else{
          return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
          }
        }

      }

     /!* /!**
       * client() 获取屏幕的宽度
       * 使用方法 client().width
       * @returns {*}   屏幕的宽度及高度
       *!/!*!/
      function client(){
        if(window.innerHeight||window.innerWidth)//IE9+ 及最新浏览器
        {
          return{
            height:window.innerHeight,
            width:window.innerWidth
          }
        }
        else if(document.compatMode=="css1compat"){  //标准浏览器
          return {
            height:document.documentElement.clientHeight,
            width:document.documentElement.clientWidth

          }}
        else
        {
          return { //怪异浏览器
            height:document.body.clientHeight,
            width:document.body.clientWidth

          }
        }
      }


      function waterfall(){
        var boxChild=box.children;
        var screenW=client().width;//计算网页的宽度
        var box1W=box1.offsetWidth;
        var cols=parseInt(screenW/box1W);//计算网页的宽度可以放多少张图片
        var boxW=cols*box1W;//计算大盒子的宽度
        // console.log(boxW);
        box.style.width=boxW+"px";//给大盒子设置宽度
        box.style.margin="0 auto";//让大盒子居中


        //给每张照片定位
        var arr=[];
        for(var j=0;j<boxChild.length;j++){
          var boxChildH=boxChild[j].offsetHeight;//获取每一个盒子的高度
          //当照片在第一排的时候把盒子高度直接放进数组里面
          if(j<cols) {
            arr.push(boxChildH);
            boxChild[j].style.position="absolute";//盒子定位
            boxChild[j].style.top=0+"px";
            boxChild[j].style.left=boxChild[j].offsetWidth*j+"px";



          }
          else{
            var minH=_.min(arr);  //1找出数组里面的最小的数,利用函数库

            // console.log(minH);
            var indexMin=arr.indexOf(minH);//找出最小数的索引indexOf,方便把下一个盒子定位
            // console.log(indexMin);
            boxChild[j].style.position="absolute";//盒子定位
            boxChild[j].style.top=minH+"px";
            boxChild[j].style.left=boxChild[j].offsetWidth*indexMin+"px";
            arr[indexMin]=boxChildH+minH;//更新高度
          }
        }
      }


      window.onload=function (){ //页面加载即调用
        waterfall();
        window.onscroll=function (){  //页面滚动的时候调用

          if(loaded()==true){ // 当loaded函数为真的时候执行下面的代码
            // alert(1);

            for(var i=0;i<20;i++){//循环20次,即每次加载20张照片

              var box1=document.createElement("div");  //创建新的大盒子
              box.appendChild(box1);
              box1.className="box1";

              var box2=document.createElement("div");//创建新的小盒子
              box1.appendChild(box2);
              box2.className="box2"

              var pic=document.createElement("img");//创建新照片节点
              box2.appendChild(pic);
              pic.className="pic";

              var a=parseInt(_.random(0,40));  //照片的随机数
              // console.log(a);
              pic.src="../../../static/img/pubu/"+a+".jpg"; //设置照片获取的路径


            }
            waterfall();

          }

        }
      }

      var timer=null;

      window.onresize=function(){

        //函数节流
        clearTimeout(timer);
        timer=setTimeout(function(){
          waterfall();
          console.log(1);
        },100);


      }

      function loaded(){
        var allbox=$("box").children;
        var lastindex=allbox.length-1;//获取最后一个盒子的索引
        // console.log(lastindex);
        var screenY=client().height;//获取页面的高度
        var scrollY=scroll().top;//获取页面滚动的距离
        var lastH=allbox[lastindex].offsetTop;
        var isloading=lastH<=(screenY+scrollY);
        // console.log(isloading);
        return isloading;
      }

//滚动就调用



      var box=$("box");
      for(var i=0;i<40;i++){
        var box1=document.createElement("div");
        //创建图片外面的最大的盒子,并添加属性
        box1.className="box1";
        box.appendChild(box1);
        var box2=document.createElement("div");

        //创建图片外面的最大的盒子,并添加属性
        box2.className="box2";
        box1.appendChild(box2);

        //创建img标签,并添加属性,添加每张图片的路径
        var pic=document.createElement("img");
        pic.className="pic";
        box2.appendChild(pic);
        pic.src="../../../static/img/pubu/"+i+".jpg";
      }

    }*/

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
  article{
    width: 100%;
    height: 1000px;
    margin-top: 30px;
    background: pink;
  }

  #box{
    position: relative;
    background: deeppink;
    width: 100%;
    margin-top: 30px;
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
</style>
