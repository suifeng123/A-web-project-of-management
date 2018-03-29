<template>
  <div class="breadcrumb">
    <mu-breadcrumb>
      <mu-breadcrumb-item>中国/{{dizhi}}</mu-breadcrumb-item>
    </mu-breadcrumb>
  </div>
</template>

<script>
    export default {

        data(){
         return {
         }
     },
     computed:{
       dizhi(){
         return this.$route.meta.title;
       },

     }

    }
</script>

<style scoped>
  .breadcrumb{
    border-bottom: 1px solid #008800;
    margin: 10px 0;
  }

</style>
