<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 @click="showName">學校名稱: {{ name }}</h2>
    <h2>學生地址: {{ address }}</h2>
  </div>
</template>

<script>
import { mixin,mixin2 } from '@/mixin';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name: "台灣大學",
      address: "台北",
    };
  },
  mixins: [mixin,mixin2]
};
</script>
