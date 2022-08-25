import { ProjectDefaultState } from '@/modules/project/models'
import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
  name: 'project',
  initialState: ProjectDefaultState,
  reducers: {
    createProject: (state, action) => {
      return action.payload
    },
    updateProject: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetProject: () => {
      return ProjectDefaultState
    }
  }
})

export const { createProject, updateProject, resetProject } =
  projectSlice.actions

export const projectReducer = projectSlice.reducer
