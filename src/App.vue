<template>
  <div>
    <testVm/>
    <testVm2/>
  </div>
</template>

<script>
import testVm from './components/testVm.vue'
import testVm2 from './components/testVm2.vue'
export default {
  name: 'App',
  components: {testVm,testVm2}
}
</script>

