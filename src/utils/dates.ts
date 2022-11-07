export const formatDate = (date: string | Date) => {
  const instanceDate = date instanceof Date ? date : new Date(date)
  return new Intl.DateTimeFormat('en-CO').format(instanceDate)
}
