<template>
  <!--
<div class="panel">
 <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">

   <el-menu-item index="1"><img class="logo" src="../assets/images/logo4.png"><span style="font-size:26px;">AD<i style="color:#20a0ff">MIN</i></span></el-menu-item>

   <li style="float:right;">
   <el-menu-item index="2" class="account"><span  style="font-size:26px">账户管理</span></el-menu-item>
   </li>
   <li style="float:right;">
   <el-menu-item index="3"><span style="font-size:26px">登出</span></el-menu-item>
   </li>
 </el-menu>
</div>
-->
  <div class="header">
    <ul id="nav">
       <li><a>Admin</a></li>
       <li><a class="a1">用户管理</a></li>
       <li><a class="a1">登出</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
      methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.header{
  position:fixed;
  top:0px;
  left:0;
  width:100%;
  height:60px;
}
.a1 {
  float:right;
}
ul#nav{ width:100%;  background:#00A2CA;margin:0 auto}
ul#nav li{display:inline;}
ul#nav li a{display:inline-block; padding:0 20px; line-height:60px;
color:#FFF; font-family:"\5FAE\8F6F\96C5\9ED1"; font-size:16px}
ul#nav li a:hover{background:#0095BB}/*设置鼠标滑过或悬停时变化的背景颜色*/

</style>

