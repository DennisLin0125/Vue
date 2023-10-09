<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="todo-header">
    <input 
      v-model="title" 
      type="text" 
      placeholder="請輸入你的任務名稱，按Enter鍵確認" 
      @keyup.enter="add" 
    />
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'MyHeader',
  data() {
    return {
      // 用於獲取輸入框的訊息
      title: ''
    }
  },
  methods: {
    add() {

      if (!this.title.trim()) {
        return alert('請輸入任務')
      }

      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false
      }

      this.addTodo(todoObj)
      this.title = ''
    }
  },
  props: ['addTodo'],
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>