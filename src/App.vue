<template>
  <BaseNotify ref="notifier" />
  <RouterView />
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import BaseNotify from './components/Base/Notify.vue'

const notifier = ref()

provide('showNotify', (opts: {
  type?: string
  title?: string
  text: string
}) => {
  notifier.value?.showNotify(opts)
})
</script>
