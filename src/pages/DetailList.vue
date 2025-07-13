<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Shipment Detail</h2>

    <div v-if="loading">
      <div class="flex justify-center">
        <div class="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>

    <div v-else-if="!shipment">Shipment not found.</div>

    <DetailShipment v-else :shipment="shipment">
      <div class="space-y-2 mt-4 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
        <label for="transporter" class="font-semibold block">Assign Transporter</label>
        <select
          id="transporter"
          v-model="selectedTransporter"
          class="border px-3 py-1 rounded w-full"
        >
          <option disabled value="">-- Select Transporter --</option>
          <option
            v-for="option in transporterOptions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name || 'Not Assign'}}
          </option>
        </select>
        </div>

        <button
          @click="handleAssign"
          :disabled="!selectedTransporter"
          :class="[
            'px-4 py-2 rounded transition-colors duration-200',
            selectedTransporter
              ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          ]">
          Assign
        </button>
      </div>
    </DetailShipment>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getShipmentById, assignTransporter } from '../api/shipments'
import type { Shipment, Transporter } from '../types/shipment'
import { useNotify } from '../composables/useNotify'
import DetailShipment from '../components/Shipment/Detail.vue'

const route = useRoute()
const shipment = ref<Shipment>()
const loading = ref(true)
const selectedTransporter = ref<string | null>(null)
const message = ref<{ type: 'success' | 'error'; text: string } | null>(null)

const { showNotify } = useNotify()
const router = useRouter()
const transporterOptions: Transporter[] = [
  { id: 'trp-101', name: 'PT JEJE Transindo' },
  { id: 'trp-202', name: 'Logistik Nusantara' },
  { id: 'trp-303', name: 'Cipta Ekspedisi' },
]

const fetchShipment = async () => {
  try {
    const { data } = await getShipmentById(route.params.id as string)
    shipment.value = data
    selectedTransporter.value = data?.transporter?.id ?? null
  } catch (err) {
    message.value = { type: 'error', text: 'Failed to load shipment detail.' }
  } finally {
    loading.value = false
  }
}

const handleAssign = async () => {
  if (!selectedTransporter.value || !shipment.value) return

  try {
    const transporter = transporterOptions.find(
      t => t.id === selectedTransporter.value
    )

    const updatedShipment = {
      ...shipment.value,
      transporter,
      status: 'Assigned',
    }

    const res = await assignTransporter(shipment.value.id, updatedShipment)
    if(res){
      router.push('/')
      showNotify({
        type: 'success',
        title: 'Sukses',
        text: 'Transporter berhasil ditugaskan!'
      })
    }
  } catch (err) {
    showNotify({
        type: 'error',
        title: 'Error',
        text: 'Something went wrong while assigning.',
    })
  }
}

onMounted(fetchShipment)
</script>
