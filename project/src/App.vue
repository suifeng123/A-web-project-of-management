<template>
  <div id="app">
    <div v-show="login">
      <login></login>
    </div>
    <div v-show="!login">

     <headerTop></headerTop>

     <leftBar></leftBar>
     <div class="content-right">
        <bread></bread>
        <router-view/>
        <footerdiv></footerdiv>
     </div>
    </div>
  </div>
</template>

<script>
  import headerTop from './components/head';
 import leftBar from './components/leftBar';
  import bread from './components/bread';
  import footerdiv from './components/footer';
  import login from './components/login'
export default {
  name: 'App',
  data(){
     return {}
  },
  computed:{
    login(){
      return this.$route.fullPath=='/login'
    }
  },
  components:{
    headerTop,
    leftBar,
    bread,
    footerdiv,
    login,
  }
}
</script>

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
