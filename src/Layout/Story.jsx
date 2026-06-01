import Container  from '../Component/Container'
import React from 'react'
import Nextpage from '../Component/Nextpage'
import OurStory from '../Component/OurStory'

function Story() {
  return (
   <section>
     <Container>
        <Nextpage prev="Home" current="About" className="mt-20 mb-[42px]" />

        
    </Container>

    <OurStory/>
   </section>
  )
}

export default Story