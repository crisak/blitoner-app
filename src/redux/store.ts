import { configureStore } from '@reduxjs/toolkit'
import { projectReducer, ProjectStore } from './slices'

export interface AppStore {
  project: ProjectStore
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer
  }
})

export default store
