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
      this.$emit('clearAll')
    }
  }
}
</script>

<style scoped>

</style>
