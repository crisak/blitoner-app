import { categoryService } from '@/services'
import Home from './components/Home'

const HomePage = async () => {
  const categories = await categoryService.getCategoriesSummaryContents()

  return <Home categories={categories} />
}

export default HomePage
