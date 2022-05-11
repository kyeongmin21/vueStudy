<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <List/>
      </div>
      <div class="col-6">
        <ListAdd/>
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
  }
}
</script>
