<template>
    <div  class="maindiv">
      <div id="main"></div>
    </div>
</template>
<style scoped>
.maindiv {
    position:absolute;
    top:0px;
    left:0px;
    right:500px;
    bottom:300px;
}
#main {
  height: 400px;
}
</style>
<script>
import * as d3 from 'd3'
//引入展示监控的监控空间echarts
import echarts from 'echarts'
import $ from 'jquery' //引入dom操作空间jquery
export default {
  data() {
    return {
       //初始化对象
       chart: null,
       //初始化图标配置
       opinion: ['高富帅','矮富帅','']
    }
},
 methods:{

 }
}
</script>
