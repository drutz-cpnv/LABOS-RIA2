<script setup>
const name = defineModel('name', { default: "John Doe" })
const items = defineModel('items', { default: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] })

</script>

<template>
  <h1>Vue Data Binding</h1>
  <div id="name-container">
    <p>{{ name }}</p>
  </div>

  <div id="items-container">
    <ul id="items-list">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>

</template>
