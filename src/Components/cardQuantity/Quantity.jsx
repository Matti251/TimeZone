import React, { useState } from "react";
import { useUserContext } from "../../context/context";

const Quantity = ({
  quantity,
  setQuantity,
  id,
}) => {
  const { addCart, fetchAddCart } =
    useUserContext();

  const updateQuantity = (type) => {
    setQuantity((prev) => {
      let updatedValue;
      if (type === "add") {
        updatedValue = prev > 1 ? prev - 1 : prev;
      } else if (type === "remove") {
        updatedValue =
          prev < 10 ? prev + 1 : prev;
      }

      const updateCart = addCart.map((item) => {
        return {
          ...item,
          quantity:
            item.id === id
              ? updatedValue
              : item.quantity,
        };
      });

      localStorage.setItem(
        "addCart",
        JSON.stringify(updateCart)
      );
      fetchAddCart();

      return updatedValue;
    });
  };

  return (
    <>
      <button
        className="bg-[#34495e] text-white px-4 text-2xl cursor-pointer"
        onClick={() => {
          updateQuantity("add");
        }}>
        -
      </button>
      <span className=" text-[#ED2627] bg-white px-4 text-2xl">
        {quantity}
      </span>
      <button
        className=" text-white bg-[#34495e] px-4 text-2xl cursor-pointer"
        onClick={() => {
          updateQuantity("remove");
        }}>
        +
      </button>
    </>
  );
};

export default Quantity;
