import React from 'react';
import './about.css';
import ME from '../../asserts/20200407_202052.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about-container'>
        <div className='about-me'>
          <img src={ME} alt='About me' />
        </div>
        <div className='about-content'>
          <p>
            I’m an emerging developer working with a diverse tech stack as well
            as a broad creative skill set to build full-stack apps and websites.
            I am committed to making sure things are done correctly and will do
            everything within my scope to produce the best results for the task
            at hand. I pride myself in being productive to ensure each task
            placed upon me is done in a timely manner. I am self-motivated and
            fueled by my individual goals I set for myself, and expectations
            others have for me. I'm also passionate about the code that is
            written, and the team members I interact with. I strongly believe
            that having communication & a solid team is key in developing
            innovative projects.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
