<template>
  <div class="hello">
    <validator name="validation">
      <form novalidate>
        <div class="username-field">
          <label for="username">username</label>
          <input id="username" type="text" v-validate:username="['required']">
        </div>
        <div class="comment-field">
          <label for="comment">comment:</label>
          <input id="comment" type="text" v-validate:comment="{ maxlength:256 }">
        </div>
        <div class="errors">
          <p v-if="$validation.username.required">Required your name.</p>
          <p v-if="$validation.comment.maxlength">你的评论太长了</p>
        </div>
        <input type="submit" value="send" v-if="$validation.valid">
      </form>
    </validator>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   validators: { // `numeric` and `url` custom validator is local registration
          numeric: function (val) {
            return /^[-+]?[0-9]+$/.test(val)
          },
          url: function (val) {
            return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
          }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
