import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai"; /* react icons website */

function Navbar() {
  const [nav, setNav] =
    useState(false); /*  if the (nav = True) side bar showen*/

  const handlenav = () => {
    setNav(!nav); /* Toggle between True and False*/
  };
  return (
    <div className="flex text-black justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {" "}
      {/* max-w-[1240px] make the max widht manualy*/}
      <h1 className="w-full text-3xl ml-2 font-bold text-[rgb(226,119,34)]">Replace.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 flex items-center hover:text-[rgb(226,119,34)] transition-colors duration-100 font-medium cursor-pointer">
          Home
        </li>
        <li className="p-4 flex items-center hover:text-[rgb(226,119,34)] transition-colors duration-100 font-medium cursor-pointer">
          Company
        </li>
        <li className="p-4 flex items-center hover:text-[rgb(226,119,34)] transition-colors duration-100 font-medium cursor-pointer">
          Resources
        </li>
        <li className="p-4 flex items-center hover:text-[rgb(226,119,34)] transition-colors duration-100 font-medium cursor-pointer">
          About
        </li>
        <li className="p-4 flex items-center hover:text-[rgb(226,119,34)] transition-colors duration-100 font-medium cursor-pointer">
          Contact
        </li>
      </ul>
      <div onClick={handlenav} className="block md:hidden sticky ">
        {" "}
        {/* if the div that have the icon got clicked toggle between cancel and menu icon using nav variable */}
        {!nav ? (
          <AiOutlineClose size={25} color="rgb(226,119,34)"  />
        ) : (
          <AiOutlineMenu size={25} color="rgb(226,119,34)" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r h-full ease-out pt-12 duration-500 md:hidden bg-white "
            : "fixed left-[-100%]"
        }
      >
        {/* if the nav = True have the class fixed ... else have the class fixed and left-[-100%] to go beside the main screen*/}
        {/* (we used md:hidden : it mean when we reach the medium break point hidden the icon we used also in the top for the div of the navbar)*/}
        <h1 className="w-full text-4xl font-bold text-[rgb(226,119,34)] ml-2 pl-3">
          Replace.
        </h1>
        <ul className="p-4 uppercase text-black">
          <li className="my-7  font-medium cursor-pointer  hover:text-[rgb(226,119,34)] transition-colors duration-100 ">
            Company
          </li>
          <li className="my-7  font-medium cursor-pointer  hover:text-[rgb(226,119,34)] transition-colors duration-100 ">
            Home
          </li>
          <li className="my-7  font-medium cursor-pointer  hover:text-[rgb(226,119,34)] transition-colors duration-100 ">
            Resources
          </li>
          <li className="my-7  font-medium cursor-pointer  hover:text-[rgb(226,119,34)] transition-colors duration-100 ">
            About
          </li>
          <li className="my-7  font-medium cursor-pointer  hover:text-[rgb(226,119,34)] transition-colors duration-100 ">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
