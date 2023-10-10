<template>
  <div>
    <button @click="getStudent">獲取學生訊息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  methods: {
    getStudent() {
      axios.defaults.baseURL = "http://localhost:8081"
      axios({
        method: "GET",
        url: "/students",
      }).then(res => {
        console.log("請求成功:", res.data);
      }).catch((reason) => {
        console.error("失敗了:", reason.message);
      })
    }
  }
}
</script>

<style></style>
