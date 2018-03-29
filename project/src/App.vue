<template>
  <div id="app">
    <!--首页分为三个部分 --
     分别为 顶部部分  左侧部分 和右侧部分 -->
    <headerTop></headerTop>
    <router-view/>
    <leftBar></leftBar>
  </div>
</template>

<script>
  import headerTop from './components/head';
 import leftBar from './components/leftBar';
export default {
  name: 'App',
  components:{
    headerTop,
    leftBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
