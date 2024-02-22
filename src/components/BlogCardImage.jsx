import React from 'react';
import Blogcard from './Blogcard';



const imgData = [
    {
        img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/6.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/5.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/4.jpg',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/3.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/2.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/1.jpg',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'public/images/8.jpg',
       
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