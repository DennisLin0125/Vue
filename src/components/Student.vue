<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="student">
        <h2>學生姓名：{{ name }}</h2>
        <h2>學生性別：{{ sex }}</h2>
        <button @click="sendStudentName">把學生名給School元件</button>
    </div>
</template>


<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data() {
        return {
            name: '張三',
            sex: '男',
        }
    },
    mounted() {
        // console.log('Student',this.x)
    },
    methods: {
        sendStudentName() {
            // 觸發自定義綁定事件
            this.$bus.$emit('hello', this.name)
        }
    },
}
</script>

<style scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>
