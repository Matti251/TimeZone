import {
  React,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { Context } from "./context";
const ContextState = ({ children }) => {
  const [data, setData] = useState(null);
  const [wishList, setWishList] = useState([]);
  const [addCart, setAddCart] = useState(
    JSON.parse(localStorage.getItem("addCart")) ||
      []
  );

  const fetchWishlist = async () => {
    const state = JSON.parse(
      (await localStorage.getItem("wishlist")) ??
        "[]"
    );
    setWishList(state);
  };

  const fetchAddCart = async () => {
    const states = JSON.parse(
      (await localStorage.getItem("addCart")) ??
        "[]"
    );
    setAddCart(states);
  };

  const fetchData = () => {
    axios
      .get(
        "http://localhost:3000/api/products.json"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addStateToStorage = async (
    key,
    value,
    callback
  ) => {
    const cartData = await JSON.parse(
      localStorage.getItem(key)
    );

    if (cartData) {
      localStorage.setItem(
        key,
        JSON.stringify([...cartData, value])
      );
    } else {
      localStorage.setItem(
        key,
        JSON.stringify([value])
      );
    }
    callback && callback();
  };
  return (
    <Context.Provider
      value={{
        data,
        wishList,
        setWishList,
        fetchWishlist,
        addCart,
        setAddCart,
        fetchAddCart,
        addStateToStorage,
      }}>
      {children}
    </Context.Provider>
  );
};
export default ContextState;
