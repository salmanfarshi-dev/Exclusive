import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './Component/Rootlayout'
import Contact from './Pages/Contact'
import About from './Pages/About'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout/> }>
      <Route path="/Home" element={<Home />} />
      <Route path='/Contact' element={ <Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Sign Up' element={ <SignUp/>}/>


      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App