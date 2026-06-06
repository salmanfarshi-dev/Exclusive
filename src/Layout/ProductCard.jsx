import React from 'react'
import Container from '../Component/Container'
import Today from '../Component/Today'
import Cards from '../Component/Cards'
import Gamepad from '../assets/gamepad.png'
import Cpu from '../assets/cpu.png'
import Keyboard from "../assets/keyboard.png"
import Monitor from '../assets/monitor.png'



function ProductCard() {
  return (
   <section className='mt-20 mb-[140px]'>
    <Container>
        <Today text="Related Item"/>

        <div className="mt-16 flex items-center justify-between">
         <Cards tittle="HAVIT HV-G92 Gamepad" src={Gamepad} badge="-40%" regular="160" discount="120" list="88"/>
         <Cards tittle="AK-900 Wired Keyboard" src={Keyboard} badge="-20%" regular="1160" discount="960" list="75"/>
         <Cards tittle="IPS LCD Gaming Monitor" src={Monitor} badge="-30%" regular="400" discount="370" list="99"/>
         <Cards tittle="RGB liquid CPU Cooler" src={Cpu} regular="170" discount="160" list="70" className="hidden"/>
        </div>
    </Container>
   </section>
  )
}

export default ProductCard