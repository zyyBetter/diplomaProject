// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//1.0导入css样式
import site from "../static/css/site.css"

//2.0导入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//3.0导入mint-ui
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import 'element-ui/lib/theme-chalk/display.css'; //基于断点的隐藏类
Vue.use(Mint);

//4.0导入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

//5.0导入jquery
import $ from "jquery";

//6.0导入animate.css
// import 'animate.css'







Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
