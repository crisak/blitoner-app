import { CategoriesSummaryContents } from '../models'

export default class CategoryService {
  async getCategoriesSummaryContents(): Promise<CategoriesSummaryContents> {
    return fetch(
      'https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/categories/summary-contents'
    ).then((res) => res.json())
  }
}
