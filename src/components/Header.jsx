import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const navData = [
  { title: "Home", linkTo: "/" },
  { title: "About Us", linkTo: "about" },
  { title: "Product", linkTo: "product" },
  { title: "blog", linkTo: "blog" }
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-red-700 p-1 text-center flex justify-between px-2">
        <h1 className="text-white font-semibold">
          <i className="fa-solid fa-envelope mr-2"></i>bankarajay116@gmail.com
        </h1>
        <h1 className="text-white font-semibold">
          <i className="fa-solid fa-phone"></i> 7030301426
        </h1>
      </div>

      {/* Main Header */}
      <div className="w-full text-blue-700 text-xl font-serif bg-[#d4bfad] sm:flex sm:justify-around sm:w-full ">
        <div className="w-full m-auto flex sm:justify-start sm:w-2/12 sm:mt-9">
          <img
            className="m-auto w-[200px] h-[200px] sm:w-[100px] sm:h-[100px]"
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

        <nav className="w-full flex justify-center sm:justify-between sm:align-top sm:w-9/12">
          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            {open ? (
              <IoClose onClick={() => setOpen(false)} className="text-2xl cursor-pointer" />
            ) : (
              <IoMenuSharp onClick={() => setOpen(true)} className="text-2xl cursor-pointer" />
            )}
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              open ? "flex flex-col items-center" : "hidden"
            } text-sm mt-2 gap-7 px-3 py-2 font-Teko sm:flex sm:text-xl`}
          >
            {navData.map((item) => (
              <li key={item.title} className="font-semibold">
                <Link to={item.linkTo} onClick={() => setOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.professionalcourier.in/courier-tracking"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <div className="animate-opacity text-black hover:text-red-900 transition-all duration-1000 border-b-2 border-black border-dashed">
                  Track Order
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
