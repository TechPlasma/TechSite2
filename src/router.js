import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Work.vue'
import Resume from './views/Resume.vue'
import Projects from './views/Projects.vue'
import Fun from './views/Fun.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path:'/work',
      name: 'work',
      component: Work
    },
    {
      path:'/resume',
      name: 'resume',
      component: Resume
    },
    {
      path:'/projects',
      name: 'projects',
      component: Projects
    },
    {
      path:'/fun',
      name: 'fun',
      component: Fun
    }
  ]
})
