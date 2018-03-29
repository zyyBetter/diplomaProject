<template>
  <div id="temp" class="clearfix">

    <!--左边盒子-->
    <div id="box_left">
      <!--轮播图-->
      <slider id="sliders"></slider>

      <!--评论区域-->
      <div id="comment" class="clearfix">
        <!--发送-->
        <div class="takeComment">
         <textarea name="textarea" class="takeTextField" id="submitText" @keyup.enter="submit" v-model="text">
           请输入评论~~~~
         </textarea>
          <div class="takeSbmComment clearfix">
            <!--<input id="btn_send" type="button" class="inputs" value="czxcczx" />-->
            <span class="btns">
           <span>(可按Enter回复)</span>
           <img src="../../../static/img/comments/btn.png" alt="" id="btn_send" @click.enter="submit">
            </span>
          </div>
        </div>

        <!--展示-->
        <div id="commentOn">
          <ul>
            <li v-for="item in comments_list">
              <div class="commentOn_show">
                {{item.content}}
              </div>
              <div class="commentOn_act clearfix">
                <div class="commentOn_time">{{
                  item.time
                  }}
                </div>
                <div class="commentOn_event">
                  <span>{{item.acc}}<span class="add" @click="add(item.id)"></span></span>
                  <span>{{item.ref}}<span class="down" @click="down(item.id)"></span></span>
                  <span><span class="del" @click="del(item.id)"></span></span>
                </div>

              </div>
            </li>
          </ul>

        </div>


      </div>
    </div>

    <!--右边盒子-->
    <div id="box_right" class="clearfix">

      <div class="ri_top">
        <div class="ri_title">
          <p>
            <span class="ri_logo"></span>
            <span class="ri_font">热门资讯</span>
          </p>
        </div>
        <ul class="ri_list">
          <li>
            <p>
              <span>1</span>
              会下雨的"怪树"
            </p>
          </li>
          <li>
            <p>
              <span>2</span>
              蚂蚁是怎么认路的
            </p>
          </li>
          <li>
            <p>
              <span>3</span>
              蝙蝠为什么倒挂着睡觉等
            </p>
          </li>
          <li>
            <p>
              <span>4</span>
              下雨天蚂蚁为什么会搬家
            </p>
          </li>
          <li>
            <p>
              <span>5</span>
              蚂蚁是如何辨别方向的
            </p>
          </li>
          <li>
            <p>
              <span>6</span>
              牛豆的来历
            </p>
          </li>
          <li>
            <p>
              <span>7</span>
              防火安全,从娃娃抓起
            </p>
          </li>
          <li>
            <p>
              <span>8</span>
              半日早读课,学习不能断
            </p>
          </li>
          <li>
            <p>
              <span>9</span>
              旺旺狗年,学习不能断
            </p>
          </li>
          <li>
            <p>
              <span>10</span>
              遇见A梦,遇见最美的你
            </p>
          </li>
        </ul>
      </div>

      <!--下面的tag-->
      <div class="ri_bottom ">
        <div class="ri_title">
          <p>
            <span class="ri_logo"></span>
            <span class="ri_font">推荐资讯</span>
          </p>
        </div>
        <ul class="ri_list">
          <li>
            <p>
              <span>1</span>
              为什么轮船能在水面上并行走
            </p>
          </li>
          <li>
            <p>
              <span>2</span>
              鼠宝宝为什么要咬木头
            </p>
          </li>
          <li>
            <p>
              <span>3</span>
              蚂蚁如何过冬
            </p>
          </li>
          <li>
            <p>
              <span>4</span>
              为什么不能把头蒙在被子里面睡觉
            </p>
          </li>
          <li>
            <p>
              <span>5</span>
              简单的DIY儿童瀑布编发
            </p>
          </li>
          <li>
            <p>
              <span>6</span>
              中秋节灯谜大全
            </p>
          </li>
          <li>
            <p>
              <span>7</span>
              蚂蚁是怎么认路的
            </p>
          </li>
          <li>
            <p>
              <span>8</span>
              会下雨的"怪树"
            </p>
          </li>
          <li>
            <p>
              <span>9</span>
              蚂蚁是如何辨别方向的
            </p>
          </li>
          <li>
            <p>
              <span>10</span>
              牛痘的来历
            </p>
          </li>
        </ul>
      </div>

    </div>


  </div>
</template>

<script>
  import slider from "../common/slider.vue"


  export default {
    components: {
      slider
    },
    data() {
      return {
        comments_list: [],
        text: ''
      }
    },
    created() {
      this.load()
    },
    methods: {
      //页面加载就请求评论
      load() {
        /*       getmessage() {
         var url = "";
         this.$http.get(url).then(
           function (res) {
             console.log(res.body.message);
           },
           function (err) {

             console.log(err);
           }
         )
       },
*/
        this.$http.get('http://127.0.0.1/diplomaProject/php/weibo.php?act=get&page=1').then(
          function (res) {
            this.comments_list = JSON.stringify(res.bodyText);
            console.log(res.bodyText);
            for (var i = 0; i < this.comments_list.length; i++) {
              var date = new Date(this.comments_list[i].time * 1000);
              var Y = date.getFullYear() + '-';
              var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
              var D = date.getDate() + ' ';
              var h = date.getHours() + ':';
              var m = date.getMinutes() + ':';
              var s = date.getSeconds();
              this.comments_list[i].time = Y + M + D + h + m + s;
            }
            console.log(this.comments_list);
          }
        )
      },
//      1.0点击发送留言
      submit() {
        var url = 'http://127.0.0.1/diplomaProject/php/weibo.php?act=add&content=' + this.text;
        this.$http.get(url).then(function (res) {
          this.load();
        })
      },

//   2.0点击赞
      add(id) {
        this.$http.get('http://127.0.0.1/diplomaProject/php/weibo.php?act=acc&id='+id).then(function () {
          this.load()
        })
      },
//   2.0点击踩
      down(id) {
        this.$http.get('http://127.0.0.1/diplomaProject/php/weibo.php?act=ref&id='+id).then(function () {
          this.load()
        })
      },
//   2.0点击删除
      del(id) {
        this.$http.get('http://127.0.0.1/diplomaProject/php/weibo.php?act=del&id='+id).then(function (res) {
          this.load()
        })
      }

    }
  }
</script>

<style scoped>
  #temp {
    margin-top: 90px;
    /*overflow: hidden;*/
  }

  /*左边的盒子*/
  #box_left {
    width: 68%;
    /*height: 1000px;*/
    border: 1px solid seagreen;
    box-sizing: border-box;
    float: left;
    /*padding-top: -100px;*/
    /*background:darkmagenta;*/
  }
  #sliders{
    margin-top: 0px;
  }

  slider {
    /*margin-top: 600px;*/
  }

  /*评论区域*/
  #comment {
    width: 100%;
    height: 900px;
    /*background:lightgreen;*/
    /*margin-top: -600px;*/

  }

  .takeComment {
    /*width: 100%;*/
    /*height: 200px;*/
    padding-top: 20px;
    background: #f3f8fd;
    border: 1px solid silver;
    /*border: 1px solid silver;*/

  }

  #submitText {
    width: 90%;
    height: 130px;
    resize: none;
    color: grey;
    border: 1px solid seagreen;
    padding-top: 30px;
  }

  #btn_send {
    /*margin-top: 20px;*/
  }

  .btns {
    margin-right: 40px;
    float: right;
    display: inline-block;
    /*width: 60px;*/
    /*background: deeppink;*/
  }

  .btns > span {
    display: inline-block;
    /*margin-bottom:90px;*/
    /*line-height: 40px;*/
    position: relative;
    top: -10px;
    color: gray;
  }

  /*留言展示*/
  #commentOn {
    width: 100%;
    height: 600px;
    /*background: darkblue;*/
    margin-top: 20px;

  }

  #commentOn ul {
    width: 100%;
  }

  #commentOn ul li {
    width: 90%;
    /*background: #f8e3e8;*/
    height: 150px;
    padding-top: 15px;
    margin: 0 auto;
    border: 1px solid silver;

  }

  #commentOn .commentOn_show {
    width: 100%;
    height: 80px;
    /*background: darkcyan;*/
    border: 1px solid silver;

  }

  #commentOn .commentOn_act {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }

  #commentOn .commentOn_time {
    width: 30%;
    height: 100%;
    float: left;
    line-height: 40px;
  }

  #commentOn .commentOn_event {
    width: 30%;
    height: 100%;
    float: right;
    /*background: darkmagenta;*/
  }

  #commentOn .commentOn_event > span {
    margin-left: 15px;
    line-height: 40px;
    padding-bottom: 20px;

  }

  #commentOn .commentOn_event span > span {
    display: inline-block;
    margin-left: 5px;
    width: 30px;
    height: 35px;
    background: url("../../../static/img/comments/icons.png") no-repeat;
    background-size: 100%;
  }

  #commentOn .commentOn_event span:nth-of-type(1) span {
    background-position: 0px 0px;
  }

  #commentOn .commentOn_event span:nth-of-type(2) span {
    background-position: 0px -30px;
  }

  #commentOn .commentOn_event span:nth-of-type(3) span {
    background-position: 0px -60px;
  }

  /*右边的盒子*/
  #box_right {
    width: 30%;
    /*height: 1000px*/
    /*border: 1px solid seagreen;*/
    box-sizing: border-box;
    float: right;
    /*overflow: hidden;*/
  }

  #box_right .ri_top,
  #box_right .ri_bottom {
    border: 3px solid #c0c0c0;
    width: 100%;
    height: 650px;
    margin-bottom: 20px;
  }

  #box_right .ri_top .ri_title,
  #box_right .ri_bottom .ri_title {
    width: 100%;
    height: 100px;
    background: #e6e6e6;
  }

  #box_right .ri_top .ri_title .ri_font,
  #box_right .ri_bottom .ri_title .ri_font {
    float: left;
    width: 100px;
    height: 35px;
    font-size: 20px;
    margin-top: 35px;
    font-weight: bolder;
  }

  #box_right .ri_top .ri_title .ri_logo,
  #box_right .ri_bottom .ri_title .ri_logo {
    display: inline-block;
    width: 10px;
    height: 50px;
    background: #20b573;
    float: left;
    margin-left: 20px;
    margin-top: 25px;
  }

  #box_right .ri_top .ri_list,
  #box_right .ri_bottom .ri_list {
    width: 100%;
    height: 550px;
    /*background: pink;*/
    overflow: hidden;
  }

  #box_right .ri_top .ri_list li,
  #box_right .ri_bottom .ri_list li {
    width: 100%;
    height: 10%;
    line-height: 50px;
    overflow: hidden;
    font-size: 16px;
  }

  #box_right .ri_top .ri_list li:hover,
  #box_right .ri_bottom .ri_list li:hover {
    color: #20b573;
    cursor: pointer;
    /*font-style: oblique;*/
    /*font-style: oblique;*/

  }

  #box_right .ri_top .ri_list li span,
  #box_right .ri_bottom .ri_list li span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #e6e6e6;
    line-height: 30px;
  }

  #box_right .ri_top .ri_list li:nth-of-type(1) span,
  #box_right .ri_bottom .ri_list li:nth-of-type(1) span {
    background: #20b573;
    color: white
  }

  #box_right .ri_top .ri_list li:nth-of-type(2) span, #box_right .ri_bottom .ri_list li:nth-of-type(2) span {
    background: #4cc38f;
    color: white
  }

  #box_right .ri_bottom .ri_list li:nth-of-type(3) span,
  #box_right .ri_top .ri_list li:nth-of-type(3) span {
    background: #90dab9;
    color: white
  }

  #box_right .ri_top .ri_list li p,
  #box_right .ri_bottom .ri_list li p {
    float: left;
    margin-left: 5%;
    line-height: 50px;

  }


</style>
