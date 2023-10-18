// contact.js
import contactlist from '../assets/contactlist.js';

const template = `
<div>
  <h1>Contact</h1>
  <div class="wrapper">
    <div class="box" v-for="c in contacts">
      <router-link v-bind:to='"/contact/"+c.no'>{{c.name}}</router-link>
    </div>
  </div>
  <router-view></router-view>
</div>
`;
// url pattern + c.no => 복합적인 형태 : v-bind:to 사용
// 문자열 : to 사용
export default {
  template,
  data: function(){
    return {
      contacts: contactlist.contacts
    }
  }
}