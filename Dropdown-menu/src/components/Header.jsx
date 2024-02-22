import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mangesh from "../pages/Mangesh";


const navData = [
  { title: "Home", linkTo: "/" },
  { title: "Mangeshbhai", linkTo: "mangesh"},
  { title: "About Us", linkTo: "about" },
  { title: "Products", linkTo: "product"},
  { title: "Blogs", linkTo: "blog"}
 
]; 
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[]">
      <div>

        <div className='w-full bg-red-700 p-1 text-center flex justify-between px-2'>
          <h1 className=' text-white font-semibold'><i className="fa-solid fa-envelope mr-2"></i>bankarajay116@gmail.com</h1>
          <h1 className=' text-white font-semibold'><i className="fa-solid fa-phone"></i> 7030301426</h1>

        </div>
      </div>

      <div className="w-full     text-blue-700 text-xl font-serif   bg-[#d4bfad] sm:flex sm:justify-around sm:w-full ">

        <div className=" w-full m-auto flex sm:justify-start sm:w-2/12 sm:mt-9">
          <img
            className=" m-auto w-[200px] h-[200px] sm:w-[100px] sm:h-[100px] "
            src="https://png.pngtree.com/png-clipart/20220509/original/pngtree-abstract-simple-ice-crame-logo-with-stars-png-image_7691359.png"
            alt="CreamnJoy Logo"
          />
        </div>

        <div className="w-full flex justify-center sm:w-5/12 sm:mb-14">
          <form className="d-flex mt-20" role="search">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary text-white hover:bg-green-800">
              Search
            </button>
          </form>
        </div>

       


        <nav className="w-full flex justify-center sm:justify-end sm:align-top sm:w-9/12">
          <ul className=" text-sm flex mt-20 gap-7 px-3 py-2 font-Teko sm:text-xl">
            <li className="font-semibold">
              <Link to={""}>Home</Link>
            </li>

            <li className="font-semibold">
              <Link to={"/about"}>About US</Link>
            </li>



            <li className="font-semibold">
              <Link to={"/product"}>Products</Link>

            </li>

            <li className="font-semibold">
              <Link to={"/blog"}>Blog</Link>
            </li>

            <li>
              <div >
                <a
                  href="https://www.professionalcourier.in/courier-tracking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="animate-opacity  text-black hover:text-red-900 transition-all duration-1000 border-b-2 border-black border-dashed   ">Track Order</div>
                </a>
              </div>
            </li>
          </ul>
        </nav>


      </div>

    </header>
  );
};

export default Header;

