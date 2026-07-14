import { configureStore } from '@reduxjs/toolkit'
import Bradcrumb from './Slices/bradcrumb'
import cartslice from './Slices/addToCartSlice'
import  Wishlist  from './Slices/Wishlist'

export default configureStore({
  reducer: {
    bradcrumb: Bradcrumb,
    cartitem: cartslice,
    Wishlist:Wishlist,
  },
})