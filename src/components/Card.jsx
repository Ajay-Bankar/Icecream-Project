import React, { useState } from 'react';
import ItemComponent from './ItemComponent';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, imgurl }) => {
  const [showShareIcons, setShowShareIcons] = useState(false);
  const [showSocialMediaIcons, setShowSocialMediaIcons] = useState(false);
  const readmore = useNavigate();

  const handleShareIconHover = () => {
    setShowShareIcons(true);
    setShowSocialMediaIcons(true);
  };

  const handleShareIconLeave = () => {
    setShowShareIcons(false);
    // You might want to delay hiding social media icons to allow moving the mouse to them
    setTimeout(() => {
      setShowSocialMediaIcons(false);
    }, 7000); // Adjust the delay as needed
  };

  return (
    <div className='mx-w-sm rounded hover:scale-105 overflow-hidden shadow-lg relative check'>
      <img className='w-[400px] h-[200px] object-cover' src={imgurl} alt="" />

      <div className=''>
        <h5 className='font-bold text-xl text-center'>{title}</h5>
        <p className='text-gray-800 text-base text-center mt-2 mb'>{description}</p>
      </div>

      <div className='flex justify-evenly'>
        <button className='w-[100px] animate-opacity hover:opacity-0 bg-green-500 text-white p-1 mt-2 mb-2 rounded-xl'>
          Order Now
        </button>
        <div
          className=' inline-block'
          onMouseEnter={handleShareIconHover}
          onMouseLeave={handleShareIconLeave}
        >
           </div>
          <button onClick={() => readmore("/detail")} className='w-[100px] bg-blue-500 text-white p-2 mt-2 mb-2 rounded-xl'>
            Read More
          </button>
       

      </div>

      <div className='absolute top-2 left-56 ml-2 check1'>
        <div onMouseEnter={handleShareIconHover} onMouseLeave={handleShareIconLeave}>
          <i className='text-2xl text-white hover:cursor-pointer p-1 fa-solid fa-share'></i>
        </div>
        {/* <ItemComponent /> */}
        {(showShareIcons || showSocialMediaIcons) && (
          <div className='absolute top-10 right-0 flex flex-col space-y-2 p-2 bg-white border rounded-md shadow-md'>
            {showSocialMediaIcons && (
              <>
                <i className="fa-brands fa-youtube text-xl"></i>
                <i className="fa-brands fa-square-instagram text-xl"></i>
                <i className="fa-brands fa-square-whatsapp text-xl"></i>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
