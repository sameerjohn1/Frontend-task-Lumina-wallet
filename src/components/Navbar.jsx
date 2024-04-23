import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logocopy from "../assets/logo copy.png";
import group from "../assets/Group 7.png";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="bg-black max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0 ">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        {/* <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block " /> */}
        <div className="flex gap-2 items-center">
          <a href="/" className="md:block">
            <img src={logocopy} alt="" />
          </a>
          <h4 className="text-xl text-white">Lumina wallet</h4>
        </div>

        <div className="text-lg  text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <img src={group} alt="" />
          </a>
          <a href="/" className="flex items-center gap-2 text-white">
            English
          </a>

          <a
            href="/"
            className="px-3 py-2  flex items-center text-medium buttonlinear rounded-md text-white font-medium"
          >
            Connect Wallet
          </a>
        </div>
        {/* navbar for sm devices */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpenMenu ? (
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* only mobile menu items */}
      <div>
        <ul
          className={`font-light text-sm bg-Black text-white px-4 py-2 rounded 
          ${isOpenMenu ? "" : "hidden"} `}
        >
          <a href="/" className="flex py-2 ">
            <img src={group} alt="" />
          </a>
          <a href="/" className="flex   ">
            English
          </a>

          <a
            href="/"
            className="px-3 py-2  flex items-center text-xl buttonlinear rounded-md text-white"
          >
            Connect Wallet
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
