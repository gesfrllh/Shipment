<!-- src/components/BaseNotify.vue -->
<template>
  <Transition name="fade">
    <div
      v-if="visible"
      :class="['fixed top-5 right-5 px-4 py-3 rounded shadow text-white w-72', bgColor]"
    >
      <strong v-if="title" class="block text-sm font-bold mb-1">{{ title }}</strong>
      <p class="text-sm">{{ message }}</p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')
const title = ref('')
const bgColor = ref('bg-gray-700')

interface NotifyOptions {
  type?: 'success' | 'error' | 'info' | 'warning'
  title?: string
  text: string
}

function showNotify({ type = 'info', title: t = '', text }: NotifyOptions) {
  title.value = t
  message.value = text
  bgColor.value = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-600',
  }[type] || 'bg-gray-700'

  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, 3000)
}

defineExpose({ showNotify })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
