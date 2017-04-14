<template>
  <div>
    <MyHeader flag2="flag2_open"></MyHeader>
    <Leftbar></Leftbar>
   <div class="maindiv">
     <a v-bind:class="{'on':onView1.flag}" href="javascript:;" @click="change(onView1)">{{tabNames[0]['tab01Name']}}</a>
     <a v-bind:class="{'on':onView2.flag}" href="javascript:;" @click="change(onView2)">{{tabNames[1]['tab02Name']}}</a>

   </div>
  </div>


</template>
<style scoped>
.maindiv {
  position:absolute;
  left:180px;
  top:60px;
  right:0;
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
import MyHeader from '../Header'
import Leftbar from '../Leftbar'

export default {
   data () {
     return {
        tabNames:[{tab01Name:'文件系统'},{tab02Name:'快照'}
         ],
         onView1:{flag:true},
         onView2:{flag:false},
         currentView:'CreatePool',
         flag2_open: true
     }
   },
   components:{
     MyHeader,
     Leftbar,
   },
   created: function(){
      console.log(this.flag2_open);
   },
   methods: {
      tab: function(on,on_copy){
          if(on==on_copy){
            on_copy.flag = true;
          }else{
            on_copy.flag = false;
          }
       },
      change: function(onView){
           //用来更改颜色的变化
           this.tab(onView,this.onView1);
           this.tab(onView,this.onView2);
      }
   }
}
</script>
