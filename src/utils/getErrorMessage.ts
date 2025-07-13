
export function getErrorMessage(error: unknown): string {
  if (!error) return 'Unknown error occurred.'

  if (typeof error === 'object' && error !== null) {
    const err = error as any

    if (err.response?.data?.message) {
      return err.response.data.message
    }

    if (err.message) return err.message
  }

  if (typeof error === 'string') return error

  return 'An unexpected error occurred.'
}
