<template>
  <div id="app">
    <div id="nav">
      <base-layout>
        <router-view/>
      </base-layout>
    </div>
  </div>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'

export default {
  name: 'App',
  components: { BaseLayout },
}
</script>

<style>
@import "/css/style.css";
@import "/css/reset.css";
</style>
