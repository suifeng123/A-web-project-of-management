<template>
    <div class="box">

       <!--下面开始写创建存储池的分页功能 -->
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                <th width="25%;">id</th>
                <th width="25%;">name</th>
                <th width="25%;">content</th>
                <th width="25%;">remark</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="data in tablelist">
                 <td  v-text="data.num"></td>
                 <td  v-text="data.author"></td>
                 <td  v-text="data.content"></td>
                 <td  v-text="data.remark"></td>

              </tr>
          </tbody>
          <tfoot>
             <tr>
               <td colspan="4">
                    <div class="pull-left">
                      <button class="btn btn-sucess" @click="refresh">刷新</button>
                    </div>
                    <div class="pull-right">

                      <!--<boot-page v-ref:page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen"
                                 :param="param"></boot-page>
                      -->
                    </div>
               </td>
             </tr>
          </tfoot>
      </table>
    </div>
</template>
<style>
  .box {
     height:600px;
     width:1000px;
     position: relative;
     left:100px;
     float:left;
  }
</style>
<script>
import bootPage from './content'

</script>
