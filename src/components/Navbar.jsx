"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };
  const menu = ["Home", "About", "Services", "Contact"];
  return (
    <nav
      className="flex flex-wrap z-10 items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-transparent
          fixed
        "
      style={{ backgroundColor: "black" }}
    >
      <div></div>
      <svg
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          isMenuHidden ? "hidden" : ""
        } w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-500
              md:flex
              md:justify-between 
              md:pt-0"
        >
          {menu.map((x) => {
            return (
              <li key={x}>
                <Link
                  href={`#${x}`}
                  className="md:p-4 py-2 block hover:text-white"
                >
                  {x}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
