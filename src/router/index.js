import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home/home.vue';
import music from '../components/home/music.vue'
import story from '../components/home/story.vue'
import idioms from '../components/home/idioms.vue'
import handmake from '../components/home/handmake.vue'
import handwrite from '../components/home/handwrite.vue'
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
    {path: '/story', component: story},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/rules', component: rules},

  ]
})
