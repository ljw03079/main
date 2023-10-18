// myHeader.js

export default {
  template: `
  <div>
      <div class="navbar navbar-default">
        <div class="navbar-header">
          <h1>{{sitename}}</h1>
        </div>
        <div class="nav navbar-nav navbar-right cart">
          <button type="button" class="btn btn-default btn-lg" v-on:click="showCheckout">
            <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span> 체크아웃
          </button>
        </div>
      </div>
  </div>
  `,
  data: function(){
    return {
      sitename: "Vue.js 애완용품샵"
    }
  },
  props: ['cartItemCount'],
  methods: {
    showCheckout(){
      this.$emit('showCheckout')
    }
  }
}