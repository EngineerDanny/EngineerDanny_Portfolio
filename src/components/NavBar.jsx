import React, { useState } from "react";
import logo from "../assets/my-pic.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    setHasScrolledDown(prevScrollPos <= currentScrollPos);
    prevScrollPos = currentScrollPos;
  };
  //add style for when item(selected) is active
  const mActiveStyle = {
    color: "rgba(16, 185, 129, 1)",
    paddingBottom: "5px",
    borderColor: "rgba(16, 185, 129, 1)",
    borderBottomWidth: "1px",
    
  };
  return (
    <nav
      className={` fixed ${
        hasScrolledDown ? "-top-40" : "top-0"
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
          <NavLink exact to="/" activeStyle={mActiveStyle}>
            Home
          </NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/about" activeStyle={mActiveStyle}>
            About
          </NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/experience" activeStyle={mActiveStyle}>
            Experience
          </NavLink>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <NavLink to="/projects" activeStyle={mActiveStyle}>
            Projects
          </NavLink>
        </li>
        <li class="mx-2">
          <button
            className="text-sm px-5 py-1.5 border-2 border-green-500 s focus:outline-none
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
