import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export const NavBar = () => {
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
            Resumè
          </button>
        </li>
      </ul>
    </nav>
  );
};

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  {
    name: "Experience",
    href: "/experience",
    current: false,
  },
  {
    name: "Projects",
    href: "/projects",
    current: false,
  },
  {
    name: "Contact",
    href: "/contact",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Example() {
  return (
    <Disclosure as="nav" className=" bg-navy200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <div class="headline">
                    <span className="font-bold">Engineer</span>
                    <span className="font-bold text-indigo-600">Danny</span>
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        exact
                        to={item.href}
                        // activeStyle="bg-gray-900 text-white"
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={"/#" + item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
