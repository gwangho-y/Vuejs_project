<template>
  <div>
    <span v-on:click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TodoFooter",

  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })

  }
}
</script>

<style scoped>

</style>
