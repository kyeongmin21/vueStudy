<template>
  <div>
    <h1>slot</h1>
    <section>
      <h3>기본 사용 예시</h3>
      <Button>slot content</Button>
      <!--<Button/>-->
    </section>

    <section>
      <h3>이름이 있는 슬롯</h3>
      <SlotChild>
        <template #header="person" >
          <p>헤더 Slot {{ person.nickName}}</p>
        </template>
        <template #header="{ nickName }" >
          <p>헤더 Slot2 {{ nickName }}</p>
        </template>
        <template v-slot:body>
          <p>바디 Slot</p>
        </template>
        <template v-slot:footer>
          <p>푸터 Slot</p>
        </template>
        <template v-slot:default >
          default
        </template>
      </SlotChild>

    </section>
  </div>
</template>

<script>
import Button from "@/components/Button"
import SlotChild from "@/components/SlotChild"

export default {
  name: 'Slot',
  components: {
    Button,
    SlotChild
  }
}
</script>

<style>
@import "/css/style.css";
</style>





