import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './Component/Rootlayout'
import Contact from './Pages/Contact'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Error from './Component/Error'
import Login from './Pages/Login'
import ProductsDetaisl from './Pages/ProductsDetaisl'
import Account from './Pages/Account'
import CheckOut from './Pages/CheckOut'
import Card from './Pages/Card'
function App() {
  return (
    <>
    <BrowserRouter basename='/Exclusive/'>
    <Routes>
      <Route path='/' element={<RootLayout/> }>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path='contact' element={ <Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='signUp' element={ <SignUp/>}/>
      <Route path='login' element={ <Login/> }/>
      <Route path='products' element={ <ProductsDetaisl/> }/>
      <Route path='account' element={ <Account/> }/>
      <Route path="checkout" element={ <CheckOut/> }/>
      <Route  path="card" element={ <Card/>}/>
      <Route path='*' element={ <Error/> }/>
    
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;