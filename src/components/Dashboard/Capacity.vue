<template>
    <div class="maindiv">
      <div id="capacity" style="width:600px;height:600px;"></div>
    </div>
</template>
<style scoped>
  .maindiv {
    position:absolute;
    top:600px;
    left:0;
    right:400px;
    bottom:0;
  }
</style>
<script>
import echarts from 'echarts'

export default {
  data() {
     return {
        data:  [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
            ],
         chart: null,
     }
  },
  methods: {
    drawGraph(id) {
       this.chart = echarts.init(document.getElementById(id))
       this.chart.showLoading()
      var that = this;
     //向后台发送ajax请求
     $.ajax({
        type:"GET",
        async: true,
        url: "",
        dataType: "json",
        success: function(result){
          console.log("获取数据成功")
        },
        error: function(errorMsg){
           console.log(errorMsg);
        }
      })
      this.chart.setOption({
         title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },
    series: [
        {
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}预期'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [{value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}]
        }
    ]
       })
       this.chart.hideLoading()
    }
  },
  mounted() {
     this.$nextTick(function() {
      this.drawGraph('capacity')
    })
  }
}
</script>
