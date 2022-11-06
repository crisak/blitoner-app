import Head from 'next/head'

type ProjectsLayoutProps = { children: JSX.Element }

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return (
    <>
      <Head>
        <title>Proyectos</title>
        <meta name="description" content="Lista de proyecto desarrollador" />
      </Head>

      {children}
    </>
  )
}

export default ProjectsLayout
