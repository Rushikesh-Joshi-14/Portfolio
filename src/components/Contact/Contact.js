import React, { useRef } from 'react'
import "./contact.css"
import facebook from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_31u7lxb', 'template_9o77xel', form.current, {
        publicKey: '6ZqIcJO4A2hybm0kq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent Successfully !');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'  data-aos="fade-up" data-aos-duration="2000" >
        <h1 className='contactTitle'>Contact Me</h1>
        <p className='contactDesc'> Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text Sample Text </p>
        <form className='contactForm' onSubmit={sendEmail} ref={form}>

            <input type='text' className='name' placeholder='Enter Your Name' name="from_name" />
            <input type='email' className='email' placeholder='Enter Your Email' name="from_email" />
            <textarea className='msg' rows='5' placeholder='Your Message' name="msg" />
            <button className='contactBtn' value='Send' type='submit'> Send</button>
            <div className='links'>
            <img className='linkImg' src={facebook}/>
            <img className='linkImg' src={twitter}/>
            <img className='linkImg' src={youtube}/>
            <img className='linkImg' src={instagram}/>
            </div>

        </form>
    </section>
    
  )
}

export default Contact
