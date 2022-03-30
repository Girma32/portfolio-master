import React from 'react';
import './portfolio.css';
import IMG1 from '../../asserts/Amazone.jpeg';
import IMG2 from '../../asserts/Apple.jpeg';
import IMG3 from '../../asserts/Netflix.jpeg';
// import IMG4 from "../../asserts/Robinhood.jpeg";
// import IMG5 from "../../asserts/Zoom.jpeg";

//it can be get with UseEffect hook
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Amazon replica website built from scratch using React',
    github: 'https://github.com/Girma32',
    demo: 'https://e-clonegb.web.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Apple replica website built from scratch using React',
    github: 'https://github.com/Girma32',
    demo: '',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Netflix replica website built from scratch using React',
    github: 'https://github.com/Girma32',
    demo: 'https://netflix-girma-82a6c.firebaseapp.com/',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio-item'>
              <div className='portfolio-item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-cta'>
                <a href={github} className='btn' target='_blank'>
                  GitHub
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
