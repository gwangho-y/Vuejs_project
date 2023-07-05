<template>
  <div id="app">
    <TodoHeader/>

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
}
</script>

<style>

</style>
