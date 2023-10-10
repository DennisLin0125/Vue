<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="categroty">
    <h3>{{ title }}分類</h3>
    <slot :games="games">插槽默認</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categroy",
  props: ["title"],
  data() {
    return {
      games: ["紅色警戒", "穿越火線", "勁舞團", "傳說對決"],
    };
  },
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