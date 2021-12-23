import { NavLink, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import mylogo from "../assets/logo.png"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  const location = useLocation();
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
                  <img src={mylogo} alt="" srcset="" className="h-7 w-7 rounded-full md:mr-10 mr-3" />
                  <div class="headline">
                    <span className="font-bold">Engineer</span>
                    <span className="font-bold text-indigo-600">Danny</span>
                  </div>
                </div>
                <div className="hiddem sm:flex-1"></div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        exact
                        to={item.href}
                        // activeStyle="bg-gray-900 text-white"
                        className={classNames(
                          "text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl",
                          "px-3 py-2 rounded-md text-sm font-medium border",
                          location.pathname === item.href
                            ? "border-indigo-600  "
                            : " border-transparent"
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
                    location.pathname === item.href
                      ? "bg-indigo-600  text-white"
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
