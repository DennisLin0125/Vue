<template>
  <div>
    <h1>人員列表</h1>
    <h3 style="color: skyblue;">上方組件的和為: {{ sum }}</h3>
    <input type="text" placeholder="請輸入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="item in personList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    ...mapState(["personList", "sum"]),
  },
  methods: {
    addPerson() {
      const personObj = { id: nanoid(), name: this.name };
      console.log(personObj);
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>
