import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartvalue: localStorage.getItem("CardSlice") ? JSON.parse (localStorage.getItem("CardSlice")): [],
    
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
       localStorage.setItem("CardSlice",JSON.stringify(state.cartvalue))
     
    },

   incrementcart:(state,action)=>{
  state.cartvalue.forEach(item=>{
    if(item.tittle===action.payload.tittle){
      item.quantity+=1
    }
  })
  localStorage.setItem("CardSlice",JSON.stringify(state.cartvalue))
},

decrementcart:(state,action)=>{
  state.cartvalue.forEach(item=>{
    if(item.tittle===action.payload.tittle){
      if(item.quantity>1){
        item.quantity-=1
      }
    }
  })
  localStorage.setItem("CardSlice",JSON.stringify(state.cartvalue))
}

,






    deletecart:(state,action)=>{
  state.cartvalue = state.cartvalue.filter(
    item => item.tittle !== action.payload.tittle
  )
  localStorage.setItem("CardSlice", JSON.stringify(state.cartvalue))
}
  
  },
})


export const {  CardSlice, incrementcart,decrementcart,deletecart } = addToCartSlice.actions

export default addToCartSlice.reducer