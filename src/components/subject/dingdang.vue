<template>
 <div id="temp" >
<div id="main" class="clearfix">
   <section>
     <div class="sec_head clearfix">
     <img src="../../../static/img/details.png" alt="">
       <h2 style="text-align: left;">{{childMsg.title}}</h2>
       <p style="color: #9aabb8;text-align: left;">
         <span style="margin-right: 10px;display:inline-block;border-radius:3px ;padding: 6px;background: #dfe5e9;">原创</span>
         <span>分类:</span>
         <span style="color:#8c98dd">幼儿插图</span>
         <span style="margin-right: 10px;margin-left: 15px;">版权:<i class="el-icon-news" style="margin-right:5px;margin-left: 10px;"></i></span>
       </p>

       <p style="color: #9aabb8;text-align: left;margin-top: 6px;">
         <i class="el-icon-view" style="margin-right:5px;margin-left: 10px;"></i>11
         <i class="el-icon-star-on" style="margin-right:5px;margin-left: 10px;"></i>11
         <i class="el-icon-loading" style="margin-right:5px;margin-left: 10px;"></i>11
         <i class="el-icon-date" style="margin-right:5px;margin-left: 10px;"></i>2015-2-9
       </p>
     </div>

     <div style="padding-top: 20px;">
       <h2>{{childMsg.title}}</h2>
       <ul id="listCon">
         <li v-for="item in childMsg.ctx" >
           <p style="line-height: 8px;" v-show="item.type ==0">{{item.content}}</p>
           <img :src="item.content" alt="" v-show="item.type">
         </li>
       </ul>
     </div>

<!----------评论-------------->

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
           <li v-for="item in comments_list" class="clearfix">
             <div style="width: 15%;height: 100%;float: left;">
               <img :src="headimg" alt="">
             </div >

             <div style="width: 80%;height: 100%;float: left;">
             <div class="commentOn_show">
               {{item.content}}
             </div>
             <div class="commentOn_act clearfix">
               <div class="commentOn_time">
                 <i class="el-icon-time"></i>
                 {{item.time}}
               </div>
               <div class="commentOn_event">
                 <span>{{item.acc}}<span class="add" @click="add(item.id)"></span></span>
                 <span>{{item.ref}}<span class="down" @click="down(item.id)"></span></span>
                 <span><span class="del" @click="del(item.id)"></span></span>
               </div>

             </div>
             </div>
           </li>
         </ul>

       </div>


     </div>
     <el-pagination style="background: #eff3f5;margin-top: 20px;background: rgba(248,201,118,0.67);"
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    :total="pagecount ">
     </el-pagination>

   </section>

  <!-------左边------->
   <article>
     <div class="artcile_top">

       <div class="artcile_img">
         <p style="width:100%;position: absolute;left: 0;bottom: 30px;text-align: center;">You are the apple of my eye. </p>
         <i class="el-icon-plus" style="width: 30px;height: 30px;padding:5px;background: #3498db;font-size: 18px;font-weight: bolder;color:white;position: absolute;bottom: -15px;left: 45%;border-radius: 50%"></i>
       </div>

     </div>
     <div class="artcile_bottom clearfix">
       <span>
         <p>浏览</p>
         <p>11</p>
       </span>

       <span>
 <p>赞</p>
       <p>22</p>
       </span>

     </div>
   </article>
</div>

 </div>
</template>

<script>
  export default {
  data () {
    return {
      msg:"",
      comments_list: [],
      text: '',
      headimg:"../../../static/img/uerPic/3.jpg",
      num:1,
      personlimg:"",
      data:"",
      pagecount:0
    }
  },
    props: ['childMsg'],
  created:function (){
    this.load();
    this.getpagecount();

  },
    watch:{

    },
    methods:{

      handleCurrentChange(num) {
        this.num = num;
        this.load();

    },
      //获取页码
      getpagecount(){
        let url = "http://127.0.0.1/php/weibo.php?act=get_page_count";
        this.$http.get(url).then(function (res) {
          this.pagecount =eval(res.bodyText);
          this.pagecount = this.pagecount*10
        })
      },

        //页面加载就请求评论
        load() {
          let url = "http://127.0.0.1/php/weibo.php?act=get&page="+this.num;
          this.$http.get(url).then(
          function (res) {
//            console.log(res.bodyText);
            this.comments_list = eval(res.bodyText);
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
          }
        )
      },
      //提醒弹框
      open() {
        this.$alert('请登录账号', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push("/login");
          }
        });
      },

//      1.0点击发送留言
      submit() {

        this.data = JSON.parse(localStorage.getItem('user_mes'));
        if(!this.data){    //没有登录就登录
          this.open();
          return false;
        }
        else{
          this.personlimg = this.data.image; //获取当前用户的头像
          var url = 'http://127.0.0.1/php/weibo.php?act=add&content=' + this.text;
        this.$http.get(url).then(function (res) {
          this.load();
          this.getpagecount();
          console.log(this.comments_list);

        })
    }
      },

//   2.0点击赞
      add(id) {
        this.$http.get('http://127.0.0.1/php/weibo.php?act=acc&id='+id).then(function () {
          this.load()
        })
      },
//   2.0点击踩
      down(id) {
        this.$http.get('http://127.0.0.1/php/weibo.php?act=ref&id='+id).then(function () {
          this.load()
        })
      },
//   2.0点击删除
      del(id) {
        this.$http.get('http://127.0.0.1/php/weibo.php?act=del&id='+id).then(function (res) {
          this.load()
        })
      }
    }
}
</script>

<style scoped>
  #temp{
    width: 100%;
    background: #eff3f5;
    padding-bottom: 60px;
    padding-top: 20px;
  }
  section{
    width: 70%;
    background: white;
    margin-left: 2%;
    float: left;
  }
  article{
    width: 22%;
    float: right;
    margin-right: 2%;
  }
  #main{
    margin-top: 30px;
  }
  .sec_head{
    padding-top: 20px;
    margin-left: 10px;
    position: relative;
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #eff3f5;
  }
  .sec_head img{
    position: absolute;
    top: -3px;
    right: 3px;
  }
  article .artcile_top{
    width: 100%;
    height: 200px;
    background: white;
    padding-top: 20px;
    position: relative;

  }
  article .artcile_bottom{
    width: 100%;
    height: 60px;
    background: #f8f8f8;
    border-top: 1px solid #eff3f5;

  }
  article .artcile_bottom span{
    display: inline-block;
    width: 50%;
    height: 100%;
  }
  article .artcile_bottom span p:nth-of-type(2){
    font-weight:bolder;
    font-size: 18px;
  }
  article .artcile_bottom span p{
    line-height:30px;
  }
  article .artcile_bottom span:nth-of-type(1) {
    float: left;
  }
 article .artcile_bottom span:nth-of-type(2) {
    float: right;
  }
  article .artcile_bottom span p{
    line-height:30px;
  }

  article .artcile_img{
    background: deeppink url("../../../static/img/title1.jpg");
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0px auto;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  #listCon{
    width: 100%;
    margin-top: 20px;
  }
  #listCon li{
    width: 90%;
    margin: 10px auto;
  }
  #listCon li img{
    width: 80%;
  }
  /*评论区域*/
  #comment {
    width: 100%;
    height: 900px;

  }

  .takeComment {
    padding-top: 20px;
    background: #f3f8fd;
    border: 1px solid silver;

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
  }

  .btns {
    margin-right: 40px;
    float: right;
    display: inline-block;
  }

  .btns > span {
    display: inline-block;
    position: relative;
    top: -10px;
    color: gray;
  }

  /*留言展示*/
  #commentOn {
    width: 100%;
    margin-top: 20px;
    padding: 5px;
  }

  #commentOn ul {
    width: 100%;
  }

  #commentOn ul li {
    width: 90%;
    height: 100px;
    padding-top: 15px;
    background: rgba(240, 240, 240, 0.44);
    margin: 10px auto;

  }
  #commentOn ul li img {
    width: 80px;
    height: 80px;
    border-radius: 50%;


  }
  #commentOn .commentOn_show {
    width: 100%;
    height: 60%;
    text-align: left;
  }

  #commentOn .commentOn_act {
    width: 100%;
    height: 20%;
    margin-top: 10px;
  }

  #commentOn .commentOn_time {
    width: 30%;
    /*height: 100%;*/
    float: left;
    /*line-height: 40px;*/
  }

  #commentOn .commentOn_event {
    width: 40%;
    height: 20%;
    float: right;
    /*border-bottom:10px;*/
  }

  #commentOn .commentOn_event > span {
    display: inline-block;
    width: 25%;

  }

  #commentOn .commentOn_event span > span {
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background: url("../../../static/img/comments/icons.png") no-repeat;
    background-size: 90%;
  }

  #commentOn .commentOn_event span:nth-of-type(1) span {
    background-position: 0px 0px;
  }

  #commentOn .commentOn_event span:nth-of-type(2) span {
    background-position: 0px -18px;
  }

  #commentOn .commentOn_event span:nth-of-type(3) span {
    background-position: 0px -38px;
  }


</style>
