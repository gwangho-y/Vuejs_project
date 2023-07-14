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
      this.$store.commit('clearAllItems' )
    }
  }
}
</script>

<style scoped>

</style>
