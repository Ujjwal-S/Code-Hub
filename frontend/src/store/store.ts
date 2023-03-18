import { configureStore } from '@reduxjs/toolkit'
import appScreenSlice from './appScreenSlice'

export const store = configureStore({
  reducer: {
    appScreen: appScreenSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch