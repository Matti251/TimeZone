import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { URL } from "../../config/constant.route";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/context";
const Icon = () => {
  const {
    wishList,
    fetchWishlist,
    addCart,
    fetchAddCart,
  } = useUserContext();

  useEffect(() => {
    fetchWishlist();
    fetchAddCart();
  }, []);

  return (
    <>
      <Link to={URL.WISH_PAGE}>
        <div className="relative">
          <FaRegHeart className="text-2xl relative" />
          {wishList.length > 0 && (
            <div className="w-4 h-4 rounded-full bg-[#ED2627] text-white text-center text-xs absolute top-[-5px] right-[-15px] ">
              {wishList.length}
            </div>
          )}

        </div>
      </Link>
      <IoSearchOutline className="text-2xl " />
      <Link to={URL.CART_PAGE}>
        <div className="relative ">
          <RiShoppingCartFill className="text-2xl " />
          {addCart.length > 0 && (
            <div className="w-4 h-4 rounded-full bg-[#ED2627] text-white text-center text-xs absolute top-[-5px] right-[-15px] ">
              {addCart.length}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Icon;
