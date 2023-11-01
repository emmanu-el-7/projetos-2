import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'

import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})
