import { GetProjectsDto } from '../dtos'
import { Project } from '../models'

export const getProjectsAdapter = (projects: GetProjectsDto[]): Project[] => {
  const projectsFilter = projects.map((project) => {
    const { id, name, date, banner, description, categoryID, location } =
      project
    return {
      id,
      name,
      date,
      banner,
      description,
      categoryID,
      location
    }
  })

  return projectsFilter
}
