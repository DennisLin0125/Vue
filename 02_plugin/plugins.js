export default {
  install(Vue) {
    // 全域過濾器
    Vue.filter("mySlice", function (value) {
      //只要前四位
      return value.slice(0, 4);
    });

    // 定義全局指令
    Vue.directive("fbind", {
      // 指令與元素綁定
      bind(element, binding) {
        element.value = binding.value;
      },

      // 指令所在元素插入頁面時
      inserted(element) {
        element.focus();
      },

      // 指令所在的模板重新解析時
      update(element, binding) {
        element.value = binding.value;
      },
    });

    // 定義混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200,
        };
      },
    });

    // 往原型放方法,VM和VC都可以用
    Vue.prototype.hello = () => {
      alert("你好啊!!");
    };
  },
};
