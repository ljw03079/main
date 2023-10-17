// app.js
import myBoardWrite from "./components/myBoardWrite.js"
import myHeader from "./components/myHeader.js"
import myBoardList from "./components/myBoardList.js"
import myBoardRead from "./components/myBoardRead.js"

//myBoardWrite.print();

// Root Component Template
const template = `
<div>
  <my-header
      v-on:load-data="loadData"></my-header>
  <my-board-list v-if="listOK" v-bind:obj="dataArray.board"
      v-on:board-write="boardWrite"
      v-on:board-delete="boardDelete"
      v-on:board-read="boardRead"
    ></my-board-list>
  <my-board-read v-if="readOK" v-bind:obj="data"
      v-on:board-list="boardList"></my-board-read>
  <my-board-wirte v-if="writeOK"
      v-on:board-list="boardList"
      v-on:board-save="boardSave"
    ></my-board-wirte>
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
    data: []
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
    boardRead(board){
      this.listOK = false;
      this.data = board;
      board.view++;
      this.readOK = true;
      this.writeOK = false;
    },
    // 글저장 실행
    boardSave(title, content){
      // no=max+1, view=0
      let no = 1;
      let view = 0;
      if(this.dataArray.board.length != 0){
        let idx = this.dataArray.board.length -1;
        no = Number(this.dataArray.board[idx].no) + 1;
      }

      let board = {no, title, content, view}
      this.dataArray.board.push(board);

      // 목록화면 실행.
      this.boardList();
    },
    // 글삭제 실행
    boardDelete(no){
      // no 삭제 후 dataArray에 바뀐 값을 저장.
      let resultAry = {board: []};
      /*
      for(let i=0;i<this.dataArray.board.length;i++){
        if(this.dataArray.board[i].no != no){
          resultAry.board.push(this.dataArray.board[i]);
        }
      }
      this.dataArray = resultAry;
      */
      this.dataArray.board.filter(item => {
        if(item.no != no){
          resultAry.board.push(item);
        }
      })
      this.dataArray = resultAry;
    },
    loadData(data){
      this.dataArray = data;
      this.boardList();
    }
  },
  beforeCreate: function(){
    // console.log('beforeCreate');
    // console.log(this.dataArray);
  },
  // created: function(){
  //   // board.json 데이터 목록 출력.
  //   fetch('./data/board.json')
  //   .then(resolve => resolve.json())
  //   .then(result => {
  //     this.dataArray = result;
  //     // 목록페이지 open.
  //     this.boardList();
  //   })
  //   .catch(err => console.log('parsing error: ',err));
  // }
})

// **실행과정** //
// new Vue() => init(event hook: beforeCreate, Created) ...
// event hook : 각 단계마다 작업를 넣어주고 싶을때 사용