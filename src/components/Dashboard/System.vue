<template>
    <div id="maindiv" class="maindiv">
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
</style>
<script>
import * as d3 from 'd3'
export default {
  data() {
    return {
      data:[1,2,3,4,5]
    }
  },
  created: function() {
       var a = [0,10,30];
       console.log(d3.quantile(a,2));

  /*
      var svg = d3.select("#maindiv")
                   .append("svg")
                   .attr("width",960)
                   .attr("height",500);
      var rects=svg.selectAll("rect")
					.data(this.data)
					.enter()
					.append("rect")
					.attr({	//一次设置多个属性值
						"x":function(d,i){ return 20+i*160/dataset.length;},	//使用函数设置属性值
						"y":function(d){ return 20;},
						"width":20,
						"height":100
					})
					.attr("fill","steelblue");
					*/
  },
 methods:{

 }
}
</script>
