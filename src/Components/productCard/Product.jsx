import React from "react";
import "./product.css";
import {
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { useUserContext } from "../../context/context";
import AOS from "aos";
import "aos/dist/aos.css";
const Product = ({ item }) => {
  const {
    fetchWishlist,
    fetchAddCart,
    addStateToStorage,
    wishList,
  } = useUserContext();

  const isExist =
    wishList.find((it) => it.id === item.id) ??
    false;

  const handleClick = (type) => {
    if (type === "add") {
      addStateToStorage("wishlist", item, () =>
        fetchWishlist()
      );
      return;
    }

    const itemIndex = wishList.findIndex(
      (ite) => ite.id === item.id
    );
    if (itemIndex !== -1) {
      wishList.splice(itemIndex, 1);
      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishList)
      );
      fetchWishlist();
    }
  };
  return (
    <>
      <div className="shell"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img
                    src={item.img}
                    alt="Product"
                    className="img-responsive"
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>{item.category}</span>
                  </div>
                  <div className="title-product">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="card-footer flex justify-around gap-8 items-center whitespace-nowrap">
                    <div className="wcf-left">
                      <span className="price">
                        ${item.price}
                      </span>
                    </div>
                    <button
                      className="hover:bg-transparent hover:text-black font-semibold  p-2 rounded-md  bg-[#ED2627] text-white"
                      onClick={() =>
                        addStateToStorage(
                          "addCart",
                          item,
                          () => {
                            fetchAddCart();
                          }
                        )
                      }>
                      Add Cart
                    </button>
                    <div className="wcf-right">
                      <a className="buy-btn">
                        {isExist ? (
                          <FaHeart
                            className="buy-btn"
                            onClick={() =>
                              handleClick(
                                "remove"
                              )
                            }
                            id="addBtn"
                          />
                        ) : (
                          <FaRegHeart
                            className="buy-btn "
                            onClick={() =>
                              handleClick("add")
                            }
                          />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
AOS.init();