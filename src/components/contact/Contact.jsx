import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g6s0gah', 'template_op6nfj2', form.current, {
        publicKey: 'vUoHZku6hAXfdGWMl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danijelmiklosi2001@gmail.com</h5>
            <a href="mailto:danijelmiklosi2001@gmail.com"  target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Danijel Mikloši</h5>
            <a href="https://www.linkedin.com/in/danijel-mikloši-1b9277231/"  target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' value="Send" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact