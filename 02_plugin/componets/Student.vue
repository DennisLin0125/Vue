<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: "Dennis",
      sex: "男",
    };
  },
};
</script>
