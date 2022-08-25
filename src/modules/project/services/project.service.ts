import axios from 'axios'
import { GetProjectsDto } from '../dtos'

export const getProjects = async (): Promise<GetProjectsDto[]> => {
  const url = 'https://rickandmortyapi.com/api' || process.env.URL_API_BLITONER
  const result = await axios.get(`${url}/character/2`)

  return []
}
