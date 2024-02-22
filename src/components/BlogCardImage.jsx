import React from 'react';
import Blogcard from './Blogcard';



const imgData = [
    {
        img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://thumbs.dreamstime.com/b/neapolitan-ice-cream-15779155.jpg',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://media.istockphoto.com/id/1396897706/photo/vanilla-soft-serve-ice-cream-cone.jpg?s=1024x1024&w=is&k=20&c=HZESqo8KHrjKvELLHX908rgVLYfa5UmUy6nL22pf0DI=',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D',
       
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://images.unsplash.com/photo-1591677445539-840cc64705f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGljZWNyZWFtfGVufDB8fDB8fHww',
        
        desc:"icecream, Food, Ice Cream, Mint"
    },
    {
        img: 'https://images.unsplash.com/photo-1586769412527-ab0855979b2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D',
       
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