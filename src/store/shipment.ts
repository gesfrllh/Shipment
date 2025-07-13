import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Shipment } from '../types/shipment'

export const useShipmentStore = defineStore('shipment', () => {
  const shipments = ref<Shipment[]>([])
  const shipmentsById = ref<Shipment>()
  const loading = ref(false)
  return {
    shipments,
    loading,
    shipmentsById
  }
})
