import { Project } from './models'
import { projectService } from './services'

import ListOfProjects from './components/ListOfProjects'

export const getAllProjects = async () => {
  const projects: Project[] = await projectService.getAll()

  return projects
}

const ProjectsPage = async () => {
  const projects = await getAllProjects()

  return (
    <>
      <ListOfProjects projects={projects} />
    </>
  )
}

export default ProjectsPage
