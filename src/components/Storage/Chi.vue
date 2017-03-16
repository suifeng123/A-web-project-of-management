<template>
<div class="maindiv">
  <div>
  <!--增加路由-->
  <a v-bind:class="{'on':onView1.flag}" href="javascript:;" @click="toggleText(tab01Text),change(onView1)">{{tabNames[0]['tab01Name']}}</a>
  <a v-bind:class="{'on':onView2.flag}" href="javascript:;" @click="toggleText(tab02Text),change(onView2)">{{tabNames[1]['tab02Name']}}</a>
  <a v-bind:class="{'on':onView3.flag}" href="javascript:;" @click="toggleText(tab03Text),change(onView3)">{{tabNames[2]['tab03Name']}}</a>
  <a v-bind:class="{'on':onView4.flag}" href="javascript:;" @click="toggleText(tab04Text),change(onView4)">{{tabNames[3]['tab04Name']}}</a>
  <!-- 增加路由 -->
  </div>
  <div>
    <component :is='currentView' keep-alive></component>
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
import CreatePool from '../PoolPart/MakePool'
import Disk from '../PoolPart/Disk'
import Snapshot from '../PoolPart/Snapshot'
import Replication from '../PoolPart/Replication'


export default {
     data() {
       return {
         tabNames:[{tab01Name:'存储池'},{tab02Name:'磁盘'},
           {tab03Name:'快照'},{tab04Name:'远程复制'}
         ],
         onView1:{flag:true},
         onView2:{flag:false},
         onView3:{flag:false},
         onView4:{flag:false},
         tab01Text:'CreatePool',
         tab02Text:'Disk',
         tab03Text:'Snapshot',
         tab04Text:'Replication',
         currentView:'CreatePool'
         }
     },
     created: function(){
      console.log(this.currentView);
     },
   components: {
       CreatePool,
       Disk,
       Snapshot,
       Replication
     },
     methods: {
       toggleText: function(tabText){
          this.currentView = tabText;
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
