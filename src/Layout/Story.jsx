import Container  from '../Component/Container'
import React from 'react'
import Nextpage from '../Component/Nextpage'
import OurStory from '../Component/OurStory'
import { useSelector } from 'react-redux';

function Story() {
   let prev = useSelector((state)=>(state.bradcrumb.previousvalue));
  let next = useSelector((state)=>(state.bradcrumb.currentvalue));
  return (
   <section>
     <Container>
      <Nextpage  prevPath={prev === "Home" ? "/" : `/${prev.toLowerCase()}`}  prev={prev} current={next}  className="mt-20 mb-[42px]"/>

        
    </Container>

    <OurStory/>
   </section>
  )
}

export default Story