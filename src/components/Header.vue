<template>
  <div class="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>

      <li><router-link to="/data">1. data/methods</router-link></li>
      <li><router-link to="/bind">2. v-bind</router-link></li>
      <li><router-link to="/model">3. v-model</router-link></li>
      <li><router-link to="/if">4. v-if / v-show</router-link></li>
      <li><router-link to="/for">5. v-for</router-link></li>

      <li><router-link to="/class">6. :class :style</router-link></li>
      <li><router-link to="/computed">7. computed</router-link></li>
      <li><router-link to="/watch">8. watch</router-link></li>
      <li><router-link to="/compo">9. component</router-link></li>
      <li><router-link to="/parent">10. parent</router-link></li>

      <li><router-link to="/updown">11. Up Down</router-link></li>
      <li><router-link to="/event">12. event</router-link></li>
      <li><router-link to="/slot">13. slot</router-link></li>
      <li><router-link to="/lifecycle">14. LifeCycle</router-link></li>
      <li><router-link to="/props">15. Props</router-link></li>

      <li><router-link to="/animation">16. Animation</router-link></li>
      <li><router-link to="/table">17. Table</router-link></li>
      <li><router-link to="/modal">18. Modal</router-link></li>
      <li><router-link to="/kakaologin">19. Kakao</router-link></li>
      <li><router-link to="/naverlogin">20. Naver</router-link></li>

      <li><router-link to="/googlelogin">21. Google</router-link></li>
      <li><router-link to="/chat">22. Chat</router-link></li>
      <li><router-link to="/login">23. Login</router-link></li>
      <li><router-link to="/axios">24. Axios</router-link></li>
      <li><router-link to="/game">25. Game</router-link></li>
      <li><router-link to="/todos">26. Todo</router-link></li>

      <li><router-link to="/board">26. Board</router-link></li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
@import "/css/style.css";
</style>
