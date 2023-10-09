<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
      <span v-show="!todoObj.isEdit">
        {{ todoObj.title }}
      </span>
      <input 
        type="text" 
        v-show="todoObj.isEdit" 
        :value="todoObj.title" 
        @blur="handleBlur(todoObj,$event)"
        ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit(todoObj)">編輯</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todoObj'],
  methods: {
    handleCheck(id) {
      console.log('獲取所選到的id:', id)
      // this.checkTodo(id)
      // 觸發綁定事件
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm('確定刪除嗎?')) {
        console.log('獲取想刪除的id:', id)
        // this.deleteTodo(id)
        // 觸發綁定事件
        this.$bus.$emit('deleteTodo', id)
      }
    },
    handleEdit(todoObj) {
      if (Object.prototype.hasOwnProperty.call(todoObj, 'isEdit')) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, 'isEdit', true);
      }
      // 等DOM都更新完,再去呼叫此函數來,獲取焦點
      this.$nextTick(function(){
        this.$refs.inputTitle.focus() 
      })
    },
    // 失去消息回調
    handleBlur(todoObj,event) {
      todoObj.isEdit = false
      if (!event.target.value) {
        return alert('輸入不能為空')
      }
      this.$bus.$emit('updateTodo',todoObj.id,event.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>