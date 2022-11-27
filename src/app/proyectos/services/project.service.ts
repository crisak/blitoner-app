import axios from 'axios'
import {
  CreateProjectResultDto,
  GetProjectDto
  // GetProjectsDto
} from '../dtos'
import { CreateProject, Project } from '../models'
import db from '@/utils/db'
import {
  getProjectAdapter,
  // getProjectsAdapter,
  createProjectAdapter,
  createResultProjectAdapter
} from '../adapters'

const filterDefaultProjects = { category: 'graffiti' }

// TODO - Remove setTimeout
export const getAll = ({ category } = filterDefaultProjects): Project[] => {
  console.log(category)

  return db.projects
  // return new Promise((resolve, reject) => {
  //   setTimeout(async () => {
  //     const url = process.env.NEXT_PUBLIC_BLITONER_API
  //     const response = await fetch(`${url}/projects?category=${category}`)
  //     const data = await response.json()

  //     /** mock */
  //     resolve(db.projects)
  //     return

  //     if (!response.ok) {
  //       return reject(data)
  //     }

  //     const dataAdapter = getProjectsAdapter(data)

  //     resolve(dataAdapter)
  //   }, 1000)
  // })
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

  const url = process.env.NEXT_PUBLIC_BLITONER_API
  const { data } = await axios.get<GetProjectDto>(
    `${url}/projects/${idProject}`
  )

  const dataAdapter = getProjectAdapter(data)

  return dataAdapter
}

export const create = async (project: CreateProject): Promise<Project> => {
  const payload = createProjectAdapter(project)

  const url = process.env.NEXT_PUBLIC_BLITONER_API
  const { data } = await axios.post<CreateProjectResultDto>(
    `${url}/projects`,
    payload
  )

  const dataAdapter = createResultProjectAdapter(data)

  return dataAdapter
}
