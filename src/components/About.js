import React from 'react';
import darkImage from '../images/image-about-dark.jpg';
import lighImage from '../images/image-about-light.jpg';

const About = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="image-dark">
            <img className="w-full" src={darkImage} alt="about-dark" />
          </div>
          <div className="about-info-content p-8 lg:p-20">
            <h2
              className="uppercase font-semibold text-2xl lg:text-3xl"
              style={{ letterSpacing: '5px' }}
            >
              About our furniture
            </h2>
            <p className="text-slate-400 mt-8">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="image-light">
            <img className="w-full" src={lighImage} alt="about-light" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
