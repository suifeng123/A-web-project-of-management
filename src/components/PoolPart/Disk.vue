<template>
  <div>
    <MyHeader></MyHeader>
    <Leftbar></Leftbar>
    <div class="maindiv">
    <h1>这个是磁盘的部分</h1>
    </div>
  </div>
</template>
<style scoped>
  .maindiv {
   position:absolute;
  left:180px;
  top:60px;
  right:0px;
  bottom:0;
  overflow:auto;
  }

.on {
  color:white;
  background:#8EE5EE;
}
a{
   font-size:25px;
   text-decoration:none;
}
a:hover{
   color:red;
}

.li1{
   display:inline-block;

}
.tab {
				overflow: hidden;
				background: yellow;
			}


</style>
<script>
import Disklist from './DiskList'
import Snapshot from './Snapshot'
import Replication from './Replication'
import MyHeader from '../Header'
import Leftbar from '../Leftbar'

export default {
    data() {

     return {
         tabNames:[{tab01Name:'存储池'},{tab02Name:'磁盘'},
           {tab03Name:'快照'},{tab04Name:'远程复制'}
         ],
         onView1:{flag:false},
         onView2:{flag:true},
         onView3:{flag:false},
         onView4:{flag:false},
         tab01Text:'CreatePool',
         tab02Text:'Disk',
         tab03Text:'Snapshot',
         tab04Text:'Replication',
         currentView:'Disklist',
         flag:true,
         flag2:true
         }

    },
    components: {
      MyHeader,
      Leftbar,
      Disklist,
      Snapshot,
      Replication
    },
    methods: {
       toggleText: function(tabText){
          this.currentView = tabText;
          this.flag2 = false;
          this.flag = true;
       },
       tab: function(on,on_copy){
          if(on==on_copy){
            on_copy.flag = true;
          }else{
            on_copy.flag = false;
          }
       },
       change: function(onView){
           this.tab(onView,this.onView1);
           this.tab(onView,this.onView2);
           this.tab(onView,this.onView3);
           this.tab(onView,this.onView4);
          }
     }

}
</script>
