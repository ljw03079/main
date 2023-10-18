// app.js

var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
  el: '#app',
  data: {
    sitename: "Vue.js 애완용품샵",
    product: {
      id: 1001,
      title: "고양이 사료, 25파운드",
      description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
      price: 2000,
      image: "assets/images/product-fullsize.png",
    },
  },
  filters: {
    // 200000 => $2,000.00
    formatPrice(price) {
      if (!parseInt(price)) { return ""; }
      if (price > 99999) {
        // toFixed(2) : 소수점 둘째자리까지 보여줌
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },
  methods: {
    showCheckout(){
      console.log('showCheckout');
    }
  },
  computed: {
    cartItemCount: function(){
      return 0;
    }
  },
  beforeCreate: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeCreate");
    }
  },
  created: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("created");
    }
  },
  beforeMount: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeMount");
    }
  },
  mounted: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("mounted");
    }
  },
  // 데이터 속성을 바꿀 때 event hook
  // 변경 전
  beforeUpdate: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeUpdate");
    }
  },
  // 변경 후
  updated: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("updated");
    }
  },
  // 인스턴스 종료할 때 event hook
  beforeDestroy: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeDestroy ");
    }
  },
  destroyed: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("destroyed");
    }
  }
});