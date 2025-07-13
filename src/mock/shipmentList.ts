import type { Shipment } from "../types/shipment"

export const shipmentListSeed: Shipment[] = [
  {
    id: 'shp-001',
    name: 'Shipment A',
    origin: 'Jakarta',
    destination: 'Bandung',
    route: 'Jakarta → Bandung',
    vehicle_type: 'Truck',
    transporter: {
      id: 'trp-101',
      name: 'PT JEJE Transindo',
    },
    status: 'Assigned',
  },
  {
    id: 'shp-002',
    name: 'Shipment B',
    origin: 'Surabaya',
    destination: 'Yogyakarta',
    route: 'Surabaya → Yogyakarta',
    vehicle_type: 'Van',
    transporter: undefined,
    status: 'Not Assigned',
  },
  {
    id: 'shp-003',
    name: 'Shipment C',
    origin: 'Medan',
    destination: 'Padang',
    route: 'Medan → Padang',
    vehicle_type: 'Pickup',
    transporter: {
      id: 'trp-202',
      name: 'Logistik Nusantara',
    },
    status: 'Assigned',
  },
]
