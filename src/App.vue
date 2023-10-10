<template>
  <div class="container">
    <Categroy title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt="logo"
      />
      <a slot="footer" href="http://google.com">更多美食</a>
    </Categroy>

    <Categroy title="遊戲">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://google.com">單機遊戲</a>
        <a href="http://google.com">網路遊戲</a>
      </div>
    </Categroy>

    <Categroy title="電影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template slot="footer">
        <div class="foot">
          <a href="http://google.com">經典</a>
          <a href="http://google.com">熱門</a>
          <a href="http://google.com">推薦</a>
        </div>
        <h4>歡迎前來觀看</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

img,
video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>
