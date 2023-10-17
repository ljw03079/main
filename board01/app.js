// app.js

const myHeader = {
  template: ``,
  data: function(){
    return {

    }
  },
  methods: {

  }
}

// 목록
const myBoardList = {

}

// 상세
const myBoardRead = {

}

myBoardWrite.print();

// Root Component Template
const template = `
<div>
  <my-header></my-header>
  <my-board-list></my-board-list>
  <my-board-read></my-board-read>
  <my-board-wirte></my-board-wirte>
</div>
`;

new Vue({
  el: '#app',
  template: template,
  components: {
    'my-header': myHeader,
    'my-board-list': myBoardList,
    'my-board-read': myBoardRead,
    'my-board-wirte': myBoardWrite
  }
})