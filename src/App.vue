<template>
  <div>
    <School/>
    <hr>
    <Student/>
  </div>
</template>

<script>
import School from './componets/School.vue';
import Student from './componets/Student.vue';


export default {
  name: 'App',
  components: {
    Student,
    School
  },
}
</script>
