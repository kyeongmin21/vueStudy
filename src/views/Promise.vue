<template>
  <div>
    <div class="slider-wrap">
      <div class="slider">
        <ul>
          <li><img src="https://via.placeholder.com/800x200.png?text=1" alt="이미지1"></li>
          <li><img src="https://via.placeholder.com/800x200.png?text=2" alt="이미지2"></li>
          <li><img src="https://via.placeholder.com/800x200.png?text=3" alt="이미지3"></li>
          <li><img src="https://via.placeholder.com/800x200.png?text=4" alt="이미지4"></li>
          <li><img src="https://via.placeholder.com/800x200.png?text=5" alt="이미지5"></li>
        </ul>
      </div><!-- /slider -->

      <div class="arrow">
        <a href="#" class="prev" @click="prevBtn">이전</a>
        <a href="#" class="next" @click="nextBtn">다음</a>
      </div><!-- /arrow -->
    </div><!-- /wrap -->
  </div>
</template>

<script>
export default {
  name: "Promise",
  data() {
    return {
      currentIdx: 0, // 슬라이드 현재 번호
      translate: 0  // 슬라이드 위치 값
    }
  },
  mounted() {
    const ul = document.querySelector('.slider > ul')
    const lis = document.querySelector('li')
    const liWidth = lis[0] * ul.length
    const ulWidth = liWidth * lis.length
    ul.style.width = `${ulWidth}px`

    console.log('ul', ul)
  },
  methods: {
    prevBtn() {

    },
    nextBtn() {

    }
  }
}
</script>

<style scoped>

</style>