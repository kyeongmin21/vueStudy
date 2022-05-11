<template>
  <div>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="memo" placeholder="memo를 입력해주세요."></textarea>
    <b-button class="text-left mt-2 d-block" @click="listAdd">할일 추가</b-button>
  </div>
</template>

<script>
export default {
  name: "ListAdd",
  data() {
    return {
      memo: null
    }
  },
  methods: {
    listAdd () {
      if (this.memo === null) {
        alert('memo를 입력해주세요')
      } else {
        this.$emit('listAdd', this.memo)
      }

    }
  }
}
</script>

<style scoped>

</style>