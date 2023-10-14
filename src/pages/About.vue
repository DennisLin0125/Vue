<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>
  
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",

  // 通過路由規則,進入該組件被調用
  beforeRouteEnter(to, from, next) {
    console.log("app---->beforeRouteEnter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("user") === "dennis") {
        next();
      } else {
        return alert("無權限查看");
      }
    } else {
      next();
    }
  },
  // 通過路由規則,離開該組件被調用
  beforeRouteLeave(to, from, next) {
    console.log("app---->beforeRouteLeave");
    next();
  },
};
</script>
  
<style>
</style>