<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="demo">
        <h2>學校名稱: {{name}}</h2>
        <h2>學校地址: {{address}}</h2>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'School',
        data() {
            return {
                name: '台灣大學',
                address: '台北'
            }
        },
    }
</script>

<style>
    .demo {
        background-color: gray;
    }
</style>