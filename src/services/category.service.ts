import { CategoriesSummaryContents } from '@/modules/categories/models'

const paramsDefault = {
  graffiti: 'g'
}

class CategoryService {
  async getCategoriesSummaryContents(
    filter = paramsDefault
  ): Promise<CategoriesSummaryContents> {
    return fetch(
      `https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/categories/summary-contents?category=${filter.graffiti}`
    ).then((res) => res.json())
  }
}

export const categoryService = new CategoryService()
