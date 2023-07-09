<template>
  <div>
    <ul>
      <li class="shadow" v-for="(todoItem, index) in todoItems">
        <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>
        {{todoItem}}
        <span class="checkBtn removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt "></i>
        </span>
      </li>
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
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem)
      // splice와 slice의 차이점은 splice는 원본 배열을 건드리지만 slice는 건드리지 않는다
      this.todoItems.splice(index,1)
    },
    toggleComplete: function () {

    }

  },
  created() {

    // localStorage[Symbol.iterator] = function (){
    //   let cur = 1
    //   const max = this.length
    //
    //
    //   return {
    //     next() {
    //       const value = localStorage.key(cur++) === 'loglevel:webpack-dev-server'?
    //       return { value:  ===  , done: cur > max + 1}
    //     }
    //   }
    // }

    // for (const i of localStorage) {
    //   console.log(i)
    // }

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

  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #de4343;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343
  }

</style>
