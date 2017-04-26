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
                      <a href="javascript:void(0)" @click="onFirstClick()">
                        <span class="footspan">首页</span>
                      </a>
                    </li>
                    <li>
                       <a href="javascript:void(0)" @click="">
                         <span class="footspan">上一页</span>
                       </a>
                    </li>
                    <li v-for="page in pages" :class="activeNum == (page-1)?'active':''">
                      <a href="javascript:void(0)" v-text="page" @click="onPageClick(page)">
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" @click="onNextClick()">
                       <span class="footspan">下一页</span>
                      </a>
                    </li>
                    <li>
                       <a href="#">
                         <span class="footspan">尾页</span>
                       </a>
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
.footspan {
  font-size:15px;
  color:blue;
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
        activeNum: 0,
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
        pages:[],
        active:"active",
        pageTotal:1,
        pageLen: 5,//当初始化的时候的时候PageLen的长度
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

          this.DataTotal = newTable;
          this.DataTotalcopy = newTable;

         //首先获取页数
          this.getPages();
          this.getData();

    },failData => {
        console.log("获取数据失败:"+failData);
    })

 },
 methods: {
         getPages() {
          //获取总的页数
          this.pageTotal = Math.ceil(this.DataTotal.length/this.len);
          //比较总的页数和当前显示的页数
          if(this.pageTotal <= this.pageLen){
               for(let i=1;i<=this.pageTotal;i++){
                   this.pages.push(i);
               }
          }else{
               for(let i=1;i<this.pageLen;i++){
                  this.pages.push(i);
               }
          }
         },
         getData() {
               let len = this.len; //获取当前的页数
               let pageNum = this.pages[this.activeNum]-1; //获取当前page[0]的数据
               let newData = []; //使用当前的数据源
               //开始想数组中push数据
               for(let i=pageNum*len;i<(pageNum*len+len);i++){
                   this.DataTotal[i] !== undefined ? newData.push(this.DataTotal[i]):''
               }
               this.DataPool = newData;// 获取我们当前所需要的数据

         },
         onFirstClick() {
            if(this.pages[0] == 1){
                this.activeNum = 0;
            }else {
                let originPage = [];
                for(let i=1;i<= this.pageLen;i++){
                   originPage.push(i);
                }
                this.pages = originPage;
                this.activeNum === 0?this.getData():this.activeNum=0;
            }
         },
         //点击下一页
         onNextClick() {
             //判断当前页是否为最大的页码
             if(this.activeNum > this.pages.length - 1){
                  this.activeNum = this.activeNum + 1
             }else{
                  if(this.pages[this.pages.length - 1]){
                      let newPages = []
                    for(let i=0;i < this.pages.length; i++) {
                       newPages[i] = this.pages[i] + 1
                    }
                    this.pages = newPages
                    this.getData()
                  }
             }
         }

 }


}
</script>
