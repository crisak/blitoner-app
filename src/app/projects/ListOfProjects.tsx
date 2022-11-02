// 'use client'

import Link from 'next/link'
import CardProject from './CardProject'
const getPhotos = (): Promise<any[]> => {
  /**
   * Server side (getServerSideProps)
   * ```js
   * return fetch('https://jsonplaceholder.typicode.com/photos').then((res) =>
   * res.json()
   * )
   * ```
   *
   * Static html (getServerSideProps)
   * ```js
   * return fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-store' }).then((res) =>
   * res.json()
   * )
   * ```
   *
   * Incremental static generation (run every time)
   * ```js
   * return fetch('https://jsonplaceholder.typicode.com/photos', {
   *  next: {
   *    revalidate: 60
   * }
   * }).then((res) =>
   * res.json()
   * )
   * ```
   */
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  )
}

const ListOfProjects = async () => {
  const photos = await getPhotos()
  return (
    <>
      {photos.map(({ id, title, body }) => (
        <CardProject key={id}>
          <h3>
            {title}
            <span style={{ color: 'blue', marginLeft: '1rem' }}>{id}</span>
          </h3>
          <p>{body}</p>
          <br />
          <Link href={`/projects/${id}`}>Go project</Link>
        </CardProject>
      ))}
    </>
  )
}

export default ListOfProjects
