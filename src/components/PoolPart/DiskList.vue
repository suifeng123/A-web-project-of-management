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
        <button class="btn btn-sm btn-success" @click="search()">搜索</button>
        <button class="btn btn-sm btn-success" @click="refresh()">刷新</button>
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
            <th style="20px;"><label style="width:10px;"><input type="checkbox" v-model="all" value="all" /> </label></th>
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
              <td><label><input type="checkbox" v-model="data.checkbox" value="data.checkbox" /></label></td>
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
                       <a href="javascript:void(0)" @click="onPreClick()">
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
                       <a href="javascript:void(0)" @click="onLastClick()">
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
   margin-top: 20px;
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
        all: false
    }
   },

 created: function() {
      //获取数据
    this.$http.get('/hikcmd/global/disks/').then(successData=>{
          var newTable = [];
          var  comData = successData.body;

          for(var key in comData){
            newTable.push(comData[key]);
          }
          console.log(newTable);
          for(var i=0;i<newTable.length;i++){
             //向每一个选项中填一个checkbox选项,添加完毕
             for(var key in newTable[i]){
                 newTable[i]['checkbox'] = false;
             }

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
          //调用之前先要使其职位空的数组
          this.pages = []
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
            console.log(this.activeNum);
            console.log(this.pages);
             //判断当前页是否为最大的页码
             if(this.activeNum < this.pages.length - 1){
                  this.activeNum = this.activeNum + 1
             }else{

                  if(this.pages[this.pages.length - 1]){
                      let newPages = []
                    for(let i=0;i < this.pages.length; i++) {
                       newPages[i] = this.pages[i]
                    }
                    this.pages = newPages

                  }
             }
             this.getData()
         },
         onPreClick () {
               //获取当前页码是否为最下的页码
               if(this.activeNum > 0){
                   this.activeNum = this.activeNum - 1;
               } else {
                      if(this.pages[0] != 1) {
                         let newPages = []

                         for(let i=0; i < this.pages.length;i++){
                             newPages[i] = this.pages[i] -1
                         }
                         this.pages = newPages

                      }
               }
               this.getData()
         },

         //点击跳转到首页
         onFirstClick () {
             if(this.pages[0] == 1){
                  this.activeNum = 0;
             } else {
                let originPage = []
                for(let i=1;i<=this.pageLen;i++){
                  originPage.push(i)
                }
                this.pages = originPage;

             }
              this.activeNum == 0?this.getData(): this.activeNum = 0;

         },
         //当鼠标点击尾页的时候出现的情况
        onLastClick () {
             if(this.pageTotal <= this.pageLen){
                 this.activeNum = this.pages.length - 1;
             }else {
                let lastPage = []
                for(let i = this.pageLen - 1;i>=0;i--){
                   lastPage.push(this.pageTotal - i);
                }
                this.pages = lastPage;
                this.activeNum == this.pages.length-1?this.getData():this.activeNum=this.pages.length-1
             }
             this.getData()
        },

        refresh() {
          this.$http.get('/hikcmd/global/disks/').then(successData=>{
          var newTable = [];
          var  comData = successData.body;

          for(var key in comData){
            newTable.push(comData[key]);
          }
          console.log(newTable);
          for(var i=0;i<newTable.length;i++){
             //向每一个选项中填一个checkbox选项,添加完毕
             for(var key in newTable[i]){
                 newTable[i]['checkbox'] = false;
             }

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

        search() {
              var temp = this.selected;
              switch(temp){
                 case "名称搜索" :
                    var content = [];
                    for(let i=0;i<this.DataTotal.length;i++){
                       if(this.DataTotal[i].name == this.contentSelect){
                          content.push(this.DataTotal[i])
                       }
                    }

                    var temp1 = this.DataTotal;
                    this.DataPool = content;
                    this.DataTotal = content;
                    this.getPages();
                    this.getData();
                    this.DataTotal = temp1;
                    break;

                 case "状态搜索" :
                    var content = [];
                    for(let i=0;i<this.DataTotal.length;i++){
                         if(this.DataTotal[i].healthy == this.contentSelect){
                             content.push(this.DataTotal[i])
                         }
                     }
                     var temp1 = this.DataTotal;
                     this.DataPool = content;
                     this.DataTotal = content;
                     this.getPages();
                     this.getData();
                     this.DataTotal = temp1;
                     break;

              }
        }

 },
 //监听事件
   watch: {
     //监听数量变化
     'len' (newVal,oldVal) {
          console.log("开始监听变化");


           this.getPages()
           this.getData()
           if(this.activeNum+1 > this.pages.length){
              this.activeNum = this.pages.length - 1;
           }
     },
     'all' (newVal,oldVal) {
        //监控所有的控制值
        if(newVal == true){
           for(var i=0;i<this.DataPool.length;i++){
               this.DataPool[i].checkbox = true;
           }
        }else {
           for(var i=0;i<this.DataPool.length;i++){
               this.DataPool[i].checkbox = false;
           }
        }
     },

     'initial' (newVal,oldVal) {
           var content = [];
           if(this.all == true){
               for(let i=0;i<this.DataPool.length;i++){
                      for(let i=0;i<this.DataPool.length;i++){
                         content.push(this.DataPool[i]['name'])
                      }
               }
           }else{
                for(let i=0;i<this.DataPool.length;i++){
                   if(this.DataPool[i]['checkbox'] == true)
                      content.push(this.DataPool[i]['name'])
                }
           }

           //进行逐项的选择
           switch (newVal) {
              case "擦除" :
                 if(confirm("您确定擦除这些磁盘吗?")==true){
                       console.log("进行对这些磁盘的擦除操作");
                 }
                 break;
              case "修改":
                if(confirm("您确定对这些磁盘进行修改吗?")==true){
                   console.log("进行对这些磁盘进行修改的操作");
                }
           }
     }
   }


}
</script>
