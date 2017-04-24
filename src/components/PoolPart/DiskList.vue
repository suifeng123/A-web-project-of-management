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
            <th><label><input type="checkbox" /> </label></th>
            <th>名称</th>
            <th>磁盘大小</th>
            <th>所属存储池</th>
            <th>定位等状态</th>
            <th>健康状态</th>
            <th>磁盘角色</th>
            <th>介质类型</th>
            <th>是否加密</th>
            <th>擦除状态</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
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
  overflow:auto;
  right:0;
}
.secondDiv {
  font-size: 25px;

}
.tablediv {
   margin-right:20px;
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
        flag_copy:false,
        DataPool:[],
        DataPoolcopy:[],
        DataTotal:[],
        DataTotalcopy:[],
    }
   },




}
</script>
