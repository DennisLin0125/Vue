<template>
  <div class="container">
    <userSearch />
    <userList />
  </div>
</template>

<script>
import userList from "./components/userList.vue";
import userSearch from "./components/userSearch.vue";

export default {
  name: "App",
  components: { userList, userSearch },
};
</script>


