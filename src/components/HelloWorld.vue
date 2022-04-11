<template>
  <div>
    <h1>{{ msg }}</h1>
    <input ref="test" id="contactInput"><br>
    <input ref="test2" id="contactInput2">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'child page!!'
    }
  },
  methods: {
    focus() {
      console.log('매서드의 함수 실행')
      this.$refs.test.focus()
    }
  }
}
</script>

<style>
h3 {margin: 40px 0 0;}
ul {list-style-type: none; padding: 0;}
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; }
</style>
