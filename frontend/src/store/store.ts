import { configureStore } from '@reduxjs/toolkit'
import appScreenSlice from './appScreenSlice'
import codeSlice from './codeSlice'

export const store = configureStore({
  reducer: {
    appScreen: appScreenSlice,
    codeContext: codeSlice 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch