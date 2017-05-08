<template>
     <!--这个是主界面的开发--->
    <div class="maindiv">
     <MyHeader></MyHeader>
     <Leftbar></Leftbar>
      <DashBoard></DashBoard>
    </div>
</template>
<style scoped>
.maindiv {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  right: 0;
}
</style>
<script>
import MyHeader from './Header'
import Leftbar from './Leftbar'
import DashBoard from './Dashboard'
import DashBoard1 from './Dashboard1'
export default {
     components: {
       MyHeader,
       Leftbar,
       DashBoard,
       DashBoard1
     }
}
</script>
