import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MailchimpForm from './MailchimpForm'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg.svg';

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                {/* <MailchimpForm/> */}
                <Col sm={6}>
                    <img src={logo} alt="Logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/sanskriti-gupta-151aab202/"><img src={navIcon1}/></a>
                        <a href=""><img src={navIcon2}/></a>
                    </div>
                    <p>Copyright 2023. All Right Reserved</p>
                </Col>

            </Row>
        </Container>

    </footer>
  )
}

export default Footer