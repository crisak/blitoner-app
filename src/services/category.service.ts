import { CategoriesSummaryContents } from '@/models/categories-summary.models'

const paramsDefault = {
  graffiti: 'g'
}

class CategoryService {
  async getCategoriesSummaryContents(
    filter = paramsDefault
  ): Promise<CategoriesSummaryContents> {
    const result = fetch(
      `https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/categories/summary-contents?category=${filter.graffiti}`
    ).then((res) => res.json())
    return result
  }
}

export const categoryService = new CategoryService()
