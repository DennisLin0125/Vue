<template>
  <div class="container">
    <Categroy title="遊戲">
      <!-- 解構賦值 -->
      <template scope="{games}">
        <ul>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Categroy>
    
    <Categroy title="遊戲">
      <!-- 解構賦值 -->
      <template scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Categroy>

    <Categroy title="遊戲">
      <template scope="data">
        <h4 v-for="(game, index) in data.games" :key="index">{{ game }}</h4>
      </template>
    </Categroy>
  </div>
</template>

<script>
import Categroy from "./components/Categroy.vue";
export default {
  name: "App",
  components: { Categroy },
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
