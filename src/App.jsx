import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './Component/Rootlayout'
import Contact from './Pages/Contact'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Error from './Component/Error'
import Login from './Pages/Login'

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
      <Route path='*' element={ <Error/> }/>
    
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;