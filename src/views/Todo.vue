<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <List :todoList="todoList"
              @complete="complete"
              @restore="restore"
              @remove="remove"/>
      </div>
      <div class="col-6">
        <ListAdd @listAdd="listAdd"
                 @listEditDelivery="listEditDelivery"/>
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
    listAdd(memo) {
      this.todoList.push({memo: memo, status: 'created'})
    },
    complete(idx, status) {
      this.todoList[idx].status = status
    },
    restore(idx, status) {
      this.todoList[idx].status = status
    },
    remove(idx) {
      this.todoList.splice(idx, 1)
    },
    listEditDelivery(memo, idx) {
      this.todoList[idx].memo = memo
    }
  }
}
</script>
