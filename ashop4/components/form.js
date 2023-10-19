// form.js
import MyHeader from './header.js';

export default {
  template: `
<div>
  <my-header v-bind:cartItemCount="cartItemCount"></my-header>
  <div class="col-md-10 col-md-offset-1">
    <div class="panel panel-info">
      <div class="panel-heading">애완용품샵 체크아웃</div>
      <div class="panel-body">
        <div class="form-group">
          <div class="col-md-12">
            <h4><strong>정보를 입력하세요</strong></h4>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6">
            <strong>이름:</strong>
            <input v-model.trim="order.firstName" class="form-control" />
          </div>
          <div class="col-md-6">
            <strong>성:</strong>
            <input v-model.trim="order.lastName" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12"><strong>주소:</strong></div>
          <div class="col-md-12">
            <input v-model.trim="order.address" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12"><strong>도시:</strong></div>
          <div class="col-md-12">
            <input v-model.trim="order.city" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-2">
            <strong>주:</strong>
            <select v-model="order.state" class="form-control">
              <option disabled value="">주</option>
              <option v-for="(state, key) in states" v-bind:value="state">
                {{key}}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6 col-md-offset-4">
            <strong>우편번호:</strong>
            <input v-model.number="order.zip"
              class="form-control"
              type="number"/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6 boxes">
            <input type="checkbox"
              id="gift" value="true"
              v-bind:true-value="order.sendGift"
              v-bind:false-value="order.dontSendGift"
              v-model="order.gift">
            <label for="checkbox">선물로 보내기?</label>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6 boxes">
            <input type="radio"
              id="home"
              v-bind:value="order.home"
              v-model="order.method">
            <label for="home">자택</label>
            <input type="radio"
              id="business"
              v-bind:value="order.business"
              v-model="order.method">
            <label for="business">직장</label>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-6">
            <button type="submit" class="btn btn-primary submit" v-on:click="submitForm">주문하기</button>
          </div>
        </div>
        <div class="col-md-12 verify">
          <pre>
            이름: {{order.firstName}}
            성: {{order.lastName}}
            주소: {{order.address}}
            도시: {{order.city}}
            우편번호: {{order.zip}}
            주: {{order.state}}
            배송지: {{order.method}}
            선물: {{order.gift}}
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  data: function(){
    return {
      cartItemCount: 0,
      states: {
        AL: '알라바마',
        AK: '알래스카',
        AR: '애리조나',
        CA: '캘리포니아',
        NV: '네바다'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: '자택 주소',
        business: '직장 주소',
        home: '자택 주소',
        gift:'선물로 보내기',
        sendGift: '선물로 보내기',
        dontSendGift: '선물로 보내기 않기'
      }
    }
  },
  components: {
    'my-header': MyHeader
  },
  methods: {
    submitForm(){
      alert("제출완료")
    }
  },
  created: function(){
    this.cartItemCount = this.$route.params.cnt;
  }
}