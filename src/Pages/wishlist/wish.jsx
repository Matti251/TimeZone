import React from "react";
import Product from "../../Components/productCard/Product";
import { useUserContext } from "../../context/context";
const Wish = () => {
  const { wishList } = useUserContext();

  return (
    <>
      <div className="flex flex-wrap gap-16 justify-center">
        {wishList.map((item, index) => {
          return (
            <Product
              item={item}
              key={"wishlist--products--" + index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Wish;
