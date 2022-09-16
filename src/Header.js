import React, { useState } from "react";
import "./Header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { aut, auth } from "./firebase";
import Jump from "react-reveal/Jump";

//autocomplete components
import Autocomplete from "./Autocomplete";

const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
  const user = state.user;
  const basket = state.basket;
  const isInputFocused = state.isInputFocused;

  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="address">
        <div className="top">
          <p>Hello, {user?.email}</p>
        </div>
        <div className="bottom">
          <LocationOnIcon className="location-icon"></LocationOnIcon>
          <h3>Select your address</h3>
        </div>
      </div>
      <div className="search-bar">
        {/* <input
          type="text"
          onFocus={focusInput}
          onBlur={blurInput}
          className={isInputFocused && "highlighted"}
        /> */}
        <div className="input">
          <Autocomplete />
        </div>
        <SearchIcon
          className="search-icon"
          style={{ fontSize: "2.5rem" }}
        ></SearchIcon>
      </div>

      <div
        className="sign-in"
        onClick={() => {
          //if there is a user, then log him out
          logout();
          //if no user, then push to login page. Otherwise, stay at home page.
          if (!user) {
            navigate("/login");
          }
        }}
      >
        <p>Hello, {user ? user.email : "Guest"}</p>
        <h3>{user ? "Sign out" : "Sign in"}</h3>
      </div>
      <div className="return">
        <p>Returns</p>
        <h3>& Orders</h3>
      </div>

      <Jump spy={basket}>
        <div className="cart" onClick={() => navigate("/checkout")}>
          <ShoppingCartIcon></ShoppingCartIcon>
          <span>{basket?.length}</span>
        </div>
      </Jump>
    </div>
  );
};

export default Header;
