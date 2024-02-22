import React from 'react'

const NaivedyaFooter = () => {



    return (
        <div className='bg-gray-800' >

            <div className=' flex justify-center  '>
                <img className=' b sm:w-[200px] shadow-2xl sm:h-[160px] w-[100px] h-[80px] animate-pulse rounded-b-full' src="public/images/images/naivedya.jpg " alt="" />
            </div>

            <div className=' sm:grid sm:grid-cols-4 grid grid-cols-1 p-10 text-white'>

                <div>
                    <h1 className='  mt-3 sm:text-2xl sm:font-bold text-xl font-bold '>Management</h1>
                    <p className=' mt-2'>Expertise</p>
                    <p>Achievements</p>
                    <p>Why to Join Us</p>
                    <p>Director Profile</p>
                </div>

                <div>
                    <h1 className='  mt-3 sm:text-2xl sm:font-bold text-xl font-bold '>Restaurants</h1>
                    <p className=' mt-2'>Ghole Road Pune</p>
                    <p>Sambhaji Nagar - Cidco</p>
                    <p>Sambhaji Nagar - Waluj</p>
                    <p>Pandharpur</p>
                </div>

                <div>
                    <h1 className='  mt-3 sm:text-2xl sm:font-bold text-xl font-bold'>Policy Info</h1>
                    <p className=' mt-2'>Terms & Conditions</p>
                    <p className=' '>Privacy Policy</p>
                    <p className=''>Shipping Policy</p>
                    <p>Cancellation Policy</p>
                    <p>Feedback</p>
                </div>

                <div>
                    <h1 className='  mt-3 sm:text-2xl sm:font-bold text-xl font-bold'>Contact Us</h1>
                    <p className=' mt-2'>Beside Sakal Office, Jalna Road, CIDCO, Ch.Sambhaji Nagar, Maharastra (India) - 431136.</p>
                    <p>91-94231 48098 , 91-95959 89595</p>

                    <div className=' mt-8 flex gap-3'>
                        <i className="fa-brands fa-facebook     text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400  border-black rounded-full "></i>
                        <i className="fa-brands fa-x-twitter    text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400 border-black rounded-full"></i>
                        <i className="fa-brands fa-whatsapp    text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400  border-black rounded-full "></i>

                        <i className="fa-brands fa-instagram    text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400 border-black rounded-full "></i>
                        <i className="fa-brands fa-youtube    text-2xl hover:translate-y-[-30px] transition-all duration-1000 hover:text-yellow-400  border-black rounded-full "></i>


                    </div>



                </div>





            </div>
            <div className=' '>
                <hr />

                <div className=' text-center text-white'>
                    <p className=' text-xs flex justify-center mt-5 mb-5'>© Copyright 2024 Naivedya Thali, Ch.Sambhaji Nagar </p>
                    <p className=' text-xs flex justify-center sm:mt3 mt-3 ' >Copyright @ 2024 | All rights reserved Designed & Developed by Mk e-Tech Pvt.Ltd</p>



                </div>
            </div>



        </div>

    )
}

export default NaivedyaFooter
