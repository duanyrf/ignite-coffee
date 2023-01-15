export function CurrencyConverter(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'BRL',
  }).format(value)
}
