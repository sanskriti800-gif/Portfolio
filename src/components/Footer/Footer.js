import React from 'react'
import './FooterStyles.css'
import { FaHome, FaPhone , FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>Gyanpur, Bhadohi</p>
                            <p>UttarPradesh</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            91-7068335774
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            gupta.sankriti2020@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Education Status</h4>
                    <p>I'm currently persuing Btech Degree from Vellore Institute of Technology in Computer Science and Engineering branch.</p>
                    <div className='social'>
                    <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer