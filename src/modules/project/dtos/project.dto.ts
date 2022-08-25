import { Project } from '../models'

type Model = Pick<
  Project,
  'banner' | 'categoryID' | 'date' | 'description' | 'id' | 'location' | 'name'
>

export type GetProjectsDto = Model[]

export type GetProjectDto = Model

export type CreateProjectDto = Omit<Model, 'id'>

export type CreateProjectResultDto = Model
