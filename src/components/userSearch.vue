<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>
  
<script>
import axios from "axios";
export default {
  name: "userSearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {
      if (!this.keyWord) {
        return alert("請輸入關鍵字");
      }

      axios.defaults.baseURL = "http://localhost:8081";
      // 發送網路請求  發送給代理伺服器
      axios
        .get(`/api1/search/users?q=${this.keyWord}`)
        .then((respones) => {
          // 觸發自定義綁定事件
          this.$bus.$emit('getUsers', respones.data.items)
        })
        .catch((err) => {
          console.log('請求失敗:',err.message);
        });
    },
  },
};
</script>
  