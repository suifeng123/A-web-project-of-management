// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import router from './router/index'
//import  './router/index'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// 引入vuex
import Vuex from 'vuex'
//引入store中的状态
import store from './vuex/store'
//  引入jquery
import $ from 'jquery'
//引入 Vueresource
import VueResource from 'vue-resource'
//引入表单验证插件
//import Vuevalidator from 'vue-validator'  此表单验证插件由于版本不兼容，故不能使用
//import Vuerify from 'v-vuerify-next'
import vueForm from 'vue-form'
//引入组件
import Home from './components/Home'
import DashBoard from './components/Dashboard'
import Storage from './components/Pool'
import ActionCreatePool from './components/ActionPool/ActionCreate'
import PoolStatus from './components/ActionPool/Status'
import EditPool from './components/ActionPool/EditPool'
import ExpersionPool from './components/ActionPool/ExpansionPool'





Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(vueForm)
//Vue.use(Vuevalidator)   版本不兼容，所以抛弃vue-validator

const routes = [
  {
    path: '/',
    name:'Home',
    component:Home
  },
  {
    path: '/storage/chi',
    name: 'Chi',
    component: Storage
  },
  {
    path: '/storage/chi/ActionCreatePool',
    name:'ActionCreatePool',
    component: ActionCreatePool,
  },
  {
    path: '/storage/chi/status',
    name:'PoolStatus',
    component: PoolStatus,
  },
  {
    path:'/storage/chi/edit',
    name:'EditPool',
    component:EditPool
  },
  {
    path:'/storage/chi/expersion',
    name:'ExpersionPool',
    component:ExpersionPool
  },
  {
    path: '/storage/dataset',
    name: 'Dataset',
    component: Storage
  },
  {
    path: '/storage/volume',
    name: 'Volume',
    component: Storage
  },
  {
    path: '/storage/virtual',
    name: 'Virtual',
    component: Storage
  },
  {
    path: '/main',
    name: 'Main',
    component: DashBoard
  },



]

const router = new VueRouter({
      routes
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
