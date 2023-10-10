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
export default {
  name: "userSearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {
      //   請求前更新數據
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });

      if (!this.keyWord) {
        return alert("請輸入關鍵字");
      }
      this.$http
        .get(`http://localhost:8081/api1/search/users?q=${this.keyWord}`)
        .then((respones) => {
          // 請求成功更新數據
          console.log("請求成功");
          // 觸發自定義綁定事件
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: respones.data.items,
          });
        })
        .catch((err) => {
          console.log("請求失敗:");
          // 請求失敗更新數據
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: err.message,
            users: [],
          });
        });
    },
  },
};
</script>
  