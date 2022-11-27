import { Project, ProjectDefaultState } from '@/app/proyectos/models'
import { createSlice } from '@reduxjs/toolkit'

export type ProjectStore = {
  active: Project
  list: Project[]
  projectEdit: Project
}

const initialState: ProjectStore = {
  active: ProjectDefaultState,
  list: [],
  projectEdit: ProjectDefaultState
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    createProject: (state, action) => {
      const newProject = action.payload

      return {
        ...state,
        list: [...state.list, newProject],
        active: newProject
      }
    },
    loadProjects: (state, action) => {
      return {
        ...state,
        list: action.payload
      }
    },
    updateProject: (state, action) => {
      return state
    },
    resetProject: () => {
      return initialState
    }
  }
})

export const { createProject, updateProject, resetProject, loadProjects } =
  projectSlice.actions

export const projectReducer = projectSlice.reducer
