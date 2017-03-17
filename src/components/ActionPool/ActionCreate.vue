<template>
  <div>
    <MyHeader></MyHeader>
    <Leftbar></Leftbar>
    <div class="maindiv">
      <vue-form :state="formstate" @submit.prevent="onSubmit">
      <h1>创建存储池</h1>
        <div class="form-group" style="display:block;">
            <validate tag="label" class="validate">
              <div style="display:inline-block;width:600px;">
              <label>名称*</label>
            <input style="display:inline-block;" type="text" class="col-lg" name="name" required v-model="name"/>
              </div>
                <div style="width:400px;" class="alert">
              <form-error  field="name" error="required">这个字段是必须的</form-error>
              </div>
            </validate>
          </div>
          <div class="form-group">
            <validate tag="label" class="validate">
              <div style="display:inline-block;width:600px;">
            <label>控制器*</label>
            <select required name="controller" class="col-lg" v-model="controller">
              <option v-for="option in controllers">
                {{option}}
              </option>
            </select>
                </div>
              <div style="width:400px;" class="alert">
                <form-error field="controller" error="required">这个选项时必选的</form-error>
              </div>
            </validate>
          </div>
          <div class="form-group">
            <div class="div_table_left">
              <label style="margin-top:-1000px;">成员盘*</label>
            </div>
            <div style="display:inline-block; width:400px;">
              <table style="width:400px;">
                <thead>
                <tr>
                  <td></td>
                  <td style="font-size:20px;">名称</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="disk in disks" >
                  <td>
                    <label class="label1"><input type="checkbox" v-model="disk.checkbox" value="disk.checkbox" @click="changeDisk()"/><i></i> </label>
                  </td>
                  <td>{{disk.name}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="form-group">
            <validate tag="label" class="validate">
              <div style="display:inline-block;width:600px;">
            <label>加密</label>
            <select required name="entry" class="col-lg" v-model="entry">
              <option v-for="option in entrycheck">
                {{option}}
              </option>
            </select>
              </div>
              <div style="width:400px;" class="alert">
                <form-error field="entry" error="required">这个选项时必选的</form-error>
              </div>
            </validate>
          </div>
          <div class="form-group">
            <validate tag="label" class="validate">
              <div style="display:inline-block;width:600px;">
              <label>重删*</label>
            <select required
                    name="chonshan" class="col-lg" v-model="initial">
              <option v-for="option in options">
                {{option}}
              </option>
            </select>
              </div>
              <div style="width:400px;" class="alert">
                <form-error field="chongshan" error="required">这个选项时必选的</form-error>
              </div>
            </validate>
          </div>
          <div class="form-group">
            <div class="div_table_left">
              <label>其他</label>
            </div>
            <div style="float:left;">
              <table>
                <thead>
                <tr>
                  <td style="font-size:20px;">磁盘</td>
                  <td style="font-size:20px;">无</td>
                  <td style="font-size:20px;">Log</td>
                  <td style="font-size:20px;">Cache</td>
                  <td style="font-size:20px;">Spare</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in copydisks">
                  <td>{{data.name}}</td>
                  <td><input type="checkbox"  value="true"/> </td>
                  <td><input type="checkbox" value="data.checkbox_log" /> </td>
                  <td><input type="checkbox" value="data.checkbox_cache" /> </td>
                  <td><input type="checkbox"  value="data.checkbox_spare"/> </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--写一个点击按钮确定和取消的按钮 -->
          <div>
            <div class="form-group pull-right">
              <div>
                <button type="button" class="btn btn-normal btn-info" @click="close()">取消</button>
                <button type="button" v-bind:disabled="formstate.$invalid" class="btn btn-normal btn-info" @click="createPool()" >创建</button>
              </div>

            </div>
          </div>
      </vue-form>
    </div>
  </div>


</template>
<style scoped>
.validate{
   display:block;
}

.validate label{
  display:inline-block;
  vertiacl-align:middle;
  padding: 0 10px;
}
.maindiv {
   position:absolute;
  left:180px;
  top:60px;
  right:0px;
  bottom:0;
  overflow:auto;
  /* add by 王圣文*/
  background:#F7F7F7;
  color:#888;
  font: 12px Georgia, "Times New Roman", Times, serif;
}
.maindiv h1{
   font-size: 20px;
  padding: 0px 0px 10px 40px;
  display: block;
  border-bottom:1px solid #E4E4E4;
  color: #888;
}
.alert {
   margin-top:-10px;
   font-size:10px;
   margin-left:90px;
   color:red;
}
.maindiv label>span {
    float: left;
   width: 20%;
  text-align: right;
  color: #888;
}
.div_table_left {
   display:inline-block;float:left;
}
.form {
  margin-top:30px;
  position:relative;
  margin-left:50px;
}
label {
  font-size:10px;
  width:100px;
}
  .panel-head {
     position:relative;
     margin-left:120px;
     font-size:25px;
     font-weight:bold;
  }
  .form-group {
     margin-top:10px;
    position:relative;
   margin-left:200px;
  }
  td{
     width:80px;
  }
  .label1{
     width:25px;
  }
  .pull-right{
     position:relative;
      margin-right:600px;
  }
  .col-lg{
    width:400px;
    display:inline-block;
  }
  /**add by 王圣文 ***/
  table {
   background-color: #FFF;
    border: none;
    color: #565;
    font: 12px arial;
  }

  table, td, th {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    text-align:left;
}

tbody td, tbody th {
    background-color: #DFC;
    border-bottom: 2px solid #B3DE94;
    border-top: 3px solid #FFFFFF;
    padding: 9px;
    font-size:20px;
}


tfoot td, tfoot th {
    font-weight: bold;
    padding: 4px 8px 6px 9px;
    text-align:center;
}

thead th {
    font-size: 20px;
    font-weight: bold;
    line-height: 19px;
    padding: 0 8px 2px;
    text-align:center;
}
thead th tr td {
  font-size:20px;
}

tbody tr.odd th,tbody tr.odd td { /*odd就是偶数行*/
    background-color: #CEA;
    border-bottom: 2px solid #67BD2A;
}

td+td+td, /*第三个td以及之后的td元素*/
col.price{ /*类样式*/
    text-align:right;
}

tbody tr:hover td, tbody tr:hover th { /*tr也有hover样式*/
    background-color: #8b7;
    color:#fff;
}

</style>
<script>
import MyHeader from '../Header'
import Leftbar from '../Leftbar'

export default {
   data() {
      return {
        disks:[],
        initial:'关闭',
        controllers:['A','B'],
        options:["开启","关闭","验证"],
        copydisks:[],
        checkedNames:[],
        entrycheck:['是','否'],
        check_none:true,
        name:'',
        controller:'',
        formstate:{},
        entry:''

      }
   },
   created: function(){

   //TODO 在此处获取所有磁盘的名字

      this.$http.get('/hikcmd/global/disks/').then(res=>{
            console.log(res.body[0].name);
            //将磁盘的信息进行写入
            var content = res.body;
            for(let i=0;i<4;i++){
            this.disks.push({
               checkbox:false,
               name:content[i].name,
               checkbox_none:true,
               checkbox_log:false,
               checkbox_cache:false,
               checkbox_spare:false
            })
            }
           this.copydisks = this.disks;
      },res=>{
            console.log("获取磁盘信息失败");
      })



   },
   components:{
   MyHeader,
   Leftbar
   },
   methods:{
     changeDisk() {
          var item =[];
          for(let i=0;i<this.disks.length;i++){
             if(this.disks[i].checkbox==false){

                 item.push(this.disks[i]);
             }
          }
          this.copydisks = item;
     },
     //返回创建存储池的页面
     close() {
        this.$router.push({path:'/storage/chi'});
     },
     //进行创建存储池的操作
     createPool() {
            //进行创建存储池的操作
            console.log(this.name+this.controller);
            this.$http.post('/hikcmd/global/pool/',{
               id:Math.random()*10,
              name:this.name,
              size: "19.9G",
              config_controller: this.controller,
              run_controller: this.controller,
              free: "18.2G",
              compress: "1.00x",
              compressratio: "1.00x",
              status: "healthy",
              entry: "false",
              checkbox:false
            }).then(
              res => {
              //创建存储池成功
                this.$router.push({path:'/storage/chi/'})
              },res=>{
              //创建存储池失败
              alert("创建存储池失败");
              this.$router.push({path:'/storage/chi/'})
              }
            )
     }

   },
   watch: {
   /*
     'disks' (newVal,oldVal) {
        //对disks进行监控
        var item =[];
        for(let i=0;i<this.disks.length;i++)
           {
             if(this.disks[i].checkbox==false)
                item.push(this.disks[i])
           }
           this.copydisks = item;

     }
     */
   }

}
</script>
