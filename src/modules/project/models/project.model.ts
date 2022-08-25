export interface Project {
  id: string
  name: string
  /**
   * ISO 8601
   */
  date: string
  banner: string
  description: string
  categoryID: string
  location: {
    position: { latitude: number; longitude: number }
    address: string
    /**
     * Stands CODE with ISO
     */
    country: string
    state: string
  }
}

export const ProjectDefaultState: Project = {
  id: '',
  name: '',
  date: '',
  banner: '',
  description: '',
  categoryID: '',
  location: {
    position: { latitude: 0, longitude: 0 },
    address: '',
    country: '',
    state: ''
  }
}

export type CreateProject = Omit<Project, 'id'>
