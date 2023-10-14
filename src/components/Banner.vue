<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">後退</button>
      <button @click="forward">前進</button>
      <button @click="go">測試一下GO</button>
    </div>
  </div>
</template>

<script>
export default {
     // eslint-disable-next-line vue/multi-word-component-names
    name: 'Banner',
    methods: {
      back() {
        this.$router.back();
      },
      forward() {
        this.$router.forward();
      },
      go() {
        this.$router.go(3);
      }
    }
};
</script>

<style>
</style>