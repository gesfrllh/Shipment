import { ModelDefinition, Registry } from 'miragejs'
import { Server } from 'miragejs'
import { Shipment, Transporter } from './shipment'


export const ShipmentModel: ModelDefinition<Partial<Shipment>> = {}
export const TransporterModel: ModelDefinition<Partial<Transporter>> = {}

export interface AppModels {
  shipment: typeof ShipmentModel
  transporter: typeof TransporterModel
}

type AppFactories = {}

export type AppRegistry = Registry<AppModels, AppFactories>

export type AppServer = Server<AppRegistry>
