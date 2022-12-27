import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ocgvkpy', 'template_1702f5u', form.current, 'M3KXh0ETMjYo6KU0H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>matitl@hotmail.com</h5>
            <a href='mailto:matitl@hotmail.com' target='_blank'> Send a messege</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+542392562725</h5>
            <a href='https://api.whatsapp.com/send?phone=542392562725' target='_blank'> Send a messege</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required></input>
          <input type='email' name='email' placeholder='Your Full Email' required></input>
          <textarea name="messege" rows="7" placeholder='Your Messege' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messege</button>
        </form>
      </div>
    </section>
  )
}

export default Contact