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
  created: function() {
       var x = d3.scale.linear().domain([0, 10]).range([0, this.width/2]);

      var data = d3.layout.histogram().bins(x.ticks(10))(this.values);

      var xAxis = d3.svg.axis().scale(x).orient("bottom");

     var y = d3.scale.linear().domain([0, d3.max(data, function(d) { return d.x; })])
     .range([this.height, 0]);

     var yAxis = d3.svg.axis().scale(y).orient("left");

     var svg = d3.select("body").append("svg")
    .attr("width", this.width+30)
    .attr("height", this.height+30)
   .append("g")
    .attr("transform", "translate(" + this.padding*2 + "," + this.padding + ")");

    var bar = svg.selectAll(".bar")
    .data(data)
   .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

    bar.append("rect")
 	.attr("x",this.padding)
    .attr("width", x(data[0].dx)-1)
    .attr("height", function(d) { return this.height - y(d.y); });



    bar.append("text")
    .attr("dy", ".75em")
    .attr("y", 6)
    .attr("x", x(data[0].dx) / 2)
    .attr("text-anchor", "middle")
    .text(function(d) { return d.y; })
    .attr("fill", "#fff");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate("+this.padding+"," + this.height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+this.padding+"," + 0 + ")")
    .call(yAxis);



















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
