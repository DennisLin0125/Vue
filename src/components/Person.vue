<template>
  <div>
    <h1>人員列表</h1>
    <h3 style="color: skyblue">上方組件的和為: {{ sum }}</h3>
    <h3>列表中第一個人的姓名為{{ firstPersonName }}</h3>
    <input type="text" placeholder="請輸入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addLin">添加一個姓林的人</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
import { nanoid } from "nanoid";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("countOptions", ["sum"]),
    ...mapState("personOptions", ["personList"]),
    ...mapGetters("personOptions", ["firstPersonName"]),
  },
  methods: {
    addPerson() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addLin() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personOptions/addPersonLin", personObj);
      this.name = "";
    }
  },
};
</script>
