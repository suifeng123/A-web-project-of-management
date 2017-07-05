<template>
<div>
  <table class="table">
      <thead>
        <tr>
          <th v-for="i in keys">{{i}}</th>
        </tr>
      </thead>
    <tbody>
       <tr>
         <td v-for="i in data.length">{{i.name}}</td>
       </tr>
    </tbody>
  </table>
</div>
</template>

<script>
  //这个组件使用bootstrap的样式来实现
    export default {
       data() {
        return {
          data:[
            { name:'file1',size:'1G',status:'healthy',used:'70M' },
            { name:'file2',size:'1G',status:'healthy',used:'70M' },
            { name:'file3',size:'1G',status:'healthy',used:'70M' },
          ],
          keys:['name','size','status'],
        }
    }

    }
</script>

<style>

</style>
