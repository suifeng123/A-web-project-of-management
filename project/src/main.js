// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//使用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
//引入echarts
import echarts from 'echarts';
Vue.config.productionTip = false
Vue.use(MuseUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


