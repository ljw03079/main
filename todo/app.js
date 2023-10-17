// app.js
import myHeader from "./components/myHeader.js"
import myTodoAdd from "./components/myTodoAdd.js"
import myTodoList from "./components/myTodoList.js"

//Root Component Template
const template = `
  <div>
    <my-header v-on:load-data="loadData"></my-header>
    <my-todo-add v-if="addOK"
      v-on:todo-save="todoSave"
      v-on:todo-list="todoList"
    ></my-todo-add>
    <my-todo-list v-if="listOK" v-bind:obj="dataArray.todo"
      v-on:todo-add="todoAdd"
      v-on:todo-delete="todoDelete"
      v-on:todo-click="todoClick"
    ></my-todo-list>
  </div>
`;

new Vue({
  el: '#app',
  template: template,
  data: {
    addOK: false,
    listOK: false,
    dataArray: {},
    data: []
  },
  components: {
    'my-header': myHeader,
    'my-todo-add': myTodoAdd,
    'my-todo-list': myTodoList
  },
  methods: {
    // 등록화면 출력
    todoAdd(){
      this.addOK = true,
      this.listOK = false
    },
    //목록화면 출력
    todoList(){
      this.addOK = false,
      this.listOK = true
    },
    // 파일로 데이터 받아오기
    loadData(data){
      this.dataArray = data;
      this.todoList();
    },
    // 할 일 삭제
    todoDelete(no, e){
      let resultAry = {todo: []};
      this.dataArray.todo.filter(item => {
        if(item.no != no){
          resultAry.todo.push(item);
        }
      })
      this.dataArray = resultAry;
    },
    // 할 일 체크
    todoClick(no){
      this.dataArray.todo.filter(item => {
        if(item.no == no){
          if(item.check == ''){
            item.check = "checked"
          }else{
            item.check = ''
          }
        }
      })
    },
    // 할 일 저장
    todoSave(title, dueDate){
      let no = 1;
      if(this.dataArray.todo.length != 0){
        let idx = this.dataArray.todo.length -1;
        no = Number(this.dataArray.todo[idx].no) + 1;
      }

      let data = {no, title, dueDate}
      this.dataArray.todo.push(data);

      // 목록화면 실행
      this.todoList();
    }
  }
})