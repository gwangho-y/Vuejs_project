<template>
  <div>
    <span v-on:click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>

export default {
  name: "TodoFooter",

  methods: {
    clearTodo: function () {
      localStorage.clear()
    }
  }
}
</script>

<style scoped>

</style>
