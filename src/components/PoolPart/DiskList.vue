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
</style>
<script>
//这里是Vue的js操作
export default {
   data()  {
    return {
        selected: "名称搜索",
        options:['名称搜索','状态搜索'],
        contentSelect: "",
        initial: '--更过操作--',
        actions: ['--更多操作--','擦除','修改'],
        flag:true,
        flag_copy:false
    }
   },
   methods: {
   },
   created: {
   },
   wathch: {}



}
</script>
