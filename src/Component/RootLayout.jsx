import React from 'react'
import HeadingTop from '../Layout/HeadingTop';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
        <HeadingTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout;