// app.js
import myHeader from './components/myHeader.js';
import myProductList from './components/myProductList.js';
import myProductOrder from './components/myProductOrder.js';

// Root Component Template
const template = `
<div>
  <header>
    <my-header v-bind:sitename="sitename"
              v-bind:cartItemCount="cartItemCount"
              v-on:showCheckout="showCheckout"></my-header>
  </header>
  <main>
    <div class="row">
      <my-product-list v-if="showProduct"
                       v-bind:product="product"
                       v-bind:canAddToCart="canAddToCart"
                       v-on:addToCart="addToCart"></my-product-list>
      <my-product-order v-else
                        v-on:submitForm="submitForm"
                        v-bind:states="states"
                        v-bind:order="order"></my-product-order>
    </div>
  </main>
</div>
`;

var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
  el: '#app',
  template,
  data: {
    sitename: "Vue.js 애완용품샵",
    showProduct: true,
    a: false,
    states: {
      AL: '알라바마',
      AK: '알래스카',
      AR: '애리조나',
      CA: '캘리포니아',
      NV: '네바다'
    },
    order: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      state: '',
      method: '자택 주소',
      business: '직장 주소',
      home: '자택 주소',
      gift:'선물로 보내기',
      sendGift: '선물로 보내기',
      dontSendGift: '선물로 보내기 않기'
    },
    product: {
      id: 1001,
      title: "고양이 사료, 25파운드",
      description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
      price: 2000,
      image: "assets/images/product-fullsize.png",
      availableInventory: 5
    },
    cart: [],
  },
  components: {
    'my-header': myHeader,
    'my-product-list': myProductList,
    'my-product-order': myProductOrder
  },
  methods: {
    addToCart: function() {
      this.cart.push( this.product.id );
    },
    showCheckout(){
      this.showProduct = this.showProduct ? false: true;
    },
    submitForm(firstName,lastName,address,city,zip,state,method,gift) {
      alert('제출 완료');
      this.order = {firstName, lastName, address, city, zip, state, method, gift};
      console.log(this.order);
      this.showCheckout();
      this.order = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '자택 주소',
        business: '직장 주소',
        home: '자택 주소',
        gift:'선물로 보내기',
        sendGift: '선물로 보내기',
        dontSendGift: '선물로 보내기 않기'
      }
    }
  },
  computed: {
    cartItemCount(){
      return this.cart.length || '';
    },
    canAddToCart() {
      return this.product.availableInventory > this.cartItemCount;
    }
  },
  beforeCreate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeCreate");
    }
  },
  created: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("created");
    }
  },
  beforeMount: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeMount");
    }
  },
  mounted:  function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("mounted");
    }
  },
  beforeUpdate:  function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeUpdate");
    }
  },
  updated:  function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("updated");
    }
  },
  beforeDestroyed:  function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeDestroyed ");
    }
  },
  destroyed:  function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("destroyed");
    }
  }
});