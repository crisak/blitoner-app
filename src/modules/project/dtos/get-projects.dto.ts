import { Project } from '../models'

type Model = Pick<
  Project,
  'banner' | 'categoryID' | 'date' | 'description' | 'id' | 'location' | 'name'
>

export interface GetProjectsDto extends Model {}
