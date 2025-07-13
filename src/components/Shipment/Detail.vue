<template>
  <div class="border rounded-lg border-gray-300 p-8 flex flex-col gap-2">
    <TextGroup title="ID" :text="shipment.id"/>
    <TextGroup title="Route" :text="shipment.route"/>
    <TextGroup title="Vehicle Type" :text="shipment.vehicle_type"/>
    <TextGroup title="Transporter" v-if="shipment.transporter" :text="shipment.transporter.name"/>
    <span v-else class="italic text-gray-400">Not Assigned</span>
      <slot/>
  </div>
</template>

<script setup lang="ts"> 
import type { PropType } from 'vue';
import type { Shipment } from '../../types/shipment';
import TextGroup from '../Base/TextGroup.vue';
defineProps({
  shipment: {
    type: Object as PropType<Shipment>,
    default: {}
  }
})


</script>