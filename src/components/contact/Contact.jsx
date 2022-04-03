import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u9bhf2d',
        'template_lbn3arm',
        form.current,
        'nV0nuVlPLQMlejRun'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <HiOutlineMail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>girmagizachew2016@gmail.com</h5>
            <a href='mailto:girmagizachew2016@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact-option'>
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messanger</h4>
            <h5>Girma Gizachew</h5>
            <a
              href='https://m.me/profile.php?id=100078990104384'
              target='_blank'
            >
              Send a message
            </a>
          </article>
          <article className='contact-option'>
            <FaWhatsapp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>+5712772637</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+15712772637'
              target='_blank'
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='username'
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            name='user_email'
            placeholder='Your Email'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
