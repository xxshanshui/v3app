import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getToken} from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: HomeView,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue')
      },
      {
        path: '/online',
        name: 'online',
        component: () => import(/* webpackChunkName: "online" */ '../views/monitor/online/index.vue')
      },
      {
        path: '/serverDeploy',
        name: 'serverDeploy',
        component: () => import(/* webpackChunkName: "serverDeploy" */ '../views/mnt/serverDeploy/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/system/user/index.vue')
      },
      {
        path: '/dept',
        name: 'dept',
        component: () => import(/* webpackChunkName: "dept" */ '../views/system/dept/index.vue')
      },
      {
        path: '/job',
        name: 'job',
        component: () => import(/* webpackChunkName: "job" */ '../views/system/job/index.vue')
      },
      {
        path: '/dict',
        name: 'dict',
        component: () => import(/* webpackChunkName: "dict" */ '../views/system/dict/index.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: "menu" */ '../views/system/menu/index.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "role" */ '../views/system/role/index.vue')
      },
      {
        path: '/timing',
        name: 'timing',
        component: () => import(/* webpackChunkName: "timing" */ '../views/system/timing/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
