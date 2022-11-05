import Home from './Home'

const getSummaryContents = async () => {
  const result = await fetch(
    'https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/categories/summary-contents'
  ).then((res) => res.json())

  console.log('server->', result)
  return result
}

const HomePage = async () => {
  const categories = await getSummaryContents()

  return <Home categories={categories} />
}

export default HomePage
