<template>
    <div class="container">
          <div class="line"></div>
      <dl class="system_log">
        <dt onClick="changeImage()">系统记录<img src="./images/left/select_xl01.png"></dt>
        <dd class="first_dd"><a href="#">充值记录</a></dd>
        <dd><a href="#">短信充值记录</a></dd>
        <dd><a href="#">消费记录</a></dd>
        <dd><a href="#">操作记录</a></dd>
      </dl>
    </div>
</template>
<style scoped>
.container{
position:fixed;
  top:60px;
  bottom:0;
  left:0px;
  overflow-y:auto;
  width:180px;
  background-color:#3992d0;
}
.img{
  border:none;
}
dl,dt,dd{
 display:block;
 margin:0;
}
*{
  font-family:'微软雅黑';
  font-size:12px;
  color:#626262;
}
a{
  text-decoration:none;
}
.line{
height:2px;
width:100%;
background-image:url(./images/left/line_bg.png);
background-repeat:none;
}
.system_log dt{
background-image:url(./images/left/system.png)
}
</style>
<script>

</script>
