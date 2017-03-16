<template>
    <div class="maindiv">
      <input v-model="msg" />
      <button v-on:click="notify">向父组件上报数据</button>
    </div>
</template>
<style scoped>
.maindiv {
   position:absolute;
   left:180px;
}
</style>
<script>
//首先写一个比较简单的分页功能，即使这个分页功能只是使用与一个需求而已，比如这个分页功能只适合
//创建存储池的一个组件而已
export default {
     data() {
        return {
          msg:'',
          counter:0
        }
     },
     methods: {
         notify: function(){

               this.$emit('childmsg',this.msg)

               console.log(this.msg);


         },
         increment: function(){
            this.counter +=1;
            this.$emit('ee',this.counter)
         }
     }
}
</script>
