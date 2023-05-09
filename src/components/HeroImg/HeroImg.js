import React from 'react'
import "./HeroImgStyles.css";
import { Link } from 'react-router-dom';
import IntroImg from "../assets/intro-bg.jpg"

const HeroImg = () => {
  return (
    <div className='hero'>
        HeroImg
        <div className='mask'>
            <img className='intro-img' src={IntroImg}/>
        </div>
        <div className='content'>
            <p>HI, I'M SANSKRITI GUPTA</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
    )
}

export default HeroImg