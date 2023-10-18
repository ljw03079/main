// app.js
import myHeader from './components/myHeader.js';
import myProductList from './components/myProductList.js';
import myProductOrder from './components/myProductOrder.js';

// Root Component Template
const template = `
<div>
  <header>
    <my-header v-bind:cartItemCount="cartItemCount"
               v-on:showCheckout="showCheckout"></my-header>
  </header>
  <main>
    <div class="row">
      <my-product-list v-if="showProduct"
                       v-on:addToCart="addToCart"
                       v-bind:canAddToCart="canAddToCart"
      ></my-product-list>
      <my-product-order v-else
                        v-on:submitForm="submitForm"
      ></my-product-order>
    </div>
  </main>
</div>
`;

var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
  el: '#app',
  template,
  data: {
    showProduct: true,
    a: false,
    cart: []
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
    submitForm() {
      alert('제출 완료');
      this.showCheckout();
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