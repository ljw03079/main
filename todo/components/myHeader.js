// myHeader.js

export default {
  template: `
  <div>
    <h3>Todo List</h3>
    <input type="file" v-on:change="loadData">
  </div>
  `,
  methods: {
    loadData(e) {
      console.log(e.target.files[0]);
      let file = e.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("loadend",()=>{
        // json문자열 => object
        let jsonData = JSON.parse(reader.result)
        console.log(jsonData);
        // dataArray에 값 저장
        this.$emit('load-data',jsonData);
      })
      reader.readAsText(file);
    }
  }
}