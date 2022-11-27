import {
  CreateProjectDto,
  CreateProjectResultDto,
  GetProjectDto,
  GetProjectsDto
} from '../dtos'
import { CreateProject, Project } from '../models'

export const getProjectsAdapter = (projects: GetProjectsDto): Project[] => {
  const projectsFilter = projects.map((project) => {
    const {
      id,
      name,
      date,
      banner,
      description,
      categoryID,
      location,
      userID,
      tags
    } = project

    const position = location.position

    return {
      id,
      userID,
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
      },
      tags
    } as Project
  })

  return projectsFilter
}

export const getProjectAdapter = (projectDto: GetProjectDto): Project => {
  const {
    id,
    name,
    date,
    banner,
    description,
    categoryID,
    location,
    userID,
    tags,
    nameCategory
  } = projectDto
  return {
    id,
    name,
    date,
    banner,
    description,
    categoryID,
    location,
    userID,
    tags,
    nameCategory
  } as Project
}

export const createProjectAdapter = (
  projectForm: CreateProject
): CreateProjectDto => {
  const { name, date, banner, description, categoryID, location, userID } =
    projectForm
  return {
    name,
    date,
    banner,
    description,
    categoryID,
    location,
    userID
  } as CreateProjectDto
}

export const createResultProjectAdapter = (
  project: CreateProjectResultDto
): Project => {
  const { id, name, date, banner, description, categoryID, location, userID } =
    project
  return {
    id,
    name,
    date,
    banner,
    description,
    categoryID,
    location,
    userID
  } as Project
}
