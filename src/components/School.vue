<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="school">
        <h2>學校名稱：{{ name }}</h2>
        <h2>學校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubSub from 'pubsub-js'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
        return {
            name: '台灣大學',
            address: '台北',
        }
    },
    methods: {
        mySubscriber(msg, data) {
            console.log(msg, data);
        }
    },
    mounted() {
        this.token = pubSub.subscribe('hello',this.mySubscriber)
    },
    beforeDestroy() {
        pubSub.unsubscribe(this.token);
    },
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>