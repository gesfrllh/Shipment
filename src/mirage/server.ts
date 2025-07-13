import { createServer, Model } from 'miragejs'
import type { AppServer } from '../types/mirage'
import { shipmentListSeed } from '../mock/shipmentList'
import type { Shipment } from '../types/shipment'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    models: {
      shipment: Model,
    },
    seeds(server) {
      const saved = localStorage.getItem('mirage-shipments')

      if (saved) {
        const list: Shipment[] = JSON.parse(saved)
        list.forEach(item => server.create('shipment', item))
      } else {
        shipmentListSeed.forEach(item => server.create('shipment', item))
      }

    },
    routes() {
      this.namespace = 'api'

      this.get('/shipments', (schema: AppServer['schema']) => {
        const shipment =  schema.all('shipment').models
        return {
          data: shipment
        } 
      })

      this.get('/shipments/:id', (schema: AppServer['schema'], request) => {
        const shipmentId =  schema.find('shipment', request.params.id)
        return {
          data: shipmentId
        }
      })

      this.post('/shipments/:id/assign', (schema, request) => {
        const shipment = schema.find('shipment', request.params.id)
        const attrs = JSON.parse(request.requestBody)
        const updated = shipment?.update(attrs)

        const allShipments = schema.all('shipment').models.map(s => s.attrs)
        localStorage.setItem('mirage-shipments', JSON.stringify(allShipments))

        return { data: updated }
      })
    },
  })
}
