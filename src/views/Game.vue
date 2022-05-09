<template>
  <div class="home">
    <div class="row">
      <div class="small-5 columns text-center">
        <img :src="myChoiceImg" alt="가위바위보 이미지" class="text-center">
        <h1 class="text-center"><strong>YOU</strong></h1>
      </div>
      <div class="small-2 columns text-center">
        <h1 style="font-size:100px;"><strong>{{ count }}</strong></h1>
      </div>
      <div class="small-5 columns text-center">
        <img :src="comChoiceImg" alt="" class="text-center">
        <h1 class="text-center"><strong>Computer</strong></h1>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img v-for="life in lifeOfMe" :key="life"
               src="/images/heart.jpg"
               class="heart"
               alt="나의생명하트" />
          <img v-for="life in leftLifeOfMe" :key="life"
               src="/images/broken-heart.jpg"
               class="heart"
               alt="나의깨진생명하트" />
        </div>
      </div>
      <div class="small-6 columns text-center">
        <div class="battle-wrap">
          <img v-for="life in lifeOfCom" :key="life"
               src="/images/heart.jpg"
               class="heart"
               alt="컴퓨터생명하트">
          <img v-for="life in leftLifeOfCom" :key="life"
              src="/images/broken-heart.jpg"
               class="heart"
               alt="컴퓨터깨진생명하트">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="small-6 columns text-center">
        <div class="row">
          <div class="small-8 small-offset-2 columns text-center">
            <label class="radio-label"><input type="radio" v-model="myChoice" value="scissor"> 가위</label>
            <label class="radio-label"><input type="radio" v-model="myChoice" value="rock"> 바위</label>
            <label class="radio-label"><input type="radio" v-model="myChoice" value="paper"> 보</label>
          </div>
        </div>
        <div class="row">
          <div class="small-12 columns">
            <div class="text-center" v-if="isSelectable">
              <button class="start-btn" @click="startGame">선택 완료!</button>
            </div>
            <div v-else class="loading"> 기다리는 중...</div>
          </div>
        </div>
      </div>
      <div class="small-6 columns text-center">
        <p>생각 중...</p>
      </div>
    </div>

    <div class="row">
      <div class="small-12 columns log">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data() {
    return {
      myChoice: null,
      comChoice: null,
      winner: null,
      count: 3,
      lifeOfMe: 3,
      lifeOfCom: 3,
      isSelectable: true
    }
  },
  computed: {
    myChoiceImg () {
      return this.myChoice === null ? 'images/question.jpg' : `images/${this.myChoice}.jpg`
    },
    comChoiceImg () {
      return this.comChoice === null ? 'images/question.jpg' : `images/${this.comChoice}.jpg`
    },
    leftLifeOfMe () {
      return 3-this.lifeOfMe
    },
    leftLifeOfCom () {
      return 3-this.lifeOfCom
    }
  },
  watch: {
    count (newVal) {
      if (newVal === 0) {
        // 컴퓨터가 가위바위보 선택하는
        this.selectCom()
        this.whoIsWin()
        this.count = 3
        this.isSelectable = true
      }
    }
  },
  methods: {
    startGame () {
      this.isSelectable = false
      if (this.myChoice === null) {
        alert('가위바위보를 선택해주세요')
      } else {
        let countDown = setInterval(() => {
          this.count--
          if (this.count === 0) {
            clearInterval(countDown)
          }
        }, 500)
      }
    },
    selectCom () {
      let number = Math.trunc(Math.random() * 10)
      if (number < 3) {
        this.comChoice = 'scissor'
      } else if (number < 6) {
        this.comChoice = 'rock'
      } else {
        this.comChoice = 'paper'
      }
    },
    whoIsWin () {
      // 승패 결과
      if (this.myChoice === this.comChoice) this.winner = 'no one'
      else if (this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
      else if (this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
      else if (this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
      else if (this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
      else if (this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'com'
      else if (this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
      else this.winner = 'error'

      // 생명하트 차감
      if (this.winner === 'me') this.lifeOfCom--
      else if (this.winner === 'com') this.lifeOfMe--
    }
  }
}
</script>

<style>
@import "/css/game.css";
@import "/css/foundation.min.css";
</style>