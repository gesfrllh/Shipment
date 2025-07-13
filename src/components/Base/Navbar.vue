<template>
  <nav class="bg-white shadow px-6 py-3 flex items-center justify-between">
    <div @click="goHome" class="text-lg font-bold cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300">
      <span v-if="route.params.id">
          <
      </span>
      <span v-else>
        🚚
      </span>
      Shipment Tracker
    </div>

    <slot />
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>
