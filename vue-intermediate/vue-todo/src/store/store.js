import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = []
    if (localStorage.length > 0) {
      for (let i = 0; i< localStorage.length; i++) {
        if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    return arr
  }
}
export const store = new Vuex.Store({
  state : {
    todoItems: storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
    },
    removeOneItem(state, {todoItem, index}) {
      console.log(todoItem, index)
      localStorage.removeItem(todoItem.item)
      // splice와 slice의 차이점은 splice는 원본 배열을 건드리지만 slice는 건드리지 않는다
      state.todoItems.splice(index,1)
    },
    toggleOneItem(state, {todoItem, index}) {
      state.todoItems[index].completed = !state.todoItems[index].completed
      // 로컬 스토리지 데이터 갱신하는 부분
      // 로컬 스토리지가 업데이트가 구문이 없어서 지우고 새로 만들어줘야한다.
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems (state) {
      localStorage.clear()
      state.todoItems=[]
    }
  }
})
