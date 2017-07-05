<template>
  <div class="dashboard">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
.dashboard {
  position:absolute;
  top:60px;
  bottom:0;
  left:180px;
  overflow:auto;
  right:0;

}
</style>
<script>
import Bandwidth from './Dashboard/BandWidth'
import System from './Dashboard/System'
import Alert from './Dashboard/Alert'
import Capacity from './Dashboard/Capacity'
import SettingTable from './toolsComponent/Settingtable'
export default {
     data () {
       return {

         tableData: [{
           date: '2016-05-02',
           name: '王小虎',
           address: '上海市普陀区金沙江路 1518 弄'
         }, {
           date: '2016-05-04',
           name: '王小虎',
           address: '上海市普陀区金沙江路 1517 弄'
         }, {
           date: '2016-05-01',
           name: '王小虎',
           address: '上海市普陀区金沙江路 1519 弄'
         }, {
           date: '2016-05-03',
           name: '王小虎',
           address: '上海市普陀区金沙江路 1516 弄'
         }]
       }

     },

     methods: {
       onSubmit: function () {
          if(this.formstate.$Invalid) {
        // alert user and exit early
             return;
      }
     },
     },
   mounted: function(){
   /*
       this.$http.post('/hikcmd/global/disks/',{
         id:'12',
         name:'CTL0.12',
         size: '40G',
         config_pool:'pool4',
         locate_status:'open',
         healthy:'OK',
         role: 'free',
         media_type:'HDD',
         entry:'yes',
         wipe_status:'normal'

       }).then(res=>{
          console.log("添加磁盘成功了")
       },res => {
          console.log("添加磁盘失败了")
       })
       /* 实验的版本
         this.$http.post('/hikcmd/global/pool/',{
         id:'6',
          name:'pool6',
         size: "19.9G",
         config_controller: "A",
         run_controller: "A",
         free: "18.2G",
         compress: "1.00x",
         compressratio: "1.00x",
         status: "healthy",
         entry: "false"

         }).then(res=>{
           console.log("成功了")
         },res=>{
            console.log("失败了")
         })
         */
   },
   components:{
      Bandwidth,
      System,
      Alert,
      Capacity,
        SettingTable
   }
}

</script>
