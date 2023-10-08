<template>
  <div>
    <Student name="Dennis" sex="男" v-bind:age="18" />
  </div>
</template>

<script>
import Student from './componets/Student.vue'
export default {
  name: 'App',
  components: {
    Student
  },
}
</script>
