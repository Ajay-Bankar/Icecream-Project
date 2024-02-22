import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-center sm:justify-end sm:align-top sm:w-9/12">
      {/* Burger icon */}
      <div className="burger-icon sm:hidden" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>

      {/* Navigation menu */}
      <ul className={`text-sm flex mt-20 gap-7 px-3 py-2 font-Teko sm:text-xl ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li className="font-semibold">
          <Link to={""} onClick={toggleMenu}>Home</Link>
        </li>
        <li className="font-semibold">
          <Link to={"/about"} onClick={toggleMenu}>About US</Link>
        </li>
        <li className="font-semibold">
          <Link to={"/product"} onClick={toggleMenu}>Products</Link>
        </li>
        <li className="font-semibold">
          <Link to={"/blog"} onClick={toggleMenu}>Blog</Link>
        </li>
        <li>
          <div>
            <a
              href="https://www.professionalcourier.in/courier-tracking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="animate-opacity text-black hover:text-red-900 transition-all duration-1000 border-b-2 border-black border-dashed">Track Order</div>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
