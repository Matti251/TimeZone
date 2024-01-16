import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useUserContext } from "../../context/context";
import Quantity from "../cardQuantity/Quantity";

const CartItems = ({ item }) => {
  const [quantity, setQuantity] = useState(
    item.quantity
  );
  const { fetchAddCart, addCart } =
    useUserContext();
  const handelClick = () => {
    const itemIndex = addCart.findIndex(
      (ite) => ite.id === item.id
    );
    if (itemIndex !== -1) {
      addCart.splice(itemIndex, 1);
      localStorage.setItem(
        "addCart",
        JSON.stringify(addCart)
      );
      fetchAddCart();
    }
  };
  return (
    <>
      <table className="table-fixed border-b border-black w-full text-center mb-4">
        <tbody className="p-4">
          <tr>
            <td className="py-7">
              <div className="flex">
                <div className="imgContainer w-32 ">
                  <img
                    src={item.img}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col mx-5">
                  <span className="text-lg font-semibold text-left">
                    {item.category}
                  </span>
                  <span className="text-sm font-semibold w-48 text-left">
                    {item.name}
                  </span>
                </div>
              </div>
            </td>
            <td>
              <span className="text-xl font-bold">
                ${item.price * quantity}
              </span>
            </td>
            <td>
              <Quantity
                {...{
                  quantity,
                  setQuantity,
                  id: item.id,
                }}
              />
            </td>
            <td>
              <span
                className=" cursor-pointer justify-center flex"
                onClick={handelClick}>
                <RxCross2 />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartItems;
