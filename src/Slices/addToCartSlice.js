import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartvalue: [],
    
  },
  reducers: {
    CardSlice: (state,action) => {
      
      
      let data =   state.cartvalue.find(item=>item.tittle===action.payload.tittle)
      
      if(data){
        data.quantity=data.quantity+1
      }
      else{

        state.cartvalue.push({...action.payload, quantity:1})
      }
     
    },

    incrementcart:(state,action)=>{
      state.cartvalue.map(item=>{
        if(item.tittle===action.payload.tittle){
          item.quantity+=1
        }
      })

    },
    decrementcart:(state,action)=>{
      state.cartvalue.map(item=>{
        if(item.tittle===action.payload.tittle){
        if(item.quantity>1){
            item.quantity-=1
        }
        }
      })

    },
  
  },
})


export const {  CardSlice, incrementcart,decrementcart } = addToCartSlice.actions

export default addToCartSlice.reducer