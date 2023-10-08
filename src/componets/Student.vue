<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <h2>學生年齡: {{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      msg: "我是一個自學Vue的學生",
    };
  },
  //   props: ["name", "sex", "age"] // 簡單接收

  //接收且限制
  //   props: {
  //     name: String,
  //     age: Number,
  //     sex: String
  //   }
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>
