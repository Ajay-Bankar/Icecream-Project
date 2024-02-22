import React from 'react';
import Card from './Card';


const imageUrls = [
    {
        imgurl: 'https://images.unsplash.com/photo-1563589173312-476d8c36b242?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWNyZWFtfGVufDB8fDB8fHww',
        title:"img1",
        description:"icecream, Food, Ice Cream, Mint"
    },
    {
        imgurl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGljZWNyZWFtfGVufDB8fDB8fHww',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'https://images.unsplash.com/photo-1532678465554-94846274c297?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWNyZWFtfGVufDB8fDB8fHww',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'https://images.unsplash.com/photo-1531240062960-4842b265a1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGljZWNyZWFtfGVufDB8fDB8fHww',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'https://images.unsplash.com/photo-1614014077943-840960ce6694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGljZWNyZWFtfGVufDB8fDB8fHww',
        title:"img1",
        description:"icecream, Food, Ice Cream, Mint"
    },
    {
        imgurl: 'https://plus.unsplash.com/premium_photo-1671980819443-e8bbeec85840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGljZWNyZWFtfGVufDB8fDB8fHww',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:"img1",
        description:"something"
    },
    {
        imgurl: 'https://images.unsplash.com/photo-1532678465554-94846274c297?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWNyZWFtfGVufDB8fDB8fHww',
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