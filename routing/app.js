// app.js
import router from './router/router.js';

// uri 와 component 매칭 => router
const template = `
<div>
  <div class="header">
    <h1 class="headerText">(주)OpenSSG</h1>
    <nav>
      <ul>
        <li><router-link v-bind:to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'about'}">About</router-link></li>
        <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
      </ul>
    </nav>
  </div>
  <br>
  <div class="container">
    <router-view></router-view>
  </div>
</div>
`;
// v-bind 줄임표 => :
new Vue({
  el: '#app',
  template,
  router
})