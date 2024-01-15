import React from "react";
import Product from "../../Components/productCard/Product";
import { useUserContext } from "../../context/context";
import { TbMoodEmpty } from "react-icons/tb";
const Wish = () => {
  const { wishList } = useUserContext();

  return (
    <>
      {wishList.length == 0 ? (
       <div className="justify-center grid place-items-center mt-40">
       <div className=" text-9xl font-medium text-[#ED2627]">
        <TbMoodEmpty/>
       </div>
       <div>
       <h1 className="text-6xl text-center  font-bold">No items in Wishlist</h1>
       </div>
       </div>
      ) : (
        <div className="flex flex-wrap gap-16 justify-center">
          {wishList.map((item, index) => {
            return (
              <Product
                item={item}
                key={
                  "wishlist--products--" + index
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Wish;
