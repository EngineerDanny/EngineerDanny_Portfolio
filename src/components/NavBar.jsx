import React from "react";
import logo from "../assets/my-pic.jpg";
import { Link } from "react-router-dom";

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
          <Link to="/home">Home</Link>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <Link to="/about">About</Link>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <Link to="/experience">Experience</Link>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <Link to="/projects">Work</Link>
        </li>
        <li class="text-sm mx-2 text-gray-300 hover:text-green-500">
          <Link to="/#contact">Contact</Link>
        </li>
        <li class="mx-2">
          <button
            className="text-sm px-4 py-2 border-2 border-green-500 s focus:outline-none
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
