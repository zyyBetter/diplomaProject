import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home/home.vue';
import music from '../components/home/music.vue'
import story from '../components/home/story.vue'
import idioms from '../components/home/idioms.vue'
import handmake from '../components/home/handmake.vue'
import handwrite from '../components/home/handwrite.vue'
import newyear from '../components/home/newyear.vue'
import fire from '../components/home/fire.vue'
import read from '../components/home/read.vue'
import dingdang from '../components/home/dingdang.vue'
import birds from '../components/birds/birds.vue'
import weather from '../components/home/weather.vue'
import shopcar from '../components/shopcar/shopcar.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'
import rules from '../components/login/rules.vue'
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
    {path: '/birds', component: birds},
    {path: '/read', component: read},
    {path: '/story', component: story},
    {path: '/newyear', component: newyear},
    {path: '/fire', component: fire},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/rules', component: rules},

  ]
})
