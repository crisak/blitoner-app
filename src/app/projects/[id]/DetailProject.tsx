import Link from 'next/link'

const DetailProject = ({ projectDetail, idProject }: any) => {
  return (
    <article>
      <h2>{projectDetail.title}</h2>
      <p>
        <strong>id</strong>
        <br />
        {projectDetail.id}
      </p>
      <p>
        <strong>User id</strong>
        <br />
        {projectDetail.userId}
      </p>
      <p>{projectDetail.body}</p>

      <Link href={`/projects/${idProject}/comments`}>Go comments</Link>
    </article>
  )
}

export default DetailProject
