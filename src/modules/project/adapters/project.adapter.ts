import {
  CreateProjectDto,
  CreateProjectResultDto,
  GetProjectDto,
  GetProjectsDto
} from '../dtos'
import { CreateProject, Project } from '../models'

export const getProjectsAdapter = (projects: GetProjectsDto): Project[] => {
  const projectsFilter = projects.map((project) => {
    const { id, name, date, banner, description, categoryID, location } =
      project

    const position = location.position

    return {
      id,
      name,
      date,
      banner,
      description,
      categoryID,
      location: {
        position: {
          latitude: position.latitude,
          longitude: position.longitude
        },
        address: location.address,
        country: location.country,
        state: location.state
      }
    }
  })

  return projectsFilter
}

export const getProjectAdapter = (projectDto: GetProjectDto): Project => {
  const { id, name, date, banner, description, categoryID, location } =
    projectDto
  return {
    id,
    name,
    date,
    banner,
    description,
    categoryID,
    location
  }
}

export const createProjectAdapter = (
  projectForm: CreateProject
): CreateProjectDto => {
  const { name, date, banner, description, categoryID, location } = projectForm
  return {
    name,
    date,
    banner,
    description,
    categoryID,
    location
  }
}

export const createResultProjectAdapter = (
  project: CreateProjectResultDto
): Project => {
  const { id, name, date, banner, description, categoryID, location } = project
  return {
    id,
    name,
    date,
    banner,
    description,
    categoryID,
    location
  }
}
