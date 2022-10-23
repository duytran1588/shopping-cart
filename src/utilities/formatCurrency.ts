const CURRENCY_FORMAT = new Intl.NumberFormat('en-US', {
  currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMAT.format(number)
}