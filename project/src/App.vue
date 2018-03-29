<template>
  <div id="app">
    <!--首页分为三个部分 --
     分别为 顶部部分  左侧部分 和右侧部分 -->
    <headerTop></headerTop>

    <leftBar></leftBar>
    <div class="content-right">
      <bread></bread>
      <router-view/>
      <footerdiv></footerdiv>
    </div>
  </div>
</template>

<script>
  import headerTop from './components/head';
 import leftBar from './components/leftBar';
  import bread from './components/bread';
  import footerdiv from './components/footer';
export default {
  name: 'App',
  components:{
    headerTop,
    leftBar,
    bread,
    footerdiv,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #7e57c2;
  margin-top: 0px;
}

.content-right{
  width: 70%;
  display: inline-block;
  float: right;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0);
}
</style>
