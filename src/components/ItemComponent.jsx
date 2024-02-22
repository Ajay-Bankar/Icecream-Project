// src/components/ItemComponent.js
import React, { useState } from 'react';

const ItemComponent = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
      alert('item clicked')
   
    };
  
    const heartStyle = {
      cursor: 'pointer',
      
      color: isClicked ? 'red' : 'white', // Change color based on click state
      backgroundColor: isClicked ? 'white' : '', // Change background color based on click state
      padding:'0px'
        
      
      
    };
  
    return (
      <div onClick={handleClick} style={heartStyle}>
     <i className=" text-2xl  p-1 fa-solid fa-heart"></i>
     
      </div>
    );
};

export default ItemComponent;
