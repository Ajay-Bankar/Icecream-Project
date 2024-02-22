import React from 'react';
import Blogcard from './Blogcard';



const imgData = [
    {
        img: 'public/images/images/2.jpg',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/3.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/4.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/5.jpg',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/6.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/7.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/8.jpg',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/images/9.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },



];






const BlogCardImage = () => {
   

    return (
        
        <div >
            <div className=' grid grid-cols-1 sm:grid-cols-4 px-10 py-10 text-red-700 gap-8'>
                {imgData.map((card, index) => (
                   <Blogcard{...card}/>
                ))}
            </div>
        </div>
    );
};

export default BlogCardImage ;