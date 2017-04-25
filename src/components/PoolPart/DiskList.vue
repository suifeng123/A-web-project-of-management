<template>
    <div class="maindiv">
    <div class="secondDiv">
      <span>磁盘实例</span>
    </div>
      <div style="display:inline;">
       <select required v-model="selected">
          <option v-for="value in options">
            {{value}}
          </option>
       </select>
        <input type="text" v-model="contentSelect" style="width:100px;" />
        <button class="btn btn-sm btn-success">搜索</button>
        <button class="btn btn-sm btn-success">刷新</button>
        <select required v-model="initial">
           <option v-for="action in actions">
               {{action}}
           </option>
        </select>
      </div>
<!-- 下面是table表格 ----->
      <div class="tablediv">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th style="20px;"><label style="width:10px;"><input type="checkbox"  /> </label></th>
            <th>名称</th>
            <th>磁盘大小</th>
            <th>所属存储池</th>
            <th>定位灯状态</th>
            <th>健康状态</th>
            <th>磁盘角色</th>
            <th>介质类型</th>
            <th>是否加密</th>
            <th>擦除状态</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="data in DataPool">
              <td><label><input type="checkbox" /></label></td>
              <td v-text="data.name"></td>
              <td v-text="data.size"></td>
              <td v-text="data.config_pool"></td>
              <td v-text="data.locate_status"></td>
              <td v-text="data.healthy"></td>
              <td v-text="data.role"></td>
              <td v-text="data.media_type"></td>
              <td v-text="data.entry"></td>
              <td v-text="data.wipe_status"></td>
            </tr>
        </tbody>
     <tr>
       <td  colspan="30">
              <div>
                <!--自己写的一个标题头 -->
                <nav class="boot-nav">
                  <ul class="pagination boot-page">
                    <li>
                    </li>
                  </ul>
                </nav>
                <!--自己写的一个标题头 -->
                <select class="form-control boot-select" v-model="len">
                  <option v-for="arr in lens" :value="arr" v-text="arr"></option>
                </select>
              </div>
       </td>
     </tr>
      </table>
        <!--下面是tfoot的部分 -->
        <!--上面是tfoot的部分 --->

      </div>
      <!---上面是table表格 ---->
    </div>
</template>
<style scoped>
.maindiv{
  position:absolute;
  top:50px;
  bottom:0;
  left:20px;
  right:0;
  overflow:auto;
}
.secondDiv {
  font-size: 25px;

}
.footdiv {
  position:relative;
  float:right;
  width:80px;

}
.tablediv {
   margin-right:20px;
}
.boot-select{
  float: right;
   width: 80px;
}
.boot-nav {
    float: right;
}
.boot-page {
    display: inline-block;
    margin: 2px 10px 0 20px;
    vertical-align: middle;
}
</style>
<script>

//这里是Vue的js操作
export default {
   data()  {
    return {
        selected: "名称搜索",
        options:['名称搜索','状态搜索'],
        contentSelect: "",
        actions: ['---更多操作---','擦除','修改'],
        initial: '---更多操作---',
        flag:true,
        len: 5,
        flag_copy:false,
        DataPool:[],
        DataPoolcopy:[],
        DataTotal:[],
        DataTotalcopy:[],
        lens:[5,10,20],
        len: 5,
    }
   },

 created: function() {
  //获取数据
    this.$http.get('/hikcmd/global/disks/').then(successData=>{
          var newTable = [];
          var  comData = successData.body;
        console.log(comData[1]['media_type']);
          for(var key in comData){
            newTable.push(comData[key]);

          }

          this.DataPool = newTable;


    },failData => {
        console.log("获取数据失败:"+failData);
    })

 }


}
</script>
