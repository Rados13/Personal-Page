import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Project from '@/components/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'Project',
    props:true,
    component: Project
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
