import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <div className='bg-[#4b6584] w-ful'>
      <FooterIcon/>

      <div className='w-11/12  grid grid-cols-1  sm:grid-cols-4 md:grid-cols-4 text-center  text-white mt-3'>
        <section className=' mb-4 py-3 flex flex-col gap-2  '>
          <div>
            <h1 className='text-xl font-bold mb-2'>Help</h1>
          </div>
          <div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Track Your Order</a><br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Chat with Us</a><br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Support</a><br />
            </div>
          </div>
        </section>

        <section className=' mb-4 py-3 flex flex-col gap-2   '>
          <div>
            <h1 className='text-xl font-bold mb-2'>Contact Us</h1>
          </div>
          <div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>CONTACT US</a> <br />
            </div>
            <div className='hover-scale'>
              <a href='tel:9946037777' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>9946037777</a> <br />
            </div>
            <div className='hover-scale'>
              <a href='mailto:support@lazza.co.in' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>support@lazza.co.in</a>
            </div>
          </div>
        </section>

        <section className=' mb-4   py-3 flex flex-col gap-2  '>
          <div>
            <h1 className='text-xl font-bold mb-2'>About Us</h1>
          </div>
          <div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Our History</a><br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Privacy Policy</a><br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Cancellation Policy</a><br />
            </div>
          </div>
        </section>

        <section className='mb-4   py-3 flex flex-col gap-2   '>
          <div>
            <h1 className='text-xl font-bold mb-2'>Products</h1>
          </div>
          <div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Offers</a> <br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>About Us</a> <br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Want to be a Distributor?</a><br />
            </div>
            <div className='hover-scale'>
              <a href='#' className='text-sm hover-underline hover:text-yellow-400 transition-all duration-300'>Contact Us</a>
            </div>
          </div>
        </section>
      </div>
      

      {/* <WhatsAppIcon /> */}
    </div>
  );
};

export default  Footer;