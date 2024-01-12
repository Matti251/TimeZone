import React from "react";

const CartItems = ({ item }) => {
  return (
    <>
      <table class="table-fixed border-b border-black w-full text-center mb-4">
        <tbody className="p-4">
          <tr>
            <td>
              <div className="flex">
                <div className="imgContainer w-24 ">
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
                ${item.price}
              </span>
            </td>
            <td>
              {item.quantity}
            </td>
            <td>
              <span className="text-2xl font-semibold">
                {item.shipping}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartItems;
