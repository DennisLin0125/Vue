<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">點我輸出上方DOM</button>
    <School ref="sch"/>
  </div>
</template>

<script>
  import School from './componets/School.vue';
  export default {
    name: 'App',
    data() {
      return {
        msg: '歡迎Dennis學習Vue!!!!'
      }
    },
    components: {
      School
    },
    methods: {
      showDOM() {
        console.log(this.$refs.title)  // 真實DOM元素
        console.log(this.$refs.btn)    // 真實DOM元素
        console.log(this.$refs.sch)    // 獲取School組件的實例對象(VueComponent)
      }
    }
  }
</script>
