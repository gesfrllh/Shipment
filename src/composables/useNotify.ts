import { inject } from 'vue'

export interface NotifyOptions {
  type?: 'success' | 'error' | 'info' | 'warning'
  title?: string
  text: string
}

export function useNotify() {
  const showNotify = inject('showNotify') as (options: NotifyOptions) => void

  if (!showNotify) {
    throw new Error('showNotify is not provided. Did you forget to include <BaseNotify> in App.vue?')
  }

  return { showNotify }
}
