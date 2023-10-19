// main.js

export default {
  template: `
<div>
  <main>
      <!-- 상품목록.. -->
      <div v-for="product in orderedAry">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="product" v-bind:src="product.image">
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <h1 v-text="product.title"></h1>
            <p v-html="product.description"></p>
            <p class="price">
              {{product.price | formatPrice}}
            </p>
            <button class="btn btn-primary btn-lg"
              v-on:click="addToCart(product)"
              v-if="canAddToCart(product)">장바구니 담기</button>
            <button disabled="true" class="btn btn-primary btn-lg"
              v-else >장바구니 담기</button>
            <span class="inventory-message"
                  v-if="product.availableInventory - cartCount(product.id) == 0">
              품절
            </span>
            <span class="inventory-message"
                  v-else-if="product.availableInventory - cartCount(product.id) < 5">
              {{product.availableInventory - cartCount(product.id)}}
            </span>
            <span class="inventory-message" v-else>지금 구매하세요.</span>
            <div class="rating">
              <span v-bind:class="{'rating-active': checkRating(n, product)}"
                    v-for="n in 5">☆</span>
            </div>
          </div> 
        </div> <!-- row 클래스 끝부분 -->
      </div> <!-- v-for 끝부분 -->
  </main>
</div>
  `,
  props: [],
  data: function(){
    return {
      products: [],
      cart: []
    }
  },
  computed: {
    orderedAry: function(){
      let productAry = this.products;
      let result = productAry.sort(function(a,b){
        // a - b 비교: 음수 => 오름차순 정렬. 양수 => 내림차순.

        // title 기준
        // if(a.title < b.title) return -1;
        // else return 1;

        // price 기준
        if(a.price < b.price) return 1;
        else return -1;
      });

      return result;
    }
  },
  methods: {
    cartItemCount(){
      //console.log(this.cart.length || '');
      this.$emit('cartItemCount',this.cart.length);
    },
    addToCart: function(product) {
      this.cart.push( product.id );
      this.cartItemCount();
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false: true;
    },
    submitForm() {
      alert('제출 완료');
    },
    // 상품별 장바구니 수량 계산
    cartCount(id){
      let count = 0;
      for(let i=0;i<this.cart.length;i++){
        if(this.cart[i] == id){
          count++;
        }
      }
      return count;
    },
    canAddToCart(product) {
      return product.availableInventory > this.cartCount(product.id);
    },
    checkRating(n, product){
      return product.rating >= n;
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
  created: function() {
    axios.get('./static/products.json')
      .then((response) => {
          this.products = response.data.products;
          console.log(this.products);
      });
  },
}