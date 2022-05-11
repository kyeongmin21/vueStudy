<template>
  <div>
    <div class="card mb-2 p-2"
         v-for="(list, idx) in todoList"
         :key="idx">
      <p>할일</p>
      {{ list.memo }}
      <div class="todoBtn">
        <button class="btn-outline-success inline">완료</button>
        <button class="btn-outline-warning">부활</button>
        <button class="btn-outline-danger">제거</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    todoList: Array
  }
}
</script>

<style scoped>
.todoBtn { display: flex; }
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