<template>
  <div>
    <div class="card mb-2 p-2"
         :class="{ done: list.status === 'done' }"
         v-for="(list, idx) in todoList"
         :key="idx">
      <span>할일 : {{ list.memo }}</span>

      <div class="todoBtn">
        <button v-if="list.status === 'created'"
                @click="completeBtn(idx)"
                class="btn-outline-success inline">완료
        </button>
        <button v-else
                @click="restoreBtn(idx)"
                class="btn-outline-warning">부활
        </button>
        <button @click="deleteBtn(idx)"
                class="btn-outline-danger">제거
        </button>
        <button v-if="list.status === 'created'"
                @click="editBtn(idx)">수정
        </button>
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
    },
    editBtn (idx) {
      console.log(idx)
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

.done {
  background-color: rgba(0, 0, 0, .1);
}
</style>