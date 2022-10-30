export type CategoriesSummaryContents = Category[]

interface Category {
  id: string
  name: string
  description: string
  projects: Array<{
    id: string
    name: string
    date: string
    image: string
  }>
}
