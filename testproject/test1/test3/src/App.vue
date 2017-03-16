<template>
  <div id="app">
   <h1>预览</h1>
    <p>{{comment}}</p>
    <validator lazy name="validation1">
      <input type="text" :value="comment" v-validate:comment="{required:true,maxlength:23}" />
      <br /><span v-if="$validation1.comment.required">需要你的输入</span>
      <br /><span v-if="$validation1.comment.maxlength">你的输入太长了</span>
      <br /><button type="button" value="save" @click="onSave" v-if="valid">保存</button>
    </validator>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
   data() {
      return {
         occuredValid:'',
         occuredInvalid:'',
         occuredTouched:'',
         occuredDirty:'',
         occuredModified:''
      }
   },
   computed:{
       requiredErrorMsg: function () {
          return '需要你的输入'
       }
   },
  components: {
    Hello
  },
  created: function(){


  },
  methods:{
     onValid: function() {
       this.occuredValid = "验证通过";
       this.occuredInvalid ='';
     },
     onInvalid: function() {
        this.occuredInvalid="验证未通过";
        this.occuredValid="";
     },
     onTouched: function() {

        this.occuredTouched ="发生接触实践"
     },
     onDirty: function() {
       this.occuredDirty = "发生脏事件"
     },
     onModified: function(e){
        console.log(e.cancelBubble);
        this.occuredModified = '发生修改实践:'+e.modified;
     }
  }

}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
