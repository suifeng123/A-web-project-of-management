<template>
    <div class="maindiv">
      <el-table :data="tableData" style="width:100%">
        <el-table-column prop="data" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <br />
      <br />

    </div>
</template>
<style scoped>
.maindiv {
  position:absolute;
  left:180px;
  top:60px;
  right:0;
  bottom:0;
  overflow:auto;
}
</style>
<script>
export default {
  data() {
  return {
    tableData: [
      {data:'2016-05-02',name:'王小虎',address:'上海市普陀区金沙江路1518号'},
      {data:'2016-05-02',name:'王小虎',address:'上海市普陀区金沙江路1518号'},
      {data:'2016-05-02',name:'王小虎',address:'上海市普陀区金沙江路1518号'},
      {data:'2016-05-02',name:'王小虎',address:'上海市普陀区金沙江路1518号'},
    ]
  }
}
}
</script>
