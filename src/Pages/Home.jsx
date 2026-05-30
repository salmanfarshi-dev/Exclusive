import React from 'react'
import Banner from '../Layout/Banner'
import FlashSales from '../Layout/FlashSales'
import BrowseCategory from '../Layout/BrowseCategory';
import SellingProducts from '../Layout/SellingProducts';
import MusicEx from '../Layout/MusicEx';
import Product from '../Layout/Product';
import NewArrival from '../Layout/NewArrival';
import Services from '../Layout/Services';


function Home() {
  return (
  <>
  

  <Banner/>
  <FlashSales/>
  <BrowseCategory/>
  <SellingProducts/>
  <MusicEx/>
  <Product/>
  <NewArrival/>
  <Services/>
  

  
  </>
  )
}

export default Home;