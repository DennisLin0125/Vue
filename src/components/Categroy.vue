<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="categroty">
    <h3>{{ title }}分類</h3>
    <!-- 定義一個插槽給組件 -->
    <slot name="center">我是插槽center默認值</slot>
    <slot name="footer">我是插槽footer默認值</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categroy",
  props: ["title"],
};
</script>

<style scoped>
.categroty {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>