<template>
  <div class="relative border border-gray-300 overflow-auto">
    <table class="w-full rounded text-sm">
      <thead class="bg-gray-100 text-left">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="py-2 px-4 border-b font-medium"
          >
            {{ column.label }}
          </th>
          <th v-if="hasActions" class="py-2 px-4 border-b">Details</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, rowIndex) in data"
          :key="item.id ?? rowIndex"
          class="hover:bg-gray-50"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            class="py-2 px-4 border-b"
          >
            {{ item[column.key] }}
          </td>
          <td v-if="hasActions" class="py-2 px-4 border-b">
            <slot name="details" :item="item" />
          </td>
        </tr>

        <tr v-if="loading">
          <td :colspan="columns.length + (hasActions ? 1 : 0)" class="py-6 text-center">
            <div class="flex justify-center">
              <div class="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          </td>
        </tr>

        <tr v-else-if="data.length === 0 ">
          <td :colspan="columns.length + (hasActions ? 1 : 0)" class="py-6 text-center text-gray-400 italic">
            No data available.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  columns: Array<{ label: string; key: string }>
  data: Array<Record<string, any>>
  hasActions?: boolean,
  loading: boolean,
}>()
</script>
