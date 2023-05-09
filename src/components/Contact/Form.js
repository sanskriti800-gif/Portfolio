import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input type='text' required></input>

        <label>Email</label>
        <input type='email' required></input>

        <label>Subject</label>
        <input type='text' required></input>

        <label>Message</label>
        <textarea rows='6' placeholder="Type Your Message Here"/>

        <button className='btn'><a href="mailto:gupta.sanskriti08@gmail.com?body=hello" style={{textDecoration:'none', color:'#121212'}}>Submit</a></button>
      </form>
    </div>
  )
}

export default Form