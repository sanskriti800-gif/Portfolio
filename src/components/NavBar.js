import React, { useDebugValue } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg.svg';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');  
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () =>{
        if(window.scrollY>50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    window.addEventListener("scroll",onScroll);
    return () =>{
        window.removeEventListener('scroll',onScroll);
    }
  },[])
  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home"? "active navbar-Link":"navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills"? "active navbar-Link":"navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Link</Nav.Link>
            <Nav.Link href="#project" className={activeLink === "project"? "active navbar-Link":"navbar-link"} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sanskriti-gupta-151aab202/"><img src={navIcon1} alt="linkedin"/></a>
                <a href="https://github.com/sanskriti800-gif"><img src={navIcon2} alt="github"/></a>
            </div>
            <button className='vvd' onClick={()=> console.log('connect')}><a id ="nav-a"href="mailto:gupta.sanskriti08@gmail.com?body=hello" style={{textDecoration:'none', color:'#fff'}}><span>Let's Connect</span></a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar