<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        </ul>
        <button type="button" class="btn btn-dark">
          <font-awesome-icon icon="fa-solid fa-comments" class="mr-2"/>
          <span class="badge badge-danger">{{ newMessageCount }}</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['newMessageCount']
}
</script>
