import React, { useState } from 'react';
import arrowRight from '../images/icon-arrow.svg';
import right from '../images/icon-angle-right.svg';
import left from '../images/icon-angle-left.svg';

const data = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    desc: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    mobile: './images/mobile-image-hero-1.jpg',
    desktop: './images/desktop-image-hero-1.jpg',
  },
  {
    id: 2,
    title: 'We are available all across the globe',
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: './images/mobile-image-hero-2.jpg',
    desktop: './images/desktop-image-hero-2.jpg',
  },
  {
    id: 3,
    title: 'Manufactured with the best materials',
    desc: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    mobile: './images/mobile-image-hero-3.jpg',
    desktop: './images/desktop-image-hero-3.jpg',
  },
];
const Slider = () => {
  const [slides] = useState(data);
  const [slideIndex, setSlideIndex] = useState(1);

  const handleNextSlideClick = index => {
    if (slideIndex !== slides.length) {
      setSlideIndex(prevIndex => prevIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };
  const handlePrevSlideClick = index => {
    if (slideIndex !== 1) {
      setSlideIndex(prevIndex => prevIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  return (
    <>
      <section className="transition-all-duration-5s">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={
              slideIndex === index + 1
                ? 'grid grid-cols-1 lg:grid-cols-2'
                : 'hidden'
            }
          >
            <div className="relative overflow-hidden">
              <picture>
                <source media="(min-width: 768px)" srcset={slide.desktop} />
                <img
                  className="w-full object-cover"
                  src={slide.mobile}
                  alt={slide.title}
                />
              </picture>
              <ul className="absolute -bottom-3 right-0 flex">
                <li>
                  <button
                    onClick={handlePrevSlideClick}
                    className="bg-black hover:bg-gray-800 transition-all-5s"
                  >
                    <img className="p-6" src={left} alt="btn" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleNextSlideClick}
                    className="bg-black hover:bg-gray-800 transition-all-duration-300"
                  >
                    <img className="p-6" src={right} alt="btn" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="content-info p-8 lg:p-20 lg:my-20">
              <h1 className="text-3xl text-slate-900 lg:text-5xl">
                {slide.title}
              </h1>
              <p className="text-slate-400 my-8">{slide.desc}</p>
              <button
                className="flex items-center gap-5 uppercase hover:opacity-40"
                style={{ letterSpacing: '0.8rem' }}
              >
                Shop Now <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Slider;
