import axios from 'axios'
import { CreateProjectResultDto, GetProjectDto, GetProjectsDto } from '../dtos'
import { CreateProject, Project } from '../models'
import {
  getProjectAdapter,
  getProjectsAdapter,
  createProjectAdapter,
  createResultProjectAdapter
} from '../adapters'

export const getAll = async (): Promise<Project[]> => {
  const url = process.env.BLITONER_API
  const { data } = await axios.get<GetProjectsDto>(`${url}/projects`)

  const dataAdapter = getProjectsAdapter(data)

  return dataAdapter
}

// GET - https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/projects
// GET - https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/projects/{id}
// POST - https://9g0kxdwyn1.execute-api.us-east-1.amazonaws.com/dev/projects
export const getById = async (
  idProject: Pick<Project, 'id'>
): Promise<Project> => {
  if (!idProject) {
    throw new Error('idProject not exits')
  }

  const url = process.env.BLITONER_API
  const { data } = await axios.get<GetProjectDto>(
    `${url}/projects/${idProject}`
  )

  const dataAdapter = getProjectAdapter(data)

  return dataAdapter
}

export const create = async (project: CreateProject): Promise<Project> => {
  const payload = createProjectAdapter(project)

  const url = process.env.BLITONER_API
  const { data } = await axios.post<CreateProjectResultDto>(
    `${url}/projects`,
    payload
  )

  const dataAdapter = createResultProjectAdapter(data)

  return dataAdapter
}