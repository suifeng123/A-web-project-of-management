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

}
#main {
  position:absolute;
  left: 0px;
  top: 60px;
  bottom: 100px;
  height:100px;
  width: 100px;
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
       //初始化对象
       chart: null,
       //初始化图标配置
       opinion: ['高富帅','矮富帅','高富挫','矮富挫','女生'],
       opinionData: [{
          value: 26,
          name: '高富帅'
       },{
          value: 31,
          name: '矮富帅'
       },{
          value: 18,
          name: '矮富挫'
       },{
          value: 21,
          name: '女生'
       }]
    }

},
 methods:{
     //绘图
     drawGraph(id) {

        //绘图方法
        this.chart = echarts.init(document.getElementById(id))
        //皮肤添加同一般使用方式
        this.chart.showLoading()
        var that = this
        //ajax 请求数据
        $.ajax({
            //方式
            type: "GET",
            //是否异步
            async: true,
            //路径|| API
            url: "xxx",
            //返回数据形式为json
            dataType: 'json',
            //加载成功
            success: function(result) {
              //更新初始化数据
              that.opinionData = result
            },
            error: function(errorMsg) {
              //alert("请求数据失败")
              console.log(errorMsg)
            }
        })
        //set 方法
        this.chart.setOption({
            title: {
              text: '女生喜欢的男生种类',
              subtext: '纯属扯犊子',
              x: 'center'
            },
            tooltip: {
               trigger: 'item',
               formatter: "{a}<br />{b}: {c}({d}%)"
            },
            legend: {
               x: 'center',
               y: 'bottom',
               data: this.opinion
            },
            toolbox: {
               show: true,
               feature: {
                 mark: {
                   show: true
                 },
                 dataView: {
                   show: true,
                   readOnly: false
                 },
                 magicType: {
                    show: true,
                    type: ['pie']
                 },
                 restore: {
                   show: true
                 },
                 saveAsImage: {
                   show: true
                 }
               }
            },
            calculable: true,
            series: [{
                name: '种类',
                type: 'pie',
                radius: [30,100],
                center: ['50%','50%'],
                roseType: 'area',
                data: this.opinionData
            }]
        })
        this.chart.hideLoading()
     }
 },
 created: function() {

   this.$nextTick(function() {
     this.drawGraph('main')
   })

 }
}
</script>
