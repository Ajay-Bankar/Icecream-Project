import React from 'react'

const Blogcard = ({ img, desc }) => {
  return (

    <div className=' hover:translate-y-3 transform ease-in-out duration-1000 shadow-2xl p-7 hover:bg-amber-400  '>
      <img className=' w-[430px] h-[200px] object-cover border-2 border-blue-400 border-double hover:rounded-full ease-in-out transform duration-1000' src={img} alt="" />


      <div>

        <p className=' mt-4  hover:underline hover:font-serif underline-offset-auto text-center'>{desc}</p>
      </div>




    </div>


  )

}

export default Blogcard