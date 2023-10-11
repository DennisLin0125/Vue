<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>當前求和為{{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addWhenOdd">當前求和為基數在加</button>
    <button @click="asyncAdd">非同步加</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data() {
    return {
      num: 1, //用戶所選數字
      sum: 0,
    };
  },
  methods: {
    add() {
      this.sum += this.num;
    },
    sub() {
      this.sum -= this.num;
    },
    addWhenOdd() {
      if (this.sum % 2 !== 0) {
        this.sum += this.num;
      }
    },
    asyncAdd() {
      setTimeout(() => {
        this.sum += this.num;
      }, 500);
    },
  },
};
</script>

<style scope>
button {
  margin-left: 5px;
}
</style>