import { Project } from '@/app/proyectos/models'
import { Category } from '@/models/categories-summary.models'

interface DBModel {
  projects: Project[]
  projectSummary: Category[]
}

const db = {} as DBModel

export default db
