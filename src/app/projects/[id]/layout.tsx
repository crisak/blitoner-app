import DetailProject from './DetailProject'

const getProject = async (id: string) => {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {}
  ).then((res) => res.json())
}

const ProjectIdLayout = async ({ children, params }) => {
  const detailProject = await getProject(params.id)
  return (
    <>
      <DetailProject projectDetail={detailProject} idProject={params.id} />

      {children}
    </>
  )
}

export default ProjectIdLayout
