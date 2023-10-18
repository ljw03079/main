// contactByNo.js
import contactlist from '../assets/contactlist.js';

const template = `
<div>
  <h1>연락처 상세</h1>
  <hr class="divider"></hr>
  <div>
    <table class="detail table table-bordered">
      <tbody>
        <tr class="active">
          <td>일련번호</td>
          <td>{{contact.no}}</td>
        </tr>
        <tr class="active">
          <td>이름</td>
          <td>{{contact.name}}</td>
        </tr>
        <tr class="active">
          <td>전화</td>
          <td>{{contact.tel}}</td>
        </tr>
        <tr class="active">
          <td>주소</td>
          <td>{{contact.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export default {
  template,
  data: function(){
    return{
      //contact: {no: 10, name: 'Hong', tel: '010-1111', address: 'Daegu'}
      contacts: contactlist.contacts,
      no: 0
    }
  },
  computed: {
    contact(){
      // this: 이 component를 가리킴
      console.log(this.$route.params.no);
      this.no = this.$route.params.no;
      // filter는 반환하는 값의 타입이 Array
      var ary = this.contacts.filter(contact => {
        if(contact.no == this.no){
          // true이면 해당 값을 배열에 담음
          return true;
        }
      })
      if(ary.length > 0) return ary[0];
      else return {};
    }
  }
}