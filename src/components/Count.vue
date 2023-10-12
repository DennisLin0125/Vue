<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>當前求和為 : {{ sum }}</h1>
    <h3>當前求和放大10倍為 : {{ bigSum }}</h3>
    <h3>我在{{ school }},學習{{ subject }}</h3>
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
import { mapState, mapGetters } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data() {
    return {
      num: 1, //用戶所選數字
    };
  },
  computed: {
    // 1.基本寫法
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum
    // },

    // 2.借助mapState生成計算屬性(json寫法)
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    // ...mapGetters({ bigSum: 'bigSum' })

    // 3.陣列寫法
    ...mapState(['sum', 'school', 'subject']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    add() {
      this.$store.commit('ADD', this.num);
    },
    sub() {
      this.$store.commit('SUB', this.num);
    },
    addWhenOdd() {
      this.$store.dispatch('addWhenOdd', this.num);
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd', this.num);
    },
  },
  mounted() {
    const x = mapState({ sum: 'sum', school: 'school', subject: 'subject' })
    console.log(x)
  }
};
</script>

<style scope>
button {
  margin-left: 5px;
}
</style>