<template>
  <div>
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <transition appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "testVm",
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

.v-enter-active {
  animation: dennis 1s;
}

.v-leave-active {
  animation: dennis 1s reverse;
}

@keyframes dennis {
  from {
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}

</style>