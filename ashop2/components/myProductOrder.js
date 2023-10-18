// myProductOrder.js

export default {
  template: `
  <div>
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
  props: ['order','states'],
  methods: {
    submitForm(){
      this.$emit('submitForm',
      this.order.firstName,
      this.order.lastName,
      this.order.address,
      this.order.city,
      this.order.zip,
      this.order.state,
      this.order.method,
      this.order.gift)
    }
  }
}