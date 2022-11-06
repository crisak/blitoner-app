import { categoryService } from '@/services'
import Home from './components/Home'

const HomePage = async () => {
  const categories = await categoryService.getCategoriesSummaryContents()
  return <h1>Home{categories.length}</h1>
  // return <Home categories={categories} />
}

export default HomePage
