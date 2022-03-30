import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href='https://www.linkedin.com/in/girmagizachew/' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/Girma32' target='_blank'>
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
