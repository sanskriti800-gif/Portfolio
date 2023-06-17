import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/imag1.webp'
import React2 from '../assets/react2.webp'
import Carousel from "react-multi-carousel";
import { Container,Row ,Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import colorSharp from "../assets/img/color-sharp.png";


const AboutContent = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 2000, min: 1500 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1500, min: 512 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 512, min: 232 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 232, min: 0 },
          items: 1
        }
    };

    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I'm a react front-end developer. Along with developement I'm comfortable with languages Java and Python </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2 style={{color:'#fff'}}>Skills</h2>
                                <p className='my-3'>I’m qualified to work as an web developer</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className='item'>
                                        <img src={meter1} alt="Image" />
                                        <h5 style={{color:'#B8B8B8'}}>Web Developement</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt="Image" />
                                        <h5 style={{color:'#B8B8B8'}}>Programming language</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt="Image" />
                                        <h5 style={{color:'#B8B8B8'}}>SQL</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter1} alt="Image" />
                                        <h5 style={{color:'#B8B8B8'}}>Professional qualifications</h5>
                                    </div>
                                </Carousel>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutContent