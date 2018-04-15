
import lesson from '../components/shopcar/lesson.vue'
import lesson1 from '../components/course/music.vue'
import story from '../components/course/story.vue'

import newyear from '../components/subject/newyear.vue'
import fire from '../components/subject/fire.vue'
import read from '../components/subject/read.vue'
// import dingdang from '../components/subject/dingdang.vue'
import weather from '../components/subject/weather.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import comments from '../components/comment/comments.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'
import rules from '../components/login/rules.vue'
import active_submit from '../components/submit/activite_submit.vue'
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue';
Vue.use(Router);
export default new Router({
  routes: [
    {path: '/', redirect: "/home"},
    {path: '/home', component: home},
    {path: '/weather', component: weather},
    {path: '/read', component: read},
    {path: '/story', component: story},
    {path: '/newyear', component: newyear},
    {path: '/fire', component: fire},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/rules', component: rules},
    {path: '/comments', component: comments},
    {path: '/shop/lesson', component: lesson},
    {path: '/lesson', component: lesson1},
    {path:'/shopcar',component:shopcar},
    {path:'/active_submit',component:active_submit}
    // {path: '/course', component:course},

  ]
})
