<template>
  <div>
    <MyHeader></MyHeader>
    <Leftbar></Leftbar>
    <h1>一个存储池的编辑选项</h1>
  </div>

</template>
<style>
</style>
<script>
import MyHeader from '../Header'
import Leftbar from '../Leftbar'

export default {

   created: function(){
      console.log("从上一个组件传过来的数据---");
      console.log(this.$router.params);
   },
   components:{
   MyHeader,
   Leftbar
   }


}
</script>
