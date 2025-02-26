<script setup>
import DataBinding from './components/DataBinding.vue'

const jsonData = {
  name: 'John Doe',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
}

</script>

<template>
  <DataBinding v-model:name="jsonData.name" v-model:items="jsonData.items"/>
</template>