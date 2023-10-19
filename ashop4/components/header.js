// header.js

export default {
  template: `
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <router-link v-bind:to="{name: 'main'}"><h1>{{ sitename }}</h1></router-link>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <!-- <button type="button" class="btn btn-default btn-lg"
                v-on:click="showCheckout">
          <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span>
          체크아웃
        </button>
        -->
        <router-link tag="button" class="btn btn-default btn-lg"
                     v-bind:to="{name: 'form', params: {cnt: cartItemCount}}">
          <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span>
          체크아웃
        </router-link>
      </div>
    </div>
  </header>
  `,
  props: ['cartItemCount'],
  data: function(){
    return {
      sitename: 'Vue.js 애완용품샵'
    }
  },
  methods: {
    showCheckout(){

    }
  },
}