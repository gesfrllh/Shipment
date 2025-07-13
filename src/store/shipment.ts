import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Shipment, Transporter } from '../types/shipment'
import {  getShipmentList } from '../api/shipments'

type MessageType = {
  type: 'success' | 'error'
  text: string
} | null


export const useShipmentStore = defineStore('shipment', () => {
  const shipments = ref<Shipment[]>([])
  const shipment = ref<Shipment | null>(null)
  const loading = ref(false)
  const selectedTransporter = ref<string | null>(null)
  const message = ref<MessageType>(null)

  const transporterOptions = ref<Transporter[]>([
    { id: 'trp-101', name: 'PT JEJE Transindo' },
    { id: 'trp-202', name: 'Logistik Nusantara' },
    { id: 'trp-303', name: 'Cipta Ekspedisi' },
  ])

  const fetchShipments = async () => {
    loading.value = true
    try {
      const { data } = await getShipmentList()
      shipments.value = data
    } catch (e) {
      message.value = { type: 'error', text: 'Failed to load shipments' }
    } finally {
      loading.value = false
    }
  }

  return {
    shipments,
    shipment,
    loading,
    selectedTransporter,
    transporterOptions,
    message,
    fetchShipments,
  }
})
