import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>
        Girma
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>

        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>

        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer-socials'>
        <a
          href='https://www.facebook.com/profile.php?id=100078990104384'
          target='_blank'
        >
          <BsFacebook />
        </a>
        <a href='https://www.instagram.com/girma5140/' target='_blank'>
          <BsInstagram />
        </a>
        <a href='https://twitter.com/home' target='_blank'>
          <BsTwitter />
        </a>
      </div>

      <div className='footer-copyright'>
        <small>&copy;Girma. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
