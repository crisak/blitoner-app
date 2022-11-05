export type CategoriesSummaryContents = Category[]

export interface Category {
  id: string /* Id of category */
  name: string
  description: string
  projects: Array<{
    id: string
    name: string
    date: string
    image: string
  }>
}
