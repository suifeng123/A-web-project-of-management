<template>
<div class="header">
  <div class="logo">
    Muse-UI
  </div>
  <div class="nav">
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
      <mu-tab value="tab1" title="Nav One" />
      <mu-tab value="tab2" title="Nav Two" />
      <mu-tab value="tab3" title="Nav Three" />
    </mu-tabs>
  </div>
</div>
</template>

<script>
  export default {
    data(){
    return {
      activeTab: 'tab1'
    }
  },
  methods:{
    handleTabChange(val){
      this.activeTab = val;
    }
  }
  }
</script>

<style scoped>
.header{
  background-color: #7e57c2;
}
  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }
  .nav{
    display: inline-block;
    width: calc(100% - 150px);
    marign: 0 auto;
  }
.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

</style>
