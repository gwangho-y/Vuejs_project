<template>
  <div id="app">
    <TodoHeader/>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"/>
    <todo-footer v-on:clearAll="clearAllItems"/>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: {
     TodoHeader,
     TodoFooter,
     TodoInput,
     TodoList
  }
  ,
  data: function () {
    return {
      todoItems: []
    }
  },
  methods : {
    addOneItem(todoItem) {
      const obj = { completed: false, item: todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },

    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      // splice와 slice의 차이점은 splice는 원본 배열을 건드리지만 slice는 건드리지 않는다
      this.todoItems.splice(index,1)
    },

    toggleOneItem(todoItem, index) {
      // 여기서 TodoList 프롭스로 접근된 데이터를 다시 위로 받아서 바꾸는 것은 좋지 않다고 한다. 이걸 안티패턴이라고 하는데 왜 안 좋은거지?
      // 컴포넌트가 컨테이너의 성격을 갖고 있기 때문에 보통 TodoItems에 접근해서 조작하는게 훨씬 좋다.
      this.todoItems[index].completed = !this.todoItems[index].completed
        // 로컬 스토리지 데이터 갱신하는 부분
      // 로컬 스토리지가 업데이트가 구문이 없어서 지우고 새로 만들어줘야한다.
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems () {
      localStorage.clear()
      this.todoItems=[]
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i< localStorage.length; i++) {
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
