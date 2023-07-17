
<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  // store에 있는 메서드를 computed에서 계산을 마쳐서 가지고 올 수 있다.
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
  }
}

</script>

<style scoped>

</style>
