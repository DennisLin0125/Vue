<template>
  <div>
    <testVm/>
    <testVm2/>
    <testVm3/>
  </div>
</template>

<script>
import testVm from './components/testVm.vue'
import testVm2 from './components/testVm2.vue'
import testVm3 from './components/testVm3.vue'

export default {
  name: 'App',
  components: {testVm,testVm2,testVm3}
}
</script>

