<template>
  <div>
    <ul>
      <li v-for="todoitem in todoItems"> {{todoitem}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "TodoList",
  data: function () {
    return {
      todoItems: []
    }
  },
  created() {

    localStorage[Symbol.iterator] = function (){
      let cur = 1
      const max = this.length


      return {
        next() {
          const value = localStorage.key(cur++) === 'loglevel:webpack-dev-server'?
          return { value:  ===  , done: cur > max + 1}
        }
      }
    }

    for (const i of localStorage) {
      console.log(i)
    }

    if (localStorage.length > 0) {
      for (var i = 0; i< localStorage.length; i++) {
        if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue
        this.todoItems.push(localStorage.key(i))
      }
    }
    console.log(this.todoItems)
  }
}



</script>

<style scoped>

</style>
