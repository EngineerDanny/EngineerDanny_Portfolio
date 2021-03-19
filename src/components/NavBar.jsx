import React from "react";
import logo from "../assets/my-pic.jpg";

const NavBar = () => {
  return (
    <nav className="flex flex-row p-5 items-center justify-between">
      <img
        src={logo}
        className=" w-10 h-10 rounded-3xl object-cover"
        alt="MyPicture"
      />
      <ul className="flex flex-row items-center">
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <a href="/#about">About</a>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <a href="/#jobs">Experience</a>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <a href="/#projects">Work</a>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <a href="/#contact">Contact</a>
        </li>
        <li class="mx-2">
          <button className="text-sm px-4 py-2 border-2 border-green-500 
          rounded-full text-green-500 hover:bg-green-500 hover:text-white">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
