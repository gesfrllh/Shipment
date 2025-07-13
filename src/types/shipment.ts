export interface Shipment {
  name: string,
  id: string,
  origin: string,
  destination: string,
  status: string,
  route: string,
  vehicle_type: string,
  transporter?: Transporter,
}

export interface Transporter {
  id: string,
  name: string
}