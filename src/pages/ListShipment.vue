<template>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Shipment List</h2>
    <BaseTable
      :columns="columns"
      :data="shipments"
      :has-actions="true"
      :loading="loading"
    >
      <template #details="{ item }">
        <button
          @click="$router.push(`/shipments/${item.id}`)"
          class="text-blue-600 hover:underline"
        >
          View Details
        </button>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useShipmentStore } from '../store/shipment'
import { storeToRefs } from 'pinia'
import { useNotify } from '../composables/useNotify'
import { getErrorMessage } from '../utils/getErrorMessage'
import BaseTable from '../components/Base/Table.vue'

const store = useShipmentStore()
const { shipments, loading, message } = storeToRefs(store)
const { showNotify } = useNotify()

onMounted(async () => {
  await store.fetchShipments()

  if (message.value?.type === 'error') {
    showNotify({
      type: 'error',
      title: 'Error',
      text: getErrorMessage(message.value.text) || 'Failed to fetch shipments'
    })
  }
})

const columns = [
  { label: 'Shipment Name', key: 'name' },
  { label: 'Origin', key: 'origin' },
  { label: 'Destination', key: 'destination' },
  { label: 'Status', key: 'status' },
]
</script>
