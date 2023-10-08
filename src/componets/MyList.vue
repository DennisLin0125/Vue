<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" v-bind:key="todoObj.id" v-bind:todoObj="todoObj"/>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue';
export default {
  name: 'MyList',
  components: {
    MyItem
  },
  data() {
    return {
      todos: [
        { id: '001', title: '吃飯', done: true },
        { id: '002', title: '睡覺', done: false },
        { id: '003', title: '打程式', done: true },
        { id: '004', title: '看書', done: false }
      ]
    }
  },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>