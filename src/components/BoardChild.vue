<template>
  <div>
    <div>{{ num }}</div>
    <b-button variant="outline-primary" @click="update">숫자 증가 버튼</b-button>
    <br><br>

    <div>{{ human }}</div>
    <b-button variant="outline-primary" @click="reverseName">이름 뒤집기 버튼</b-button>
    <br><br>

    <div>{{ bool }}</div>
    <b-button variant="outline-primary" @click="flag">boolean 버튼</b-button>
    <br><br>

    <div>{{ str }}</div>
    <b-button variant="outline-primary" @click="push">str 버튼</b-button>
  </div>
</template>

<script>
export default {
  name: "BoardChild",
  props: {
    num: Number,
    human: String,
    bool: Boolean,
    str: String
  },
  data() {
    return {};
  },
  methods: {
    update() {
      this.$emit('up', this.num)
    },
    reverseName() {
      this.$emit('reverse', this.human)
    },
    flag() {
      this.$emit('onOff', this.bool)
    },
    push() {
      this.$emit('pushEvent', this.str)
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>