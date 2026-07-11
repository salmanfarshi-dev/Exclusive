import { configureStore } from '@reduxjs/toolkit'
import Bradcrumb from './Slices/bradcrumb'
import cartslice from './Slices/addToCartSlice'

export default configureStore({
  reducer: {
    bradcrumb: Bradcrumb,
    cartitem: cartslice
  },
})