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
  props: ['product','canAddToCart'],
  methods: {
    addToCart(){
      this.$emit('addToCart')
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