import { NextPage } from "next"
import { useEffect, useState } from "react"
import style from './OAuth.module.css'

const getAllQueryParams = () => {
  if (typeof window === "undefined") {
    return {}
  }
  const queryParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(queryParams.entries())
  return params
}

const OAuth: NextPage = () => {
  const [params, setParams] = useState(getAllQueryParams())

  useEffect(() => {
    setParams(getAllQueryParams())
  }, [])

  return <div className={style.container}>
    <h1>OAuth</h1>
    <div>Redirect</div>
    <pre className={style.containerCode}>
      <code>
        {JSON.stringify(params, null, 2)}
      </code>
    </pre>
  </div>
}

export default OAuth
