<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 第一種寫法:跳轉路由並協帶params參數 -->
        <!-- <router-link :to="`/home/message/detial/${item.id}/${item.title}`">{{ item.title }}</router-link> -->

        <!-- 第二種寫法 -->
        <router-link
          :to="{
            name: 'embedURL',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "embedURL",
        query: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replaceShow(item) {
      this.$router.replace({
        name: "embedURL",
        query: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
};
</script>

