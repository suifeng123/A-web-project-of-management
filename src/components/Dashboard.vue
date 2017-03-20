<template>
  <div class="dashboard">
    <h1>这个主页面还没进行开</h1>
    <vue-form :state="formstate" @submit.prevent="onSubmit">

      <validate tag="label">
        <span>Name *</span>
        <input v-model="model.name" required name="name" />

        <form-error field="name" error="required">Name is a required field</form-error>
      </validate>

      <validate tag="label">
        <span>Email</span>
        <input v-model="model.email" name="email" type="email" required />

        <form-errors field="email">
          <div slot="required">Email is a required field</div>
          <div slot="email">Email is not valid</div>
        </form-errors>
      </validate>

      <button type="submit">Submit</button>
    </vue-form>
    <pre>{{ formstate }}</pre>

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
     data () {
       return {
         formstate: {},
         model: {
            name: '',
            email: 'invalid-email'
         }
       }
     },

     methods: {
       onSubmit: function () {
          if(this.formstate.$Invalid) {
        // alert user and exit early
             return;
      }
     },
     },
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
