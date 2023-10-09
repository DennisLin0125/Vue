<template>
  <div>
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "testVm2",
  data() {
    return {
      isShow: true
    }
  },
}
</script>

<style scope>
h1 {
  background-color: orange;
}

/* 進入的起點  離開的終點 */
.hello-leave-to,
.hello-enter {
  transform: translateX(-100%);
}

/* 進入的過程中  離開的過程中*/
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 進入的終點 離開的起點 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
</style>