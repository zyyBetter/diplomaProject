<template>
  <div id="temp">
    <div class="all clearfix">
      <ul>
      <li class="lesson clearfix" v-for="item in data_list">
        <div style="float: left;">
          <img :src="item.src" alt="">
        </div>
        <div style="width: 50%;height:50px;float: left;margin-left: 10px;">
          <h3 style="color:#39b67c">{{item.name}}</h3>
          <p style="width: 80%;margin-bottom: 20px;">
            {{item.detail}}
            </p>
          <span class="price">价格¥</span><span class="price1">{{item.price}}</span>

        </div>
        <div  class="btn">
          <button  @click="add(item.name,item.src,item.price)">加入购物车</button>9
        </div>


      </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data_list: [
          {
            name: "寓言",
            price: 399,
            src: '../../static/img/shopcar/shop1.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"
          },
          {
            name: '学前音乐',
            price: 299,
            src: '../../static/img/shopcar/shop2.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          },
          {
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop3.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"
          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop4.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"
          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop5.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop6.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop7.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop8.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop9.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          },{
            name: '学前拼音',
            price: 199,
            src: '../../static/img/shopcar/shop10.png',
            detail:"35%以上小学生存在以上问题的一种或几种。这些聪明的“笨小孩”，只要参加针对性的干预训练，以适合的方法和技巧学习，就可以提升注意力和读写水平，规避不足发挥特长。\n" +
            "            “天才，首先是注意力”  --乔治.居维叶"

          }
        ]
      }
    },
    methods: {
      add(id, src,price) {

        alert("成功加入购物车,请去购物车结算订单吧!!");
        this.$router.push("/shopcar");

        //获取到本地数据
        var local_data = JSON.parse(localStorage.getItem('shop_car'));

        if (local_data != null) {
          for (var i = 0; i < local_data.length; i++) {
            if (local_data[i].name == id) {
              local_data[i].count++;
              localStorage.setItem('shop_car', JSON.stringify(local_data))
              return
            }
          }

          //设置一个对象存放数据
          var obj = {};
          obj.name = id;
          obj.count = 1;
          obj.src = src;
          obj.price=price;
          local_data.push(obj);
          localStorage.setItem('shop_car', JSON.stringify(local_data));
        } else if (local_data == null) {
          //设置一个数组存放数据
          var data_arr = [];
          //加入购物车id
          for (var j = 0; j < this.data_list.length; j++) {
            if (this.data_list[j].name == id) {
              var obj = {};
              obj.name = this.data_list[j].name;
              obj.count = 1;
              obj.src = src;
              obj.price=price;

              console.log(obj);
              data_arr.push(obj);
              localStorage.setItem('shop_car', JSON.stringify(data_arr));
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .all {
    width: 100%;
    border: 1px solid #000;
    padding: 10px;
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: space-between;*/
  }
  .all ul{
    width: 100%;

  }
  .btn{
    /*position: relative;*/
    /*top: 50%;*/
    float: left;
    padding-top: 10%;
  }

  .lesson {
    width: 100%;
    height: 100%;
    background: white;
    margin-top: 20px;
    border: 1px solid silver;
    padding: 10px;

    /*float: left;*/
  }

  .lesson img {
    width: 100%;
  }
  .price{
    font-size: 18px;
    color: #feab03;
    margin-right: 20px;
  }
  .price1{
    font-size: 17px;


  }
  span{
    display: inline-block;

  }
</style>
