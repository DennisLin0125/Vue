<template>
  <div class="container">
    <Categroy title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="logo" />
    </Categroy>

    <Categroy title="遊戲">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Categroy>

    <Categroy title="電影"> 
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Categroy>
  </div>
</template>

<script>
import Categroy from "./components/Categroy.vue";
export default {
  name: "App",
  components: { Categroy },
  data() {
    return {
      foods: ["火鍋", "燒烤", "小龍蝦", "牛排"],
      games: ["紅色警戒", "穿越火線", "勁舞團", "傳說對決"],
      films: ["《教父》", "《拆蛋專家》", "《賭神》", "《上海灘》"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

img,
video {
  width: 100%;
}
</style>
