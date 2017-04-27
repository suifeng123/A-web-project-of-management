<template>
    <div id="maindiv" class="maindiv">
      {{version}}
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
.bar text {
   font-weight:bold;
   font-size:30px;
}
.bar react {
    fill: #95859c;
    shape-rendering: crispEdges;
}
.axis path,.axis line {
  fill:none;
  stroke:#0000;
  shape-rendering:crispEdges;
}
</style>
<script>
import * as d3 from 'd3'
import echarts from 'echarts'
export default {
  data() {
    return {
      data:[1,2,3,4,5],
      version: d3.version,
      values: [0,1,2,3,4,5,6,7,8,9,2,3,4,5,5,5,5,5,1,1,7,7,7,6,4,8],
      width: 960,
      height: 500,
      padding: 6
    }
},
 methods:{

 }
}
</script>
