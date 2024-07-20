"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import ThemeChanger from "./ThemeSwitcher";
import SideBar from "./Sidebar";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="bg-gray-100 bg-opacity-10 dark:bg-gray-900 dark:bg-opacity-10
       backdrop-blur-xl backdrop-opacity-90 w-full fixed top-0 z-50"
      >
        <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center text-xl 
              border-[2px] border-spacing-4 dark:border-orange-300 dark:text-orange-300
               border-orange-600
              text-orange-600 rounded-[100%] px-2.5 py-2 "
            >
              3E
            </a>

            <ul className="hidden items-center space-x-8 xl:flex 2xl:flex lg:flex md:hidden sm:hidden text-sm font-jose">
              <li>
                <a
                  href="/#"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium  tracking-widest  text-gray-900  
                  hover:text-orange-600 dark:text-gray-100
                   dark:hover:text-orange-300 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  aria-label="About Me"
                  title="About Me"
                  className="font-medium tracking-widest text-gray-900 
                  hover:text-orange-600 dark:text-gray-100
                   dark:hover:text-orange-300 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  ABOUT ME
                </a>
              </li>
              <li>
                <a
                  href="/#skill"
                  aria-label="My Skills"
                  title="My Skills"
                  className="font-medium tracking-widest text-gray-900 
                  hover:text-orange-600 dark:text-gray-100
                   dark:hover:text-orange-300 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  MY SKILLS
                </a>
              </li>
              <li>
                <a
                  href="/#work"
                  aria-label="Previous Work"
                  title="Previous Work"
                  className="font-medium tracking-widest text-gray-900 
                  hover:text-orange-600 dark:text-gray-100
                   dark:hover:text-orange-300 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  PREVIOUS WORK
                </a>
              </li>
              <li>
                <a
                  href="/#experience"
                  aria-label="My Experience"
                  title="My Experience"
                  className="font-medium tracking-widest text-gray-900 
                  hover:text-orange-600 dark:text-gray-100
                   dark:hover:text-orange-300 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  aria-label="Contact Me"
                  title="Contact Me"
                  className="font-medium tracking-widest text-gray-900 
                  hover:text-orange-600 dark:text-gray-100
                   dark:hover:text-orange-300 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <ThemeChanger />
              </li>
            </ul>

            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className={`${
                  isMenuOpen ? "hidden" : "block"
                } p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline`}
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars className="w-5 text-orange-600 dark:text-orange-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideBar isMenuOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavBar;
