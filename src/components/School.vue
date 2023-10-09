<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="school">
        <h2>學校名稱：{{ name }}</h2>
        <h2>學校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
        return {
            name: '台灣大學',
            address: '台北',
        }
    },
    mounted() {
        // 綁定自定義事件
        this.$bus.$on('hello', (data) => {
            console.log('我是School組件，收到了數據', data)
        })
    },
    beforeDestroy() {
        // 移除綁定自定義
        this.$bus.$off('hello')
    },
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>