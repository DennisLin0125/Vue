<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 @click="showName">學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
  </div>
</template>

<script>
import { mixin,mixin2 } from '@/mixin';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      name: "Dennis",
      sex: "男",
    };
  },
  mixins: [mixin,mixin2]
};
</script>
