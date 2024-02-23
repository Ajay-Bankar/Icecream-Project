import React from 'react';

import BestsellerCard from './BestsellerCard';



const imgData = [
    {
        img: 'https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Zulubar_.webp?itok=mTbCLWeE',
        title:'Zulubar'
        
       
    },
    {
        img: 'https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Triple%20Chocolate-00.webp?itok=pGJHcd0-',
        title:'Triple Chocolate'
       
    },
    {
        img: 'https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Chocolate%20cone_0.webp?itok=UOWbFJ2p',
        title:'Chocolate Cone'
      
    },
    {
        img: 'https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Aam%20Candy-Product-detail.webp?itok=7xnXetzc',
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