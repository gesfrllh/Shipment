<template>
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-4">Shipment List</h2>
    <div v-if="loading">Loading...</div>
    <BaseTable :columns="columns" :data="shipments" :has-actions="true" :loading="loading">
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
import BaseTable from '../components/Base/Table.vue'
import { onMounted } from 'vue'
import { useShipmentStore } from '../store/shipment'
import { storeToRefs } from 'pinia'
import { getShipmentList } from '../api/shipments'
import { useNotify } from '../composables/useNotify'
import { getErrorMessage } from '../utils/getErrorMessage'

const { shipments, loading } = storeToRefs(useShipmentStore())
const {showNotify} = useNotify()

const fetchShipments = async () => {
  loading.value = true
  try{
    loading.value = false
    const { data } = await getShipmentList()
    shipments.value = data
  } catch(err){
    showNotify({
      type: 'error',
      title: 'Error',
      text: getErrorMessage(err)
    })
  } finally {
    loading.value = false
  }
}

onMounted(fetchShipments)

const columns = [
  { label: 'Shipment Name', key: 'name' },
  { label: 'Origin', key: 'origin' },
  { label: 'Destination', key: 'destination' },
  { label: 'Status', key: 'status' },
]
</script>
