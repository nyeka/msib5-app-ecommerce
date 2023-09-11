export const formatIDR = (nilai: number) => {
  if (isNaN(nilai)) {
    return 'Invalid input'
  }

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(nilai)
}
