<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>學校名稱: {{ name | mySlice}}</h2>
    <h2>學生地址: {{ address }}</h2>
    <button @click="test">點我測試Hello</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "台灣大學dennis",
      address: "台北",
    };
  },
  methods: {
    test() {
      this.hello()
    }
  }
};
</script>
