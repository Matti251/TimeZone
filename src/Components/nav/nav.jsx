import React from "react";
import "./nav.css";

import NavLinkButton from "../button/navLinkButton";
import { URL } from "../../config/constant.route";
import Icon from "../icons/Icon";
import { Link } from "react-router-dom";

export const nav = () => {
  const linkData = [
    { to: URL.HOME_PAGE, title: "Home" },
    { to: URL.BLOG_PAGE, title: "Blog" },
    { to: URL.CONTACT_PAGE, title: "Contact" },
    { to: URL.ABOUT_PAGE, title: "About" },
  ];

  const customStyle = {
    textUnderlineOffset: "8px",
  };
  return (
    <>
      <nav className="p-4 py-7  text-gray-200 sticky top-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
          <Link to={'/'}>
          <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
                alt="Logo"
              />
            </h1>
          </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <li className="text-lg pr-8 ">
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
          <div className="hidden md:flex gap-8 cursor-pointer text-black">
            <Icon />
           
          </div>
        </div>
      </nav>
    </>
  );
};
export default nav;
