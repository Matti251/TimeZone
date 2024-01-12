import React from "react";
import "./product.css";
import {
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { useUserContext } from "../../context/context";
import { useNavigate } from "react-router";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const {
    fetchWishlist,
    fetchAddCart,
    addStateToStorage,
    wishList,
  } = useUserContext();

  const isExist =
    wishList.find((it) => it.id === item.id) ??
    false;
  return (
    <>
      <div className="shell">
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
                            navigate("/addcart");
                          }
                        )
                      }>
                      Add Cart
                    </button>
                    <div className="wcf-right">
                      <a
                        href="#"
                        className="buy-btn">
                        {isExist ? (
                          <FaHeart
                            className="buy-btn"
                            onClick={() =>
                              alert("Remove")
                            }
                          />
                        ) : (
                          <FaRegHeart
                            className="buy-btn"
                            onClick={() =>
                              addStateToStorage(
                                "wishlist",
                                item,
                                () =>
                                  fetchWishlist()
                              )
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
