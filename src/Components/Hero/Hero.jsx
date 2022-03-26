import React from 'react'
import Socials from '../Socials/Socials'

export default function Hero() {
  return (
    <main id='home' className='py-5 mt-5 container-lg vh-100'>
      <h5 className='pb-2 intro'>Hello! I'm</h5>
      <h1 className='fw-bold pb-2'>Beshoy S. Said</h1>
      <h2 className='pb-2'>Junior Front-end Web Developer</h2>
      <p className='w-75 pe-0 pe-lg-5 pb-2'>I'm a developer who won't stop learning every day and love building new technologies, tools. waiting to join a team to improve and learn from their experience.</p>
      <section>
        <Socials custom={'my-4'} size={'fa-2x'}/>
      </section>
    </main>
  )
}
