// app.js
import MyHeader from './components/header.js';
import MyForm from './components/form.js';
import MyMain from './components/main.js';

const template = `
<div>
  <my-header 
             v-on:showCheckout="showCheckout"
             v-on:showList="showList"></my-header>
  <my-main v-if="myMain"></my-main>
  <my-form v-else></my-form>
</div>
`;

new Vue({
  el: '#app',
  template,
  data: {
    myMain: true,
    myForm: false,
    cart: []
  },
  computed: {

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
    showList(){
      this.myMain = true,
      this.myForm = false
    }
  }
})