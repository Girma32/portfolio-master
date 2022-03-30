import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../asserts/20200407_202052.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I,m</h5>
        <h1>Girma Gizachew</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='Girma Gizachew' />
        </div>
        <a href='#contact' className='scroll-down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
