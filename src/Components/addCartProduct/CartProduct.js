import React from "react";
import { useUserContext } from "../../context/context";
import CartItems from "./CartItems";

const CartProducts = () => {
  const { addCart } = useUserContext();
  return (
    <>
      <table class="table-fixed border-b border-black w-full text-center">
        <thead className="w-32">
          <tr className="border-b border-black">
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Shipping</th>
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
  );
};
export default CartProducts;
