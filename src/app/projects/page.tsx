import { projectService } from './services'

import ListOfProjects from './components/ListOfProjects'

const ProjectsPage = async () => {
  const projects = await projectService.getAll()

  return <ListOfProjects projects={projects} />
}

export default ProjectsPage
