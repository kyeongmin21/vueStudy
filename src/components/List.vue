<template>
  <div>
    <b-card class="pa-2 mb-2 mr-2"
            v-for="(list, idx) in todoList"
            :key="idx"
            :class="{ done: list.status === 'done' }">
      <p>할일 : {{ list.memo }}</p>

      <b-button v-if="list.status === 'created'"
                variant="outline-success"
                @click="completeBtn(idx)">완료
      </b-button>
      <b-button v-if="list.status === 'done'"
                variant="outline-warning"
                @click="restoreBtn(idx)">부활
      </b-button>
      <b-button variant="outline-danger"
                @click="removeBtn(idx)">제거
      </b-button>
      <b-button v-if="list.status === 'created'"
                variant="outline-info"
                @click="listEdit(list.memo, idx)">수정
      </b-button>
    </b-card>
  </div>
</template>

<script>
import EventBus from '@/eventbus'

export default {
  name: "List",
  props: {
    todoList: Array
  },
  methods: {
    completeBtn(idx) {
      this.$emit('complete', idx, 'done')
    },
    restoreBtn(idx) {
      this.$emit('restore', idx, 'created')
    },
    removeBtn(idx) {
      this.$emit('remove', idx)
    },
    listEdit(memo, idx) {
      EventBus.$emit('listEdit', memo, idx)
    }

  }
}
</script>

<style scoped>
.done {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>