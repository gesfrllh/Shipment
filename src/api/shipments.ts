import axios from "axios";
import type { ApiResponse } from "../types";
import type { Shipment } from "../types/shipment";


const api = axios.create({
  baseURL: '/api'
})

export async function getShipmentList() {
  const { data } = await api.get<ApiResponse<Shipment[]>>(`/shipments`)
  return data
}

export async function getShipmentById(id: string) {
  const { data } = await api.get<ApiResponse<Shipment>>(`/shipments/${id}`)
  return data
}

export async function assignTransporter(id: string, payload: Shipment) {
  const { data } = await api.post<ApiResponse<Shipment>>(`/shipments/${id}/assign`, payload)
  return data
}

