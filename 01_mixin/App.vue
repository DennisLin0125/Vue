<template>
  <div>
    <Student/>
    <hr>
    <School/>
  </div>
</template>

<script>
import Student from './componets/Student.vue';
import School from './componets/School.vue';

export default {
  name: 'App',
  components: {
    Student,
    School
  },
}
</script>
