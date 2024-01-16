import React from "react";
import { useUserContext } from "../../context/context";
import CartItems from "./CartItems";
import { TbMoodEmpty } from "react-icons/tb";

const CartProducts = () => {
  const { addCart } = useUserContext();
  return (
    <>
      {addCart.length == 0 ? (
        <div className="justify-center grid place-items-center mt-40">
          <div className=" text-9xl font-medium text-[#ED2627]">
            <TbMoodEmpty />
          </div>
          <div>
            <h1 className="text-6xl text-center  font-bold">
              No items in Cart
            </h1>
          </div>
        </div>
      ) : (
        <>
          <table className="table-fixed border-b border-black w-full text-center ">
            <thead className="w-32 ">
              <tr className="border-b border-black bg-[#34495e] text-white">
                <th className="py-7">Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
          <div>
            {addCart.map((item, i) => {
              return (
                <CartItems
                  item={item}
                  key={"products--" + i}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default CartProducts;
