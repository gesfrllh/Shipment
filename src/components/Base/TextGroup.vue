<template>
  <div class="flex flex-col">
    <p class="font-semibold">{{ title }}</p>
    <p class="text-gray-500 uppercase">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: undefined
  },
  text: {
    type: String,
    default: undefined
  }
})
</script>