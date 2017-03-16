<template>
    <div id="main" class="main">
      <!-- 这个是设计的左侧的导航栏 -->
      <!--这里使用boostrap来设置左侧导航栏-->
      <ul id="ul1" class="ul1">
        <li>

          <span><img  class="img1" src="./images/left/system_current.png">总览</span>

        </li>
        <li>

          <span @click="openurl1()"><img class="img1" src="./images/left/syetem_management_c.png">系统
          <img v-if="system.flag" src="./images/left/select_xl01.png">
          <img v-if="system_copy.flag"  src="./images/left/select_xl.png"></span>
          <!--实现二级标题-->
          <ul v-show='flag1'>
               <li>
                 <span>设备信息</span>
               </li>
               <li>
                 <span>监控</span>
               </li>
               <li>
                 <span>设置</span>
               </li>
               <li>
                  <span>日志</span>
               </li>
          </ul>
        </li>
        <li>
          <span @click="openurl2()"><img class="img2"  src="./images/left/statistics_current.png">存储服务
            <img v-if="cunchu.flag" src="./images/left/select_xl01.png">
            <img v-if="cunchu_copy.flag" src="./images/left/select_xl.png">
            </span>
          <ul v-show="flag2">
              <li @click="changeTab">
                <router-link to="/storage/chi">
                <span>存储池</span>
                </router-link>
              </li>
            <li @click="changeTab">
              <router-link to="/storage/dataset">
              <span>文件系统</span>
              </router-link>
            </li>
            <li @click="changeTab">
              <router-link to="/storage/volume">
              <span>卷(待定)</span>
              </router-link>
            </li>
            <li @click="changeTab">
              <router-link to="/storage/virtual">
              <span>虚拟化</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <span @click="openurl3()"><img class="img1" src="./images/left/source_current.png">访问
          <img v-if="fangwen.flag" src="./images/left/select_xl01.png">
          <img v-if="fangwen_copy.flag" src="./images/left/select_xl.png">
          </span>
          <ul v-show="flag3">
             <li>
                <span>主机</span>
            </li>
            <li>
              <span>网络</span>
            </li>
            <li>
              <span>映射</span>
            </li>
          </ul>
        </li>
        <li>
          <span @click="openurl4()"><img class="img2" src="./images/left/cloud_current.png">数据保护
          <img v-if="shuju.flag" src="./images/left/select_xl01.png">
          <img v-if="shuju_copy.flag" src="./images/left/select_xl.png">
          </span>
          <ul v-show="flag4">
            <li>
              <span>快照</span>
            </li>
            <li>
              <span>复制</span>
            </li>
          </ul>
        </li>
        <li>
          <span @click="openurl5()"><img class="img1" src="./images/left/custom_current.png">其他
          <img v-if="other.flag" src="./images/left/select_xl01.png">
          <img v-if="other_copy.flag" src="./images/left/select_xl.png">

          </span>
          <ul v-show="flag5">
            <li>
                <span>升级</span>
            </li>
            <li>
              <span>关机</span>
            </li>
            <li>
              <span>重启</span>
            </li>
          </ul>
        </li>
        <li>
           <span><img class="img1" src="./images/left/channel_current.png">支持</span>
        </li>
      </ul>


    </div>
</template>
<style scoped>
#main{

   text-align:center;
}

#main ul li{
  padding:0;
}
#main ul{
position:relative;
padding:4px 0;
margin:0;
overflow:hidden;
}
#ul1{
  position:relative;
  top:60px;
}
.img1{
  position:relative;
  margin-right:60px;
}
#img2{
  position:fixed;
  left:30px;
  top:180px;
}
#line1{
  position:fixed;
  left:140px;
  top:180px;
}
#img3 {
  position:fixed;
  left:30px;
  top:220px;
}
#line2{
  position:fixed;
  left:140px;
  top:220px;
}
.img2 {
  position:relative;
  margin-right:15px;
}
ul li>span:hover{
   color:red;
}
ul li ul li span{
  font-size:10px;
}
ul li ul li span:hover{
   color:red;
}
li {
  list-style-type:none;
}
ul>li{
 position: relative;
 margin-top:10px;
}
ul>li>ul>li{
   position:relative;
   margin-top:0px;
}
.main {
  position:fixed;
  left:0;
  width:180px;
  bottom:0;
  top:60px;
  background:#3992d0;
  overflow-y:auto;
}
span {
   font-size: 20px;
   color:white;
}

</style>
<script>
//引入相应的vuex状态
import { mapGetters,mapActions } from 'vuex'

  export default {
     data() {
     return{
       flag1: false,
       flag2: false,
       flag3: false,
       flag4: false,
       flag5: false,
       ff: 'hh',
       system:{flag:true},
       system_copy:{flag:false},
       cunchu:{flag:true},
       cunchu_copy:{flag:false},
       fangwen:{flag:true},
       fangwen_copy:{flag:false},
       shuju:{flag:true},
       shuju_copy:{flag:false},
       other:{flag:true},
       other_copy:{flag:false}
       }
     },
     methods: {
        ...mapActions([
           'changeTab'
        ]),
       changeImg: function(temp,temp_copy){
        if(temp.flag==true){
        console.log("1");
          temp.flag = false;
          temp_copy.flag= true;

        }else{
        console.log("2");
          temp.flag = true;
          temp_copy.flag = false;
        }

       },
        openurl1: function(){
             if(this.flag1==true){
                console.log("3");
                this.flag1 = false;
                this.changeImg(this.system,this.system_copy);

             }else{
               console.log("4");
                this.flag1 = true;
               this.changeImg(this.system,this.system_copy);
             }
        },
        openurl2: function(){
           if(this.flag2==true){
               this.flag2 = false;
               this.changeImg(this.cunchu,this.cunchu_copy);
           }else{
               this.flag2 = true;
               this.changeImg(this.cunchu,this.cunchu_copy); //此处为对象的引用传递，传递的是对象的地址
           }
        },
        openurl3: function(){
            if(this.flag3 == true){
                this.flag3 = false;
                this.changeImg(this.fangwen,this.fangwen_copy);
            }else{

              this.flag3 = true;
              this.changeImg(this.shuju,this.shuju_copy);
            }
        },
        openurl4: function(){
            if(this.flag4 == true){
                 this.flag4 = false;
                 this.changeImg(this.other,this.other_copy);
            }else{
               this.flag4 = true;
               this.changeImg(this.other,this.other_copy);
            }
        },
        openurl5: function(){
            if(this.flag5 == true){
                 this.flag5 = false;
            }else{
               this.flag5 = true;
            }
        },
        test: function(){

        }
     }
  }

</script>
