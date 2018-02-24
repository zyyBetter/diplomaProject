import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home/home.vue';
import music from '../components/course/music.vue'
import story from '../components/course/story.vue'
import idioms from '../components/course/idioms.vue'
import handmake from '../components/course/handmake.vue'
import handwrite from '../components/course/handwrite.vue'
import newyear from '../components/subject/newyear.vue'
import fire from '../components/subject/fire.vue'
import read from '../components/subject/read.vue'
import dingdang from '../components/subject/dingdang.vue'
import weather from '../components/subject/weather.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import comments from '../components/comment/comments.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'
import rules from '../components/login/rules.vue'
// import course from '../components/course/course.vue'
Vue.use(Router);


export default new Router({
  routes: [
    {path: '/', redirect:"/home"},
    {path: '/home', component: home},
    {path: '/music', component: music},
    {path: '/idioms', component: idioms},
    {path: '/handmake', component: handmake},
    {path: '/handwrite', component: handwrite},
    {path: '/weather', component: weather},
    {path: '/dingdang', component: dingdang},
    {path: '/read', component: read},
    {path: '/story', component: story},
    {path: '/newyear', component: newyear},
    {path: '/fire', component: fire},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/rules', component: rules},
    {path: '/comments', component:comments},
    // {path: '/course', component:course},

  ]
})
