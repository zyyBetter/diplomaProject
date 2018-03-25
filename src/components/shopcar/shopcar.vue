<template>
  <div id="temp">
    <ul>
    <li class="all clearfix" v-for="item in list">
      <img :src="item.src" alt="">
      <h2 class="title">{{item.name}}</h2>
      <div class="count">
        <span @click="up(item.name)">+</span>
        <h3>{{item.count}}</h3>
        <span @click="down(item.name,item.count)">-</span>
      </div>
      <h3 class="price">总价格:<strong>{{item.price*item.count}}</strong></h3>
    </li>
    </ul>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        msg: "shopcar",
        list: [],
      }
    },
    created: function () {
      this.get();
    },
    methods: {
      get:function () {
        var data_list = localStorage.getItem('shop_car');
        data_list = JSON.parse(data_list);
        this.list = data_list;
      },
      up(id) {
        //获取本地数据
        var data = JSON.parse(localStorage.getItem('shop_car'));
        for (var i = 0; i < data.length; i++) {
          if (data[i].name == id) {
            data[i].count++;
            localStorage.setItem('shop_car', JSON.stringify(data));
            this.get();
            return;
          }
        }
      },
      down(id,count) {
        if((count--)==1){
          return
        }
        var data = JSON.parse(localStorage.getItem('shop_car'));
        for (var i = 0; i < data.length; i++) {
          if (data[i].name == id) {
            data[i].count--;
            localStorage.setItem('shop_car', JSON.stringify(data));
            this.get();
            return;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .all {
    width: 100%;
    position: relative;
    height: 100%;
    background: white;
    margin-top: 20px;
    border: 1px solid silver;
    padding: 10px;

  }

  .all img {
    float: left;
    width: 20%;
  }

  .all .title {
    float: left;
    margin-left: 10px;
  }

  .count {
    position: absolute;
    right: 21%;
    top: 20%;
    width: 200px;
  }

  .count span {
    float: left;
    border: 1px solid #ccc;
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
  }

  .count h3 {
    float: left;
    width: 40px;
    height: 30px;
    border: 1px solid #ccc;
    line-height: 30px;
  }

  .price {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 28px;
    color: orangered;
  }
</style>
