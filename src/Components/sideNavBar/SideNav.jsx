import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import {
  Link
} from "react-router-dom";
import Icon from "../icons/Icon";
import NavLinkButton from "../button/navLinkButton";
import { URL } from "../../config/constant.route";

const Navbar = () => {
    const linkData = [
        { to: URL.HOME_PAGE, title: "Home" },
        { to: URL.BLOG_PAGE, title: "Blog" },
        { to: URL.CONTACT_PAGE, title: "Contact" },
        { to: URL.ABOUT_PAGE, title: "About" },
      ];
  const [nav, setNav] = useState(false);
  const customStyle = {
    textUnderlineOffset: "8px",
  };
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 lg:hidden z-[1200]">
      {/* Left side */}
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <Link to={"/"}>
            <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
                alt="Logo"
              />
            </h1>
          </Link>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">
            Delivery
          </p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
        <BsFillCartFill
          size={20}
          className="mr-2"
        />{" "}
        Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          <Link to={"/"}>
            <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
                alt="Logo"
              />
            </h1>
          </Link>
        </h2>
        <nav>
          <ul className="flex p-4 text-gray-800 gap-10 justify-center">
            <Icon />
          </ul>
         <div className="grid">
         <ul className="grid">
              <li className="text-2xl pr-8 grid gap-10">
                {linkData.map((item, i) => {
                  return (
                    <NavLinkButton
                      key={"nav-link-items--" + i}
                      to={item.to}
                      title={item.title}
                      style={customStyle}
                    />
                  );
                })}
              </li>
            </ul>
         </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
