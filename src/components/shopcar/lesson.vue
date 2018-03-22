<template>
  <div id="temp">
    <div class="all clearfix">
      <div class="lesson" v-for="item in data_list">
        <img :src="item.src" alt="">
        <h3>{{item.name}}</h3>
        <p class="price">{{item.price}}</p>
        <button @click="add(item.name,item.src,item.price)">加入购物车</button>
      </div>
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
            src: '../../static/img/product/1.jpg'
          },
          {
            name: '学前音乐',
            price: 299,
            src: '../../static/img/product/2.jpg'
          },
          {
            name: '学前拼音',
            price: 199,
            src: '../../static/img/product/3.jpg'
          }
        ]
      }
    },
    methods: {
      add(id, src,price) {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lesson {
    width: 20%;
    float: left;
  }

  .lesson img {
    width: 100%;
  }
</style>
