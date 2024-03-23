import Link from "next/link";
import LogoIcon from "../icons/LogoIcon";
import SVGIcon from "../icons/SVGIcon";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar flex justify-center sticky top-0 z-10 px-2 bg-white">
      <nav className="w-full max-w-430 mx-auto flex flex-row justify-between items-center">
        <Link
          href="/"
          className="decoration-none items-center cursor-pointer flex-row flex w-auto"
        >
          <SVGIcon
            icon={LogoIcon}
            height={48}
            width={220}
            pathClassName="text-secondary-text"
          />
        </Link>

        <div className="hidden md:flex gap-8 flex-row flex-1 h-full justify-center text-main-text text-20">
          <Link href="/" className="flex items-center">
            Home
          </Link>
          <Link href="/" className="flex items-center">
            Expertise
          </Link>
          <Link href="/" className="flex items-center">
            Services
          </Link>
          <Link href="/" className="flex items-center">
            About
          </Link>
        </div>
        <Link
          href="/"
          className="hidden md:flex items-center bg-accent text-20 text-secondary px-4 py-2 rounded-full border border-accent"
        >
          Contact Us
        </Link>
        <button
          className="text-primary w-10 h-10 md:hidden relative focus:outline-none "
          onClick={() => {
            window.scrollTo(0, 0);
            setIsMenuOpen(true);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute w-5 h-px bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute w-4 h-px bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute w-5 h-px bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile view modal nav */}
      <div
        className={` h-screen w-full fixed top-0 left-0 bg-primary transform transition duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-screen"
        }`}
      >
        <div className="flex flex-row-reverse p-2">
          <button
            className="p-2"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <SVGIcon icon={CloseIcon} pathClassName="text-white" size={28} />
          </button>
        </div>
        <div className="flex-col flex-1 self-center justify-center mt-2 font-sans text-18 text-secondary">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-10 py-4 hover:bg-secondary hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-10 py-4 hover:bg-secondary hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-10 py-4 hover:bg-secondary hover:text-primary"
          >
            About
          </Link>
        </div>
        {/* <div className=" flex flex-col mt-7 gap-2">a</div> */}
      </div>
    </div>
  );
};

export default Navbar;
