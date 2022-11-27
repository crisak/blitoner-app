export interface Project {
  id: string
  userID: string
  name: string
  /**
   * ISO 8601
   */
  date: string
  banner: string
  description: string
  categoryID: string
  nameCategory: string
  tags: string
  collaborators: {
    name: string
    username: string
    email: string
    photoUrl: string
    socials: {
      id: number
      url: string
      username: string
      type: 'FACEBOOK' | 'INSTAGRAM' | 'YOUTUBE' | 'TWITTER'
    }[]
  }[]
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
  nameCategory: '',
  userID: '',
  tags: '',
  collaborators: [],
  location: {
    position: { latitude: 0, longitude: 0 },
    address: '',
    country: '',
    state: ''
  }
}

export type CreateProject = Omit<Project, 'id'>
