<template>
  <div class="container">
    <userSearch />
    <userList />
  </div>
</template>

<script>
import userList from './components/userList.vue'
import userSearch from './components/userSearch.vue'

// import axios from 'axios'
export default {
  name: 'App',
  components: { userList, userSearch },
  // methods: {
  //   getStudent() {
  //     axios.defaults.baseURL = "http://localhost:8081"
  //     axios({
  //       method: "GET",
  //       url: "/students",
  //     }).then(res => {
  //       console.log("請求成功:", res.data);
  //     }).catch((reason) => {
  //       console.error("失敗了:", reason.message);
  //     })
  //   },
  //   getCar() {
  //     axios.defaults.baseURL = "http://localhost:8081"
  //     axios({
  //       method: "GET",
  //       url: "/cars",
  //     }).then(res => {
  //       console.log("請求成功:", res.data);
  //     }).catch((reason) => {
  //       console.error("失敗了:", reason.message);
  //     })
  //   }
  // }
}
</script>


