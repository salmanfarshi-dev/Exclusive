import Container  from "../Component/Container"
import React from 'react'
import ServicesItems from "../Component/ServicesItems"
import Service from '../assets/service.png'
import Delivary from '../assets/Delivary.png'
import Monkey from '../assets/Monkey-guarantee.png'

function Services() {
  return (
  <section className="my-[140px]">
    <Container>
       <div className=" flex items-center justify-center gap-x-[88px]">
         <ServicesItems src={Delivary} tittle="FREE AND FAST DELIVERY" pera="Free delivery for all orders over $140"/>
      
         <ServicesItems src={Service} tittle="F24/7 CUSTOMER SERVICE" pera="Friendly 24/7 customer support"/>
       
         <ServicesItems src={Monkey} tittle="MONEY BACK GUARANTEE" pera="We reurn money within 30 days"/>
       </div>
    </Container>
  </section>
  )
}

export default Services