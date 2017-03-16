<template>
     <!--这个是主界面的开发--->
    <div>
     <MyHeader></MyHeader>
     <Leftbar></Leftbar>
      <DashBoard></DashBoard>
    </div>
</template>
<style>

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
