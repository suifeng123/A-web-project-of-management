<template>

  <div class="content-left">
    <mu-list @change="handleListChange" :value="activeList">
      <mu-list-item title="北京" value="list1" to="/beijing">

      </mu-list-item>
      <mu-list-item title="上海" value="list2" to="/shanghai">

      </mu-list-item>
      <mu-list-item title="杭州" value="list3" to="/hangzhou">

      </mu-list-item>
      <mu-list-item title="广州" value="list4" to="/guangzhou">

      </mu-list-item>
      <mu-list-item title="深圳" value="list5" to="/shenzhen">

      </mu-list-item>
      <mu-list-item title="长沙" value="list6" to="/changsha">

      </mu-list-item>
    </mu-list>

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
    height: calc(100% - 60px);
    position: absolute;
    border-right:2px solid red;
    background-color: white;

  }
</style>
