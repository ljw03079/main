// myTodoList.js

export default {
  template: `
  <div>
    <ul id="myUL">
      <li v-for="item in obj" v-on:click="todoClick(item.no)" v-bind:class="item.check">
        {{item.title}} | {{item.dueDate}}
        <span class="close" v-on:click.stop="todoDelete(item.no)">\u00D7</span>
      </li>
    </ul>
    <span v-on:click="todoAdd" class="addBtn">등록화면</span>
  </div>
  `,
  props: ['obj'],
  methods: {
    todoAdd(){
      this.$emit('todo-add')
    },
    todoDelete(no){
      this.$emit('todo-delete', no)
    },
    todoClick(no){
      this.$emit('todo-click',no)
    }
  }
}