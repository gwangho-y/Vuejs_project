const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem }
  localStorage.setItem(todoItem, JSON.stringify(obj))
  state.todoItems.push(obj)
}
const removeOneItem = (state, {todoItem, index}) => {
  console.log(todoItem, index)
  localStorage.removeItem(todoItem.item)
  // splice와 slice의 차이점은 splice는 원본 배열을 건드리지만 slice는 건드리지 않는다
  state.todoItems.splice(index,1)
}
const toggleOneItem = (state, {todoItem, index}) => {
  state.todoItems[index].completed = !state.todoItems[index].completed
  // 로컬 스토리지 데이터 갱신하는 부분
  // 로컬 스토리지가 업데이트가 구문이 없어서 지우고 새로 만들어줘야한다.
  localStorage.removeItem(todoItem.item)
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
}
const clearAllItems = (state) => {
  localStorage.clear()
  state.todoItems=[]
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }
