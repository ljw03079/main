// app.js

import router from './router/router.js';

const template = `
<div>
  <router-view></router-view>
</div>
`;

new Vue({
  el: '#app',
  template,
  router
})