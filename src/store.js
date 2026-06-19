import { configureStore } from '@reduxjs/toolkit'
import Bradcrumb from './Slices/bradcrumb'

export default configureStore({
  reducer: {
    bradcrumb: Bradcrumb
  },
})