// app.js
import myBoardWrite from "./components/myBoardWrite.js"
import myHeader from "./components/myHeader.js"
import myBoardList from "./components/myBoardList.js"
import myBoardRead from "./components/myBoardRead.js"

//myBoardWrite.print();

// Root Component Template
const template = `
<div>
  <my-header></my-header>
  <my-board-list v-if="listOK" v-bind:obj="dataArray.board"
    v-on:board-write="boardWrite"></my-board-list>
  <my-board-read v-if="readOK"></my-board-read>
  <my-board-wirte v-if="writeOK"></my-board-wirte>
</div>
`;

new Vue({
  el: '#app',
  template: template,
  data: {
    listOK: false,
    readOK: false,
    writeOK: false,
    // board.json {board: [{},{},{}]}
    dataArray: {},
  },
  components: {
    'my-header': myHeader,
    'my-board-list': myBoardList,
    'my-board-read': myBoardRead,
    'my-board-wirte': myBoardWrite
  },
  methods: {
    // 목록화면 출력
    boardList(){
      this.listOK = true;
      this.readOK = false;
      this.writeOK = false;
    },
    // 작성화면 출럭
    boardWrite(){
      this.listOK = false;
      this.readOK = false;
      this.writeOK = true;
    },
    // 상세화면 출력
    boardRead(){
      this.listOK = false;
      this.readOK = true;
      this.writeOK = false;
    }
  },
  beforeCreate: function(){
    // console.log('beforeCreate');
    // console.log(this.dataArray);
  },
  created: function(){
    // board.json 데이터 목록 출력.
    fetch('./data/board.json')
    .then(resolve => resolve.json())
    .then(result => {
      this.dataArray = result;
      // 목록페이지 open.
      this.boardList();
    })
    .catch(err => console.log('parsing error: ',err));
  }
})

// **실행과정** //
// new Vue() => init(event hook: beforeCreate, Created) ...
// event hook : 각 단계마다 작업를 넣어주고 싶을때 사용