import React from "react";
import { useNavigate } from "react-router-dom";
const NavLinkButton = ({ to, title }) => {
  const navigate = useNavigate();
  return (
    <button
      className="transition duration-300 focus:outline-none focus:text-[#ED2627] focus:underline hover:underline hover:text-[#ED2627] text-black px-8"
      onClick={() => navigate(to)}>
      {title}
    </button>
  );
};
export default NavLinkButton;
