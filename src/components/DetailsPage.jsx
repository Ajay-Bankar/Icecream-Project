// DetailsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailsPage = ({ match }) => {
  const back = useNavigate();

  // Assuming you have a product object
  const product = {
    name: 'Product Name',
    description: 'Product Description',
    ratings: 4.5,
    price: '$50.00',
    image: 'https://images.unsplash.com/photo-1568464774940-a3de36f824a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGljZWNyZWFtfGVufDB8fDB8fHww',
  };

  return (
    <div>
      <h2 className=' text-center mt-7 mb-6'>Product Details</h2>

      <div className=' flex justify-center sm:gap-20 gap-5 p-2' >
        <div>
          <img className=' sm:w-[400px] sm:h-[300px] object-cover w-[200px] h-[100px] mt-2 ' src={product.image} alt={product.name} />
        </div>

        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Ratings: {product.ratings}</p>
          <p>Price: {product.price}</p>
        </div>
      </div>

      <button onClick={() => back("/product")} className='w-[100px] bg-blue-500 text-white p-2 mt-2 mb-2 rounded-xl'>Back</button>
    </div>
  );
};

export default DetailsPage;
