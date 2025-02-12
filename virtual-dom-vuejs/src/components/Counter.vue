<template>
  <div class="counter">
    <h2>Counter: {{ count }}</h2>
    //TODO
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    //TODO

    const increment = () => {
      count.value++;
    };

    return { count, increment };
  },
};
</script>

<style scoped>
.counter {
  margin-top: 20px;
}
button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
