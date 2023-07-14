<template>
  <div>
<!--    name은 css 클래스 이름과 맞춰준다 -->
    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem,index)"></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{todoItem.item}}</span>
        <span class="checkBtn removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt "></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: "TodoList",
  methods: {
    removeTodo: function(todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index})
    },

    toggleComplete: function (todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index})
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



  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
