export const randomIntFromInterval = (
  min: number,
  max: number,
  { isDecimal } = { isDecimal: false }
) => {
  const numberRandom = Math.random() * (max - min + 1) + min
  if (!isDecimal) {
    return Math.floor(numberRandom)
  }
  return Number(numberRandom.toFixed(2))
}
