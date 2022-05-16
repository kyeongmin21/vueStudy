<template>
  <div>
    <textarea class="form-control"
              id="exampleFormControlTextarea1"
              rows="4" v-model="memo">
    </textarea>
    <b-button class="text-left mt-2 d-inline"
              v-if="this.mode === 'add'"
              @click="listAdd">할일 추가
    </b-button>
    <b-button class="text-left mt-2 d-inline"
              @click="listEdit"
              v-else>할일 수정
    </b-button>

  </div>
</template>

<script>
import EventBus from '@/eventbus'

export default {
  name: "ListAdd",
  data() {
    return {
      memo: null,
      idx: null,
      mode: 'add'
    }
  },
  created() {
    EventBus.$on('listEdit', (memo, idx) => {
      this.memo = memo
      this.idx = idx
      this.mode = 'edit'
    })
  },
  methods: {
    listAdd() {
      if (this.memo === null) {
        alert('메모를 입력해주세요')
      } else {
        this.$emit('listAdd', this.memo)
        this.memo = null
      }
    },
    listEdit () {
      if (this.memo === null) {
        alert('메모를 입력해주세요')
      } else {
        this.$emit('listEdit', this.memo, this.idx)
        this.memo = null
        this.mode = 'add'
      }
    }
  }
}
</script>