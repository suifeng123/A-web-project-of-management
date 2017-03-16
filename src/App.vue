<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/Header'
export default {
  name: 'app',
  components: {
     MyHeader
  }
}

</script>

<style>
body{
   display:block;
   margin:0 auto;
   padding:0;
   min-width:1280px;
   vertical-align:baseline;
   font-family: Arial, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif;

}
#app {
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
}
</style>
