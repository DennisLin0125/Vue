<template>
  <ul>
    <li :style="{ opacity }">歡迎學習VUE</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>
  
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy(){
  //   console.log('News組件即將被銷毀')
  //   clearInterval(this.time)
  // },
  // mounted() {
  //   console.log("mounted", this);
  //   this.time = setInterval(() => {
  //     console.log('@')
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) {
  //       this.opacity = 1;
  //     }
  //   }, 16);
  // },
  activated() {
    console.log("News組件被激活了");
    this.time = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log("News組件被失活了");
    clearInterval(this.time);
  },
};
</script>
  
  