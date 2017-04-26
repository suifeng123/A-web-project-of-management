<template>
    <div class="maindiv">
      <!--这一段是表格头的位置-->

      <div style="display:inline">
        <h1>存储池实例</h1>
        <div style="display:inline;">
        <select required v-model="selected">
          <option v-for="option in options">
            {{option}}
          </option>
        </select>
        <input type="text" v-model="contentSelect" style="width:100px;" />
          <button class="btn btn-sm btn-success" @click="search()">搜索</button>
          <button class="btn btn-sm btn-success" @click="refresh()">刷新</button>
          <!--<router-link to='/storage/chi/actionCreatePool'> -->
          <button class="btn btn-sm btn-success" @click="go()">创建</button>
          <!--</router-link> -->
          <select required  v-model="initialAction">
            <option v-for="action in actions" >
               {{ action }}
            </option>
          </select>
        </div>
      </div>

      <!--下面是table表格的格式-->
      <table class="table table-hover table-bordered">
        <thead>
        <tr>
          <th width="1%"><label><input type="checkbox" v-model="all" value="all" /> </label></th>
          <th width="20px;">名字</th>
          <th width="20px;">运行控制器</th>
          <th width="20px;">配置控制器</th>
          <th width="20px;">大小</th>
          <th width="20px;">状态</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="data in DataPool">
          <td><label><input type="checkbox" v-model="data.checkbox" value="data.checkbox"/><i></i> </label></td>
          <td  v-text="data.name"></td>
          <td  v-text="data.config_controller"></td>
          <td  v-text="data.run_controller"></td>
          <td  v-text="data.size"></td>
          <td  v-text="data.status"></td>

        </tr>

        </tbody>
        <tfoot>
        <tr>
          <td colspan="30">
            <div>
              <!--<boot-page ref:page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></boot-page>
             <!-- <bootPage></bootPage> -->
              <nav class="boot-nav">
                <ul class="pagination boot-page">
                  <li>
                    <a href="javascript:void(0)" @click="onFirstClick()">
                      <span class="footspan">首页</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" aria-label="Next" @click="onPrevClick()">
                      <span class="footspan">上一页</span>
                    </a>
                  </li>
                  <li v-for="page in pages" :class="activeNum == (page-1)?'active':''">
                    <a href="javascript:void(0)" v-text="page" @click="onPageClick(page)"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" aria-label="Next" @click="onNextClick()">
                      <span class="footspan">下一页</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" aria-label="Next" @click="onLastClick()">
                      <span class="footspan">末页</span>
                    </a>
                  </li>
                </ul>
                <div class="page-total">
                  共 <span style="font-size:15px;color:black;" v-text="pageTotal"></span> 页
                </div>
              </nav>
              <select class="form-control boot-select" v-model="len">
                <option v-for="arr in lens" :value="arr" v-text="arr"></option>
              </select>
            </div>
          </td>
        </tr>
        </tfoot>
      </table>
      <!--<router-link to="/storage/chi/disk">-->
        <!--<span>实验</span>-->
      <!--</router-link>-->

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

.footspan {
font-size:15px;
color:blue;

}
.form-control{
   display:inline-block;
}
.active{
     background:red;
     font-weight:bold;
  }


.boot-select {
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

.page-total {
    display: inline-block;
    vertical-align: middle;
}
</style>
<script>
import bootPage from './content'
import child from './Child'
import Myconfirm from '../common/confirm'

export default {
     data () {
         return {
            activeNum:0,
            len:5,
            lens:[5,10,20],
            lenArr: [5,10,20],//每页显示的长度
            pageLen: 5,//可显示的分页数
            param: {},//传递的参数
            pages:[],
            active:"active",
            tableList:[
            {num:1,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:2,author:'刘德华',content:'天若有情',remark:'情歌'},
            {num:3,author:'刘德华',content:'忘情水',remark:'情歌'}
            ],//分页组件传回的分页后的数据
            DataPool:[],
            DataPoolcopy:[],
            DataPool1:[
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            ],
            DataTotal:[],
            DataTotalcopy:[],
            messages:["sd"],
            total:0,
            pageTotal:1,
            options: ['名称搜索','状态搜索'],
            selected:'名称搜索',
            actions:['--更多操作--','删除','存储池状态','编辑选项','一致性检查','扩容'],
            initialAction:'--更多操作--',
            all:false,
            contentSelect:""
         }
     },
     components: {
        bootPage,
        child,
        Myconfirm
     },
     methods: {

        test() {
          console.log(this.pages[0].$index);
        },
        refresh () {
            this.getData()  //页面的刷新功能，就是重新获取了一次数据
        },
        incrementTotal: function(b){
                  this.total = b;
        },
         //TODO add by 王圣文 这个是从子组件传回的数据
        notifyAll: function(msg) {
               console.log("父组件中事件派送结果");
               this.messages.push(msg);
               console.log("父组件得到的数据为:"+this.messages);
        },
        //点击到某一页时到这一页的信息
        onPageClick (index) {
             console.log(index);
             this.activeNum = index-1;
        },
        //获取页数
        getPages() {
            this.pages = [];
            //获取了总共的页数
            this.pageTotal = Math.ceil(this.DataTotal.length/this.len)
            //比较总页数和显示的页数
            if(this.pageTotal <= this.pageLen){
                  for(let i=1;i<=this.pageTotal;i++){
                     this.pages.push(i)
                  }
            }else{
                   for(let i=1;i<=this.pageLen;i++){
                       this.pages.push(i);
                   }
            }
            console.log("999999"+this.pages);
        },

        //获取数据
        getData() {

                   let len = this.len; //获取当前的页数
                   let pageNum = this.pages[this.activeNum]-1; //获取当前的page[0]的数据
                   let newData = [];  //使用当前的数据来源
                   //开始向数组中push数据
                   for(let i=pageNum*len;i<(pageNum*len+len);i++){
                       this.DataTotal[i] !== undefined ? newData.push(this.DataTotal[i]):''
                   }

                    this.DataPool = newData; //获取我们所需要的数据
                    // this.DataPool = [{"name":"pool21","size":"19.9G","config_controller":"A","run_controller":"A",}]



 },

       //跳转到首页的功能
       onFirstClick () {
          if(this.pages[0] === 1){
             this.activeNum = 0;
          } else {
            let originPage = []
              for(let i=1;i<= this.pageLen;i++){
                 originPage.push(i)
              }

              this.pages = originPage;
              this.activeNum === 0 ? this.getData() : this.activeNum = 0;
          }
       },
       //跳转到末页的功能
       onLastClick () {
       console.log(this.pageTotal)
       console.log(this.pageLen)
         if(this.pageTotal <= this.pageLen){
             this.activeNum = this.pages.length - 1;
             console.log("当前的活跃的页数是:"+this.activeNum);
         }else {
            let lastPage = []
              for(let i= this.pageLen-1;i>=0;i--){
                   lastPage.push(this.pageTotal - i);
              }
              this.pages = lastPage;
              console.log("sadf");
              this.activeNum === this.pages.length-1?this.getData():this.activeNum=this.pages.length-1
         }
       },
         //跳转到上一页的功能
        onPrevClick () {

            // 当前页是否为当前最小页码
            if (this.activeNum > 0) {
                this.activeNum = this.activeNum - 1
            } else {
                if (this.pages[0] !== 1) {
                    let newPages = []

                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] - 1
                    }

                    this.pages = newPages
                    this.getData()
                }
            }
        },

        // 下一页
        onNextClick () {

            // 当前页是否为当前最大页码
            if (this.activeNum < this.pages.length - 1) {
                this.activeNum = this.activeNum + 1
            } else {
                if (this.pages[this.pages.length - 1]) {
                    let newPages = []

                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] + 1
                    }

                    this.pages = newPages

                    this.getData()
                }
            }
        },
        search(){
           console.log(this.selected);
           var temp = this.selected;
           switch(temp){
             case "名称搜索" :
                 console.log(this.contentSelect);
                 var content = [];
                 for(let i=0;i<this.DataTotal.length;i++){
                           if(this.DataTotal[i].name==this.contentSelect){
                                  content.push(this.DataTotal[i])
                           }
                 }
                 var temp1 = this.DataToal;
                 this.DataPool = content;
                 this.DataTotal = content;
                 this.getPages();
                 this.getData();
                 this.DataToal = temp1;
                 break;

              case "状态搜索" :
                 console.log(this.contentSelect);
                 var content = [];
                 for(let i=0;i<this.DataTotal.length;i++){
                           if(this.DataTotal[i].run_controller=='A'){
                                  content.push(this.DataTotal[i])
                           }
                 }
                 var temp1 = this.DataToal;
                 this.DataPool = content;
                 this.DataTotal = content;
                 this.getPages();
                 this.getData();
                 this.DataToal = temp1;
                 break;
              }
        },
        //创建存储池
        go() {
         this.$router.push({name:'ActionCreatePool',params:{DataPool:this.DataTotal}});

         },

          refresh() {
             // TODO 进行重新获取存储池状态的操作

              this.$http.get('/hikcmd/global/pool/').then(successData => {

                  var newTable = []; //定义一个新的数组
                  var comData = successData.body;

                  for(var key in comData){
                    newTable.push(comData[key]);
                  }

                  this.DataPool= newTable;
                  this.DataTotal = newTable;
         //在数据未加载之前，先进行获取页数的操作
            this.getPages();
            this.getData();

         },failData => {
          console.log("靠，又他妈帅了"+failData);
         })

          }


     },
     // TODO 传递到子组件的数据 add by 王圣文 20170228
     //TODO 现在不考虑两个组件之间的通信了
     created: function(){
     //获取数据

      this.$http.get('/hikcmd/global/pool/').then(successData => {

                  var newTable = []; //定义一个新的数组
                  var comData = successData.body;

                  for(var key in comData){
                    newTable.push(comData[key]);
                  }


                  this.DataPool= newTable;

                  this.DataTotal = newTable;
                  this.DataTotalcopy = newTable;//add by 王圣文
                  //在数据未加载之前，先进行获取页数的操作
                 this.getPages();
                 this.getData();


         },failData => {
          console.log("靠，又他妈帅了"+failData);
         })
         //this.getData()
         //this.getPages()

     },
     //监听事件
     watch: {
        //监听数量变化
        'len' (newVal,oldVal) {
            this.getPages(); //首先是获取页数
            if (this.activeNum+1 > this.pages.length){
               this.activeNum = this.pages.length -1;
            }
            console.log("88888");
            this.getData();
        },
        'all' (newVal,oldVal){
           if(newVal==true){
             for(var i=0;i<this.DataPool.length;i++){
               this.DataPool[i].checkbox = true;
             }
           }else{
              for(var i=0;i<this.DataPool.length;i++)
                 this.DataPool[i].checkbox = false;
           }
        },
        //监听当前变化
        'activeNum' (newVal,oldVal) {
           this.getData()
        },
        'initialAction' (newVal,oldVal){
           //TODO 進行具體的操作，首先獲取所需要的數據
           var content = [];//定義一個數組，用來娶我麼想要的數據
            if(this.all==true){
                    for(let i=0;i<this.DataPool.length;i++){
                        content.push(this.DataPool[i]['name']);
                    }
            }else{
               for(let i=0;i<this.DataPool.length;i++){
                    if(this.DataPool[i]['checkbox']==true) content.push(this.DataPool[i]['name'])

                }
           }
             console.log("所有的獲取被選中的數據為:");
            console.log(content);
               if(content.length==1 && newVal != "删除"){
                  switch(newVal){
                    case "存储池状态" :
                    /***存储池状态***/
                    if(content.length!=1)
                       alert("请选择一项");
                     else
                         this.$router.push({path:'/storage/chi/status',params:{DataPool:content}});

                    break;
                    case "编辑选项":
                        if(content.length!=1)
                            alert("请选择一项");
                        else
                            this.$router.push({path:'/storage/chi/edit'});
                    break;

                    case "扩容":
                        if(content.length!=1)
                            alert("请选择一项");
                        else
                             this.$router.push({path:'/storage/chi/expersion'});
                    case "一致性检查":

                                 if(confirm("您确定进行一致性检查吗???")==true){
                                     console.log("进行对存储池进行一致性检查的操作");
                                 }


                    case "删除" :
                           if(confirm("您确定删除此存储池吗???")==true){
                                     console.log("进行对存储池删除操作");
                                 }
                   }
              }else if(content.length>1 && newVal == "删除"){

                 switch(newVal){
                    case "删除" :
                       if(confirm("您确定删除这些存储池吗???")==true){
                                     console.log("进行对这些存储池删除操作");
                          }

                    }
              }

        }
     },

     events: {
        //分页组件传回的表格数据
        'data' (data) {
            this.tableList = data
        },
        //刷新数据
        'refresh' () {
           this.refresh()
        }

     },

}

</script>
