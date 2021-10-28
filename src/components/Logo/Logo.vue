<template>
  <div class="logo">
    <h1>
      <span>EZ</span>
      <button class="memo">
        <div class="memo_left line" :style="{'opacity': lineOpacity}"></div>
        <div class="memo_top line" :style="{'opacity': lineOpacity}"></div>
        <div class="memo_right line" :style="{'opacity': lineOpacity}"></div>
        <div class="memo_bottom line" :style="{'opacity': lineOpacity}"></div>
        <div class="memo_corner left_top" :style="{'opacity': cornerOpacity}"></div>
        <div class="memo_corner left_bottom" :style="{'opacity': cornerOpacity}"></div>
        <div class="memo_corner right_top" :style="{'opacity': cornerOpacity}"></div>
        <div class="memo_corner right_bottom" :style="{'opacity': cornerOpacity}"></div>
        <div class="memo_word_bg">
          <div class="memo_word">
            <div class="memo_word_text">
              memo
            </div>
          </div>
        </div>
      </button>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      lineOpacity: 0,
      cornerOpacity: 0
    }
  },
  created() {
    this.animation();
  },
  methods: {
    animation: function () {
      setInterval(() => {
        this.lineOpacity = this.lineOpacity === 1 ? 0 : 1;
      }, 1200)
      setInterval(() => {
        this.cornerOpacity = this.cornerOpacity === 1 ? 0 : 1;
      }, 1200)
    }
  }
}
</script>