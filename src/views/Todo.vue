<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        {{ todoList }}
        <List/>
      </div>
      <div class="col-6">
        <ListAdd @listAdd="listAdd"/>
      </div>
    </div>

  </div>
</template>

<script>
import List from '@/components/List'
import ListAdd from '@/components/ListAdd'

export default {
  name: "Todo",
  components: {
    List,
    ListAdd
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    listAdd (memo) {
      this.todoList.push({ memo: memo, status: 'created' })
    }
  }
}
</script>
