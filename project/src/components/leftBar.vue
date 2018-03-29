<template>
<div class="content">
  <div class="content-left">
    <mu-list @change="handleListChange" :value="activeList">
      <mu-list-item title="北京" value="list1" to="/beijing">
        <mu-icon slot="left" value="beijing"></mu-icon>
      </mu-list-item>
      <mu-list-item title="上海" value="list2" to="/shanghai">
        <mu-icon slot="left" value="shanghai"></mu-icon>
      </mu-list-item>
      <mu-list-item title="杭州" value="list3" to="/hangzhou">
        <mu-icon slot="left" value="hangzhou"></mu-icon>
      </mu-list-item>
      <mu-list-item title="广州" value="list4" to="/guangzhou">
        <mu-icon slot="left" value="guangzhou"></mu-icon>
      </mu-list-item>
      <mu-list-item title="深圳" value="list5" to="/shenzhen">
        <mu-icon slot="left" value="shenzhen"></mu-icon>
      </mu-list-item>
      <mu-list-item title="长沙" value="list6" to="/changsha">
        <mu-icon slot="left" value="changsha"></mu-icon>
      </mu-list-item>
    </mu-list>
  </div>
</div>
</template>

<script>
  //这里是最左边的关于的组件
  export default {
    data(){
    return {
      activeList: 'list1'
    }
  },
  methods: {
    handleListChange(val){
      this.activeList = val;
    }
  }
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
  }

  .content-left{
    width: 30%;
    float: left;
    background-color: white;
    margin-bottom: -4000px;
    padding-bottom: 4000px;
  }
</style>
