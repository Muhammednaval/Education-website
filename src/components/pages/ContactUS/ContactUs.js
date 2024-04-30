import React from 'react'
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='container'>
        <div className='contact-us-container'>
            <h1>Contact Us</h1>
            <p>
                we'd love to hear form you. please fill out the form below  or reach out to 
                us using contact details provided. 
            </p>
            <form className='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='emial' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>message:</label>
                    <textarea id='message' name='message' rows='5' required/>
                </div>
                <button type='submit' className='submit-btn'>submit</button>
            </form>

        </div>

    </div>
  )
}

export default ContactUs