import React from 'react';

import BestsellerCard from './BestsellerCard';



const imgData = [
    {
        img: 'public/images/images/bestseller1.webp',
        title:'Zulubar'
        
       
    },
    {
        img: 'public/images/images/bestseller2.webp',
        title:'Triple Chocolate'
       
    },
    {
        img: 'public/images/images/bestseller3.webp',
        title:'Chocolate Cone'
      
    },
    {
        img: 'public/images/images/bestseller4.webp',
        title:'Aam'
       
    }
    



];






const BestsellerCardImages = () => {
   

    return (
        
        <div >
            <div className=' grid grid-cols-1 sm:grid-cols-4 px-10 py-10 text-red-700 gap-8'>
                {imgData.map((card, index) => (
                //    <Blogcard{...card}/>
                   <BestsellerCard{...card}/>
                ))}
            </div>
        </div>
    );
};

export default BestsellerCardImages ;