import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { navLinks, linkNoLogin } from "./../constants";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import SearchBar from "./SearchBar";
import "./login.css"

const Navbar = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  
  const closeMobileMenu = () => setToggleNav(false);
  const closeUserMenu = () => setToggleUser(false);
  

  return (
    <nav className="w-full md:px-10 px-3 py-2 bg-glass-gradient z-40 fixed top-0 left-0 shadow-2xl flex justify-evenly items-center sm:justify-between flex-1">
      <a href="/" className="flex items-center">
        <img src={Logo} alt="MiniMarket" className="w-[100px] z-30" />
      </a>

      <SearchBar />

      <ul
        className=" list-none sm:flex hidden items-center ml-7 "
        style={{ userSelect: "none" }}
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-roboto font-bold cursor-pointer text-[18px] text-slate-700 mr-8  relative"
          >
            <NavLink
              to={nav.to}
              className={({ isActive }) =>
                "color-text nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeUserMenu}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
        <li className="color-text w-[35px] cursor-pointer text-[45px] mr-3 ">
          <i
            className="color-text"
            onClick={() => setToggleUser(!toggleUser)}
          >
            {toggleUser ? <AiOutlineClose /> : <FaUserCircle />}
          </i>
        </li>
      </ul>

      {/* dropdown user login/register*/}

      <div
        className={`${
          !toggleUser ? "hidden" : "flex"
        } color-text p-6 bg-glass-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-2xl`}
      >
        <ul className="list-none flex justify-end items-center flex-1 flex-col">
          <li className="color-text text-[70px] flex items-center justify-evenly">
            <FaUserCircle />
            <p className="color-text text-[13px] w-[50%]  text-center font-bold">
              ¡Aun no Estas registrado! ¿Que esperas?
            </p>
          </li>
          <hr className="w-[100%] h-[3px] bg-primary mt-4 shadow-2xl" />
          {linkNoLogin.map((Login, index) => (
            <li
              key={Login.id}
              className={`font-roboto font-bold cursor-pointer text-[18px] text-black  mt-3 tracking-wide relative text-center ${
                index === linkNoLogin.length - 1 ? "text-[17px]" : "text-[18px]"
              }`}
            >
              <Link to={Login.to}>{Login.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar Responsive*/}

      <div className="sm:hidden flex  items-center mr-5">
        <i
          className="color-text text-[3rem] cursor-pointer z-40"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <AiOutlineClose /> : <BiMenuAltRight />}
        </i>

        <div
          className={`  ${
            !toggleNav ? "hidden" : "flex"
          } w-full h-screen p-6 bg-glass-gradient absolute top-0 right-0  sidebar  items-center justify-center`}
        >
          <ul
            className={`text-center flex flex-col justify-evenly h-[60%]`}
            style={{ userSelect: "none" }}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="font-roboto font-bold cursor-pointer text-[40px] text-slate-700 tracking-wide opacity-1"
              >
                <NavLink
                  to={nav.to}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}

            <hr className="w-[100%] h-[8px] bg-secondary mt-4 shadow-2xl rounded-full" />

            <div className=" cursor-pointer text-[65px] color-text flex items-center justify-center mt-8 w-[90%]">
              <FaUserCircle />
              <p className="text-[17px] w-[46%] ml-4 flex-1 text-center font-bold">
                ¡Aun no Estas registrado! ¿Que esperas?
              </p>
            </div>
            {linkNoLogin.map((Login) => (
              <li
                key={Login.id}
                className=" font-bold text-[25px] cursor-pointer text-slate-700 flex items-center justify-center mt-4"
              >
                <Link onClick={closeMobileMenu} to={Login.to}>
                  {Login.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
