<template>
  <div class="dashboard">
    <h1>这个主页面还没进行开发</h1>
    <validator name="validation1">
      <form novalidate>
        <div class="username-field">
          <label for="username">username:</label>
          <input id="username" type="text" v-validate:username="['required']">
        </div>
        <div class="comment-field">
          <label for="comment">comment:</label>
          <input id="comment" type="text" v-validate:comment="{ maxlength: 256 }">
        </div>
        <div class="errors">
          <p v-if="$validation1.username.required">Required your name.</p>
          <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
        </div>
        <input type="submit" value="send" v-if="$validation1.valid">
      </form>
    </validator>

  </div>
</template>
<style scoped>
.dashboard {
  position:absolute;
  top:60px;
  bottom:0;
  left:180px;
  overflow:auto;
  right:0;

}
</style>
<script>

export default {
   mounted: function(){
   /*
       this.$http.post('/hikcmd/global/disks/',{
         id:'4',
         name:'disk4'
       }).then(res=>{
          console.log("添加磁盘成功了")
       },res => {
          console.log("添加磁盘失败了")
       })
       /* 实验的版本
         this.$http.post('/hikcmd/global/pool/',{
         id:'6',
          name:'pool6',
         size: "19.9G",
         config_controller: "A",
         run_controller: "A",
         free: "18.2G",
         compress: "1.00x",
         compressratio: "1.00x",
         status: "healthy",
         entry: "false"

         }).then(res=>{
           console.log("成功了")
         },res=>{
            console.log("失败了")
         })
         */




   }
}

</script>
