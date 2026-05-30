import React from 'react'
import Image from '../Component/Image'
import Music from '../assets/music.png'
import Container  from '../Component/Container'
function MusicEx() {
  return (
    <section className='mb-[70px]'>
       <Container>
         <div>
        <Image src={Music}/>
    </div>
       </Container>
    </section>
  )
}

export default MusicEx