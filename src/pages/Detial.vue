<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul>
    <li>消息編號: {{ $route.params.id }}</li>
    <li>消息標題: {{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Detial',
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style>

</style>