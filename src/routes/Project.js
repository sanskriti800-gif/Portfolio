import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2/HeroImg2'
import Work from '../components/WorkCard/Work'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading='PROJECTS' text='Some of my most recent works.' />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project