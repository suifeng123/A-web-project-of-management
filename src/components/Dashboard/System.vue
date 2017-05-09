<template>

  <div class="maindiv">
    <div id="system" style="width:500px;height:500px;"></div>
  </div>


</template>
<style scoped>
.maindiv {
    position:absolute;
    top:0px;
    left:0px;
    overflow: auto;
}



</style>
<script>
import * as d3 from 'd3'
//引入展示监控的监控空间echarts
import echarts from 'echarts'
//import $ from 'jquery' //引入dom操作空间jquery
export default {
  data() {
     return {
     chart: null,
     }

  },

  methods: {
     drawGraph(id){
     this.chart = echarts.init(document.getElementById(id))
     //显示加载动画
     this.chart.showLoading()
     var that = this;
     //向后台发送ajax请求
     $.ajax({
        type:"GET",
        async: true,
        url: "",
        dataType: "json",
        success: function(result){
          console.log("数据获取成功")
        },
        error: function(errorMsg){
           console.log(errorMsg);
        }
      })

      this.chart.setOption({

         title: {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        x:'right',
        y:'bottom'
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    legend: {
        data: (function (){
            var list = [];
            for (var i = 1; i <=28; i++) {
                list.push(i + 2000 + '');
            }
            return list;
        })()
    },
    visualMap: {
        color: ['red', 'yellow']
    },
    radar: {
       indicator : [
           { text: 'IE8-', max: 400},
           { text: 'IE9+', max: 400},
           { text: 'Safari', max: 400},
           { text: 'Firefox', max: 400},
           { text: 'Chrome', max: 400}
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name:'浏览器（数据纯属虚构）',
                type: 'radar',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                          width:1
                        }
                    },
                    emphasis : {
                        areaStyle: {color:'rgba(0,250,0,0.3)'}
                    }
                },
                data:[
                  {
                    value:[
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        i * i /2
                    ],
                    name: i + 2000 + ''
                  }
                ]
            });
        }
        return series;
    })()

       })
       this.chart.hideLoading()
       }
  },
  mounted() {
     this.$nextTick(function() {
      this.drawGraph('system')
    })
  }
}
</script>
