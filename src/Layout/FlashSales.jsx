import Subheading from '../Component/Subheading'
import Today  from '../Component/Today'
import React from 'react'
import Cards from '../Component/Cards'
import Keyboard from '../assets/keyboard.png'
import Button from '../Component/Button'
import Container  from '../Component/Container'

function FlashSales() {
  return (
   <section className="mb-20">
   <Container >
     <Today text="Today’s"/>
    <Subheading  text="Flash Sales" className="mt-6"/>

    <div className="mt-10 flex justify-between items-center">
      <Cards src={Keyboard} alt="Image" tittle="HAVIT HV-G92 Gamepad" badge="-35%" discount="120" regular="160"/>
      <Cards src={Keyboard} alt="Image" tittle="HAVIT HV-G92 Gamepad" badge="-35%" discount="120" regular="160"/>
      <Cards src={Keyboard} alt="Image" tittle="HAVIT HV-G92 Gamepad" badge="-35%" discount="120" regular="160"/>
      <Cards src={Keyboard} alt="Image" tittle="HAVIT HV-G92 Gamepad" badge="-35%" discount="120" regular="160"/>
    </div>
    <div className="text-center mt-16 pb-16 border-b border-[#8282824d]">
      <Button text="View All Products"/>
    </div>
   </Container>
   </section>
  )
}

export default FlashSales