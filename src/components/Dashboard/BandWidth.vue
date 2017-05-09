<template>
    <div class="maindiv">
      <div id="bindwidth"></div>
    </div>
</template>
<style scoped>
  .maindiv{
    position:absolute;
    right:0;
    bottom:0;
    left:600px;
    top:600px;
  }
  #bindwidth {
     height: 600px;
     width: 600px;
  }
</style>
<script>
//引入相应的echarts控件
import echarts from 'echarts'

export default {
  data() {
     return {
       //初始化对象
       echart: null,
       opinion: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
       opinionData: [
        { value: 335, name:'直接访问'},
        { value: 310, name:'邮件营销'},
        { value: 234, name:'联盟广告'},
        { value: 1548, name:'搜索引擎'},
       ]
     }
  },
  methods: {
    drawGraph(id){
     //开始绘制图像
     this.echart = echarts.init(document.getElementById(id))
     //显示加载动画
     this.echart.showLoading()
     var that = this;
     //向后台发送ajax请求
     $.ajax({
        type:"GET",
        async: true,
        url: "",
        dataType: "json",
        success: function(result){
           that.opinionData = result
        },
        error: function(errorMsg){
           console.log(errorMsg);
        }
      })

      this.echart.setOption({
        title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: this.opinion
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: this.opinionData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]

      })

      this.echart.hideLoading()

  }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawGraph('bindwidth')
    })
  }
}
</script>
