// app.js
import MyHeader from './components/header.js';
import MyForm from './components/form.js';
import MyMain from './components/main.js';

const template = `
<div>
  <my-header v-on:showCheckout="showCheckout"
             v-on:showList="showList"
             v-bind:cartItemCount="count"></my-header>
  <my-main v-if="myMain" v-on:cartItemCount="cartItemCount"></my-main>
  <my-form v-else v-on:showList="showList"></my-form>
</div>
`;

new Vue({
  el: '#app',
  template,
  data: {
    myMain: true,
    myForm: false,
    cartCount: 0
  },
  computed: {
    count(){
      return this.cartCount || ''; 
    }
  },
  components: {
    'my-header': MyHeader,
    'my-form': MyForm,
    'my-main': MyMain
  },
  methods: {
    showCheckout(){
      this.myMain = false,
      this.myForm = true
    },
    showList(count){
      this.myMain = true,
      this.myForm = false;
      this.cartCount = count;
    },
    cartItemCount(count){
      console.log(count);
      this.cartCount = count;
    }
  }
})