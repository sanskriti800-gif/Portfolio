import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg2/HeroImg2'
import AboutContent from '../components/About/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT ME" text="I'm  Sanskriti  Gupta"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About