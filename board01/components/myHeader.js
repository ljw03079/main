// myHearder.js

export default {
  template: `
  <div>
    <h3>간단한 게시판</h3>
    <p>게시판의 데이터는 board.json 활용해서 초기화.</p>
    <input type="file" v-on:change="loadData">
  </div>
  `,
  methods: {
    loadData(e){
      //console.log(e.target.files[0]);
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("loadend",()=>{
        // reader.result에 블롭의 내용이 형식화 배열로 들어있음
        // json문자열 => JSON.parse() => object.
        let jsonData = JSON.parse(reader.result)
        console.log(jsonData);
        // dataArray에 값을 저장
        this.$emit('load-data',jsonData);
      })
      reader.readAsText(file);
    }
  }
}