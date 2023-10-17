// myTodoAdd.js

export default {
  template: `
  <div>
    <div id="myDIV" class="header">
      <h2 style="margin:5px">My To Do List</h2>
      <input v-model="title" class="addInput" type="text" id="myInput" placeholder="Title...">
      <input v-model="dueDate" class="addInput" type="text" placeholder="DueData...">
      </div>
      <span v-on:click="todoSave" class="addBtn">Add</span>
      <span v-on:click="todoList" class="addBtn">List</span>
  </div>
  `,
  data: function(){
    return{
      title: '',
      dueDate: ''
    }
  },
  methods: {
    todoSave(){
      if(this.title != '' && this.dueDate != ''){
        this.$emit('todo-save',this.title,this.dueDate)
      }
    },
    todoList(){
      this.$emit('todo-list')
    }
  }
}