import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import beijing from '@/components/beijing'
Vue.use(Router)

export default new Router({
  routes: [
          {
            path: '/',
            redirect:'/beijing'
          },{
            path:'/beijing',
            name:'beijing',
            meta:{
              title: '北京',
              view:'beijing',
              desc:"北京市的地图"
            },
            component: () => import('@/components/beijing')
          },{
             path:'/shanghai',
             name: 'shanghai',
             meta:{
               title:'上海',
               view:'shanghai',
               desc:'上海市的地图'
             },
             component: () => import('@/components/shanghai')
        },{
            path: '/hangzhou',
              name:'hangzhou',
            meta:{
             title:'杭州',
               view:'hangzhou',
             desc:'西子湖畔杭州'
         },
           component: () => import('@/components/hangzhou')
       },{
         path:'/guangzhou',
           name:'guangzhou',
         meta:{
           title:'广州',
             view:'guangzhou',
           desc:'广州'
       },
        component: () => import('@/components/guangzhou')
      },{
          path:'/shenzhen',
            name:'shenzhen',
          meta:{
             title:'深圳',
               view:'shenzhen',
             desc:'广州的地图'
      },
         component: () => import('@/components/shenzhen')
     },{
        path:'/changsha',
          name:'changsha',
         meta:{
          title:'长沙',
            view:'changsha',
          desc:'长沙'
       },
       component: () => import('@/components/changsha')
   }
  ]
})
