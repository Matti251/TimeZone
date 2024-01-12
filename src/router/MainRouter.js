import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "../layout/index";
import { URL } from "../config/constant.route";
import Home from "../Pages/home/Home";
import About from "../Pages/about/About";
import Blog from "../Pages/blog/Blog";
import Contact from "../Pages/contact/Contact";
import Wish from "../Pages/wishlist/wish";
import Cart from "../Pages/addCart/Cart";
const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element=<Layout />>
            <Route
              path={URL.HOME_PAGE}
              element={<Home />}
            />
            <Route
              path={URL.ABOUT_PAGE}
              element={<About />}
            />
            <Route
              path={URL.BLOG_PAGE}
              element={<Blog />}
            />
            <Route
              path={URL.CONTACT_PAGE}
              element={<Contact />}
            />
            <Route
              path={URL.WISH_PAGE}
              element={<Wish />}
            />
            <Route
              path={URL.CART_PAGE}
              element={<Cart />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default MainRouter;
