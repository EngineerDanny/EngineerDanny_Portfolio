import React, { useState } from "react";
import logo from "../assets/my-pic.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isScrolledUp, setisScrolledUp] = useState(false);  
  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    setisScrolledUp(prevScrollPos <= currentScrollPos);
    prevScrollPos = currentScrollPos;
  };

  return (
    <nav
      className={` fixed ${
        !isScrolledUp ? "top-0" : "-top-40"
      } flex flex-row p-5 items-center justify-between 
      transition-all duration-500 w-full z-10 shadow-lg h-16 backdrop-blur`}
    >
      <img
        src={logo}
        className=" w-10 h-10 rounded-3xl object-cover"
        alt="MyPicture"
      />
      <ul className="flex flex-row items-center">
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/home" calss>Home</NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/about">About</NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/projects">Work</NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li class="mx-2">
          <button
            className="text-sm px-4 py-1 border-2 border-green-500 s focus:outline-none
          rounded-full text-green-500 hover:bg-green-500 hover:text-white"
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
