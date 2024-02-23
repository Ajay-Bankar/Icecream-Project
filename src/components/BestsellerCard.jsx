
import React from 'react'

const BestsellerCard = ({ img, title, }) => {
    return (

        <div>
            <div>
                <img className=' ' src={img} alt="" />
                <p className=' font-bold text-center mt-3'>{title}</p>

            </div>
            <div className=' flex justify-center'>
                <div className='  mt-5 border-2 border-green-900 w-[100px] flex justify-center rounded-lg p-2   '>

                    <button className=' sm:text-center text-sm:  sm:font-bold '>Buy Now</button>

                </div>
            </div>






        </div>


    )

}

export default BestsellerCard