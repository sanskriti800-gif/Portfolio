import React from 'react'
import "./HeroImgStyles.css";
import { Link } from 'react-router-dom';
import IntroImg from "../assets/intro-bg.jpg"
import TrackVisibility from 'react-on-screen'
import { useState, useEffect } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css';

const HeroImg = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [" Web Developer", " UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} />
            </div>
            <div className='content'>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <span className='tagline' style={{color:'#fff'}}>Welcome to my Portfolio</span>
                            <h1>{`Hello  I'm  Sanskriti  Gupta `}<span className='wrap'>{text}</span></h1>
                        </div>}
                </TrackVisibility>
                <div>
                    <Link to='/project' className='btn'>Projects</Link>
                    <a href="./static/media/SanskritiGupta_Resume.12002bf5c8a3916fe071.pdf" target="blank" style={{color:'#000'}} className='btn'>Resume</a>
                </div>
            </div>
        </div>
    )
}

export default HeroImg