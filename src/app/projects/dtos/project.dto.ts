import { Project } from '../models'

type Model = Pick<
  Project,
  | 'banner'
  | 'categoryID'
  | 'date'
  | 'description'
  | 'id'
  | 'location'
  | 'name'
  | 'userID'
  | 'tags'
  | 'nameCategory'
>

export type GetProjectsDto = Model[]

export type GetProjectDto = Model

export type CreateProjectDto = Omit<Model, 'id'>

export type CreateProjectResultDto = Model
