import React from "react";
import { IoClose } from "react-icons/io5";
import ThemeChanger from "./ThemeSwitcher";

const MenuItemStyle = `justify-center flex h-12 cursor-pointer items-center 
truncate rounded-[5px] px-6 py-4 text-md
text-orange-600 outline-none transition duration-300 
ease-linear 
hover:bg-slate-50  
hover:outline-none focus:bg-slate-50 focus:text-inherit 
focus:outline-none active:bg-slate-50 active:text-inherit 
active:outline-none 
data-[te-sidenav-state-active]:text-inherit 
data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
dark:text-orange-300 
dark:hover:bg-white/10
dark:focus:bg-white/10
dark:active:bg-white/10`;

interface SideBarProps {
  isMenuOpen: boolean;
  close: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isMenuOpen, close }) => {
  return (
    <>
      <div
        className={`fixed flex flex-col top-0 right-0 w-64
             bg-gray-100 bg-opacity-10
              dark:bg-gray-900  dark:bg-opacity-10 
              backdrop-blur-xl backdrop-opacity-90 
              h-full  z-50 transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } 
              transition-transform duration-300`}
      >
        <div className="flex items-center justify-between p-8 h-18 ">
          <ThemeChanger />
          <div
            className="dark:text-gray-300 text-gray-900 cursor-pointer "
            onClick={close}
            role="button"
          >
            <IoClose className="w-6 h-6" />
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="relative list-none px-[0.2rem] font-jose">
              <li className="relative">
                <a onClick={close} href="/#" className={MenuItemStyle}>
                  HOME
                </a>
              </li>
              <li className="relative">
                <a onClick={close} href="/#about" className={MenuItemStyle}>
                  ABOUT ME
                </a>
              </li>
              <li className="relative">
                <a onClick={close} href="/#skill" className={MenuItemStyle}>
                  MY SKILLS
                </a>
              </li>
              <li className="relative">
                <a onClick={close} href="/#work" className={MenuItemStyle}>
                  PREVIOUS WORK
                </a>
              </li>
              <li className="relative">
                <a
                  onClick={close}
                  href="/#experience"
                  className={MenuItemStyle}
                >
                  EXPERIENCE
                </a>
              </li>
              <li className="relative">
                <a onClick={close} href="/#contact" className={MenuItemStyle}>
                  CONTACT
                </a>
              </li>
              {/* <li className="relative">
                <a onClick={close} href="/resume.pdf" className={MenuItemStyle}>
                  RESUME
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
