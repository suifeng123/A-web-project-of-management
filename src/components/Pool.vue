<template>
  <!--这个是存储池界面的的开发 -->
  <div>
    <MyHeader></MyHeader>
    <Leftbar></Leftbar>
    <div>
      <component :is='currentView'></component>

    </div>

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
