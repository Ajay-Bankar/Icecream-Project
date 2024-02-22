import React from 'react';
import Card from './Card';


const imageUrls = [
    {
        imgurl: 'public/images/8.jpg',
        title:"img1",
        description:"icecream, Food, Ice Cream, Mint"
    },
    {
        imgurl: 'public/images/9.jpg',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'public/images/10.jpg',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'public/images/11.jpg',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'public/images/12.jpg',
        title:"img1",
        description:"icecream, Food, Ice Cream, Mint"
    },
    {
        imgurl: 'public/images/13.jpg',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'public/images/14.jpg',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'public/images/15.jpg',
        title:"img1",
        description:"something"
    },



];






const ImageList = () => {
   

    return (
        
        <div >
            <div className=' grid grid-cols-1 sm:grid-cols-4 px-10 py-10 text-red-700 gap-8'>
                {imageUrls.map((card, index) => (
                   <Card {...card}/>
                ))}
            </div>
        </div>
    );
};

export default ImageList;