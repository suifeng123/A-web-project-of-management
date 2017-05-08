<template>
<div class="maindiv">
     <div id="alert" style="width:600px;height:400px;"></div>
</div>
</template>
<style scoped>
  .maindiv {
      position:absolute;
      left:500px;
      top:0;
      right:0;
      bottom:300px;
  }
#alert {
   width: 400px;
   height: 400px;
}
</style>
<script>
import * as d3 from 'd3'
//引入展示监控的监控的空间echarts
import echarts from 'echarts'
export default {
   data() {
      return {
         msg: "123"
      }
   },
    mounted() {
     var myChart = echarts.init(document.getElementById('alert'))

     myChart.setOption({
         title: {text: 'Echarts 入门实例'},
         tooltip: {},
         xAxis: {
            data: ["衬衫","羊毛衫","裤子"]
         },
         yAxis: {},
         height: 100,
         width: 100,
         series: [{
              name: "销量",
              type: 'bar',
              data: [5,20,36]
          }]

     });
 }
}
</script>
