// myProductList.js

export default {
  template: `
  <div>
      <div class="col-md-2 col-md-offset-1">
        <figure>
          <img v-bind:src="product.image">
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-2 description">
        <h1 v-text="product.title"></h1>
        <p v-html="product.description"></p>
        <p class="price">
          {{product.price | formatPrice}}
        </p>
        <button class="btn btn-primary btn-lg"
          v-on:click="addToCart"
          v-if="canAddToCart">장바구니 담기</button>
        <button disabled="true" class="btn btn-primary btn-lg"
          v-else >장바구니 담기</button>
      </div>
  </div>
  `,
  data: function(){
    return {
      product: {
        id: 1001,
        title: "고양이 사료, 25파운드",
        description: "당신의 고양이를 위한 <em>거부할 수 없는</em>, 유기농 25파운드 사료입니다.",
        price: 2000,
        image: "assets/images/product-fullsize.png",
        availableInventory: 5
      },
      cart: []
    }
  },
  props: ['canAddToCart'],
  computed: {
    cartItemCount(){
      return this.cart.length || '';
    },
  },
  methods: {
    addToCart(){
      return this.product.availableInventory > this.cartItemCount;
    }
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price)) { return ""; }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index+3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2);
      }
    }
  },
}