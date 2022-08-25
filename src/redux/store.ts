import { Project } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import { projectReducer } from './slices'

export interface AppStore {
  project: Project
}

const store = configureStore<AppStore>({
  reducer: {
    project: projectReducer
  }
})

export default store
