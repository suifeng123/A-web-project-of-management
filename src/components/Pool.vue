<template>
  <!--这个是存储池界面的的开发 -->
  <div>
    <MyHeader></MyHeader>
    <Leftbar></Leftbar>
    <div>
       <!--<ul style="margin-top:-23px;">-->
         <!--&lt;!&ndash;增加路由&ndash;&gt;-->

           <!--<li style="display:inline-block;"><a href="javascript:;" @click="changeTab"><button class="btn btn-success btn-lg">{{tab01Name}}</button></a></li>-->
         <!--<li style="display:inline-block;"><a href="javascript:;" @click="changeTab"><button class="btn btn-success btn-lg">{{tab02Name}}</button></a></li>-->
         <!--<li style="display:inline-block;"><a href="javascript:;" @click="changeTab"><button class="btn btn-success btn-lg">{{tab03Name}}</button></a></li>-->
         <!--<li style="display:inline-block;"><a href="javascript:;" @click="changeTab"><button class="btn btn-success btn-lg">{{tab04Name}}</button></a></li>-->
         <!--&lt;!&ndash; 增加路由 &ndash;&gt;-->
       <!--</ul>-->
    </div>
    <div>
      <component :is='currentView'></component>

    </div>


    <!--<ul style="margin-top:-20px;">
      <li style="display:inline">
        <router-link to='/chi'>
        <button class="btn btn-lg btn-default">存储池</button>
        </router-link>
      </li>
      <li style="display:inline;margin-left:-6px;">
        <router-link to='/dataset'>
        <button class="btn btn-lg btn-default">文件系统</button>
        </router-link>
      </li>
      <li style="display:inline;margin-left:-6px;">
        <router-link to='/volume'>
        <button  class="btn btn-lg btn-default">卷</button>
        </router-link>
      </li>
      <li style="display:inline;margin-left:-6px;">
        <router-link to='/virtual'>
        <button class="btn btn-lg btn-default">虚拟化</button>
        </router-link>
      </li>
    </ul>
    -->

  </div>
</template>
<style>

</style>
<script>
import MyHeader from './Header'
import Leftbar from './Leftbar'
import Chi from './Storage/Chi'
import Dataset from './Storage/Dataset'
import Volume from './Storage/Volume'
import Virtual from './Storage/Vitual'
import tab01 from './Storage/tab01'
import tab02 from './Storage/tab02'
import tab03 from './Storage/tab03'
import { mapState, mapGetters, mapActions } from 'vuex'



export default {
   beforeMount:function(){


   },

     data() {
       return {
          tab01Text:'Chi',
          tab01Name: '存储池',
          tab02Text:'Dataset',
          tab02Name: '文件系统',
          tab03Text:'Volume',
          tab03Name: '卷(待定)',
          tab04Text:'Virtual',
          tab04Name: '虚拟化',
         // currentView:this.get_currentstorage

     }

     },

     created: function(){

        currentView:'Chi'



     },


     methods: {
      ...mapActions([
           'changeTab'
        ])





     },
      computed: {
        ...mapGetters([
              'getCount',
              'get_currentstorage'
        ]),
        currentView: function (){

          return this.get_currentstorage;
        },


      },

     components: {
       MyHeader,
       Leftbar,
       Chi,
       Dataset,
       Volume,
       Virtual
     }
}
</script>
