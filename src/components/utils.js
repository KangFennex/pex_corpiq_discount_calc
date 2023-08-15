export function calculateTotal(doors, percentageRental) {
  const decimalPercentage = percentageRental / 100;
  const total = doors * decimalPercentage;
  return Math.ceil(total);
}
