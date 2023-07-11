<template>
  <div id="app">
    <TodoHeader/>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"/>
    <todo-footer/>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
    'TodoHeader' : TodoHeader,
    'TodoFooter': TodoFooter,
    'TodoInput' : TodoInput,
    'TodoList': TodoList
  }
  ,
  data: function () {
    return {
      todoItems: []
    }
  },
  methods : {
    addOneItem: function (todoItem) {
      var obj = { completed: false, item: todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },

    removeOneItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item)
      // splice와 slice의 차이점은 splice는 원본 배열을 건드리지만 slice는 건드리지 않는다
      this.todoItems.splice(index,1)
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i< localStorage.length; i++) {
        if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}

</style>
