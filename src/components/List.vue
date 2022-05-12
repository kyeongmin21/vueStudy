<template>
  <div>
    <div class="card mb-2 p-2"
         v-for="(list, idx) in todoList"
         :key="idx">
      <span>할일 : {{ list.memo }}</span>

      <div class="todoBtn">
        <button @click="completeBtn(idx)" class="btn-outline-success inline">완료</button>
        <button @click="restoreBtn(idx)" class="btn-outline-warning">부활</button>
        <button @click="deleteBtn(idx)" class="btn-outline-danger">제거</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    todoList: Array
  },
  methods: {
    completeBtn (idx) {
      this.$emit('complete', idx, 'done')
    },
    restoreBtn (idx) {
      this.$emit('restore', idx, 'created')
    },
    deleteBtn (idx) {
      this.$emit('listDelete', idx)
    }
  }
}
</script>

<style scoped>
  .todoBtn {
    display: flex;
  }
  button {
    flex: 1;
    width: 70px;
    display: inline-block;
    padding: 5px;
    border: 1px solid #dadada;
    margin: 5px;
    border-radius: 10px;
  }
</style>