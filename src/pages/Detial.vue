<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul>
    <li>消息編號: {{ id }}</li>
    <li>消息標題: {{ title }}</li>
  </ul>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Detial',
    mounted(){
        console.log(this.$route)
    },
    props: ['id','title']
}
</script>

<style>

</style>