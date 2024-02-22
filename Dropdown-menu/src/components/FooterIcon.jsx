import React from 'react';

const FooterIcon = () => {
  return (
    <div>
      <div>
        <div className='text-white text-4xl flex flex-col md:flex-row justify-center items-center gap-x-8 p-5'>
          <ul className="flex gap-8">
            <li className='hover:translate-y-[-50px] transition-all duration-1000'>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin hover:text-[#ffd600]"></i>
              </a>
            </li>
            <li className='hover:translate-y-[-50px] transition-all duration-1000'>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram hover:text-[#ffd600]"></i>
              </a>
            </li>
            <li className='hover:translate-y-[-50px] transition-all duration-1000'>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter hover:text-[#ffd600]"></i>
              </a>
            </li>
            <li className='hover:translate-y-[-50px] transition-all duration-1000'>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook hover:text-[#ffd600]"></i>
              </a>
            </li>
            <li className='hover:translate-y-[-50px] transition-all duration-1000'>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube hover:text-[#ffd600]"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterIcon;
