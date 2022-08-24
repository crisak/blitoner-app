import { Project, ProjectDefaultState } from '@models'
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

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}

export const { createProject, updateProject, resetProject } =
  projectSlice.actions

export const projectReducer = projectSlice.reducer
