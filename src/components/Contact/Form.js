import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
      <form action="https://formsubmit.co/gupta.sanskriti08@gmail.com" method="POST">
        {/* HoneyPot */}
        <input type="text" name="_honey" style={{display:'none'}}/>
        {/* Disable Captcha */}
        <input type='hidden' name='_captcha' value='false'/>
        <input type='hidden' name='_next' value='https://about-me-sanskriti-gupta.netlify.app/success'/>

        <label>Your Name</label>
        <input type='text' name='Name' required></input>

        <label>Email</label>
        <input type='email'name='Email' required></input>

        <label>Subject</label>
        <input type='text' name='Subject' required></input>

        <label>Message</label>
        <textarea rows='6' name='Message' placeholder="Type Your Message Here"/>

        <button className='btn' style={{textDecoration:'none', color:'#121212'}}>Submit</button>
      </form>
    </div>
  )
}

export default Form