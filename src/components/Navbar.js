import React, { useState } from 'react';
import logo from '../images/logo.svg';
import menuHamburger from '../images/icon-hamburger.svg';
import menuIconClose from '../images/icon-close.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpenAndClose = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  return (
    <>
      <div className="absolute z-10 p-10 w-full flex items-center justify-center lg:items-center lg:justify-start">
        <div className="logo">
          <img className="lg:mr-10" src={logo} alt="room homepage" />
        </div>
        <div
          className={
            menuOpen
              ? 'bg-black bg-opacity-70 h-screen absolute left-0 top-0 bottom-0 right-0'
              : 'bg-transparent'
          }
        ></div>
        <nav
          className={
            menuOpen
              ? 'bg-white w-full  top-0  left-0 py-6 shadow-lg transition-all ease-in-out duration-200'
              : 'bg-white w-full  top-0  lg:relative lg:left-0 py-6 shadow-lg lg:py-0 lg:w-auto lg:bg-transparent lg:shadow-none transition-all ease-out duration-200'
          }
        >
          <ul className="flex items-center justify-center gap-4">
            <li>
              <a
                className="border-b-2 border-transparent hover:border-gray-900 transition-all duration-500 lg:text-white lg:hover:border-white"
                href="/"
              >
                home
              </a>
            </li>
            <li>
              <a
                className="border-b-2 border-transparent hover:border-gray-900 transition-all duration-500 lg:text-white lg:hover:border-white"
                href="/"
              >
                shop
              </a>
            </li>
            <li>
              <a
                className="border-b-2 border-transparent hover:border-gray-900 transition-all duration-500 lg:text-white lg:hover:border-white"
                href="/"
              >
                about
              </a>
            </li>
            <li>
              <a
                className="border-b-2 border-transparent hover:border-gray-900 transition-all duration-500 lg:text-white lg:hover:border-white"
                href="/"
              >
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="absolute left-10 z-20 lg:hidden">
          {menuOpen ? (
            <button onClick={handleMenuOpenAndClose}>
              <img src={menuIconClose} alt="hamburger menu icon" />
            </button>
          ) : (
            <button onClick={handleMenuOpenAndClose}>
              <img src={menuHamburger} alt="hamburger menu icon" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
