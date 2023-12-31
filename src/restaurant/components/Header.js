import { RESTUARANT_CONSTANTS } from "./../../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  // let btnName = "Login";
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={RESTUARANT_CONSTANTS.HEADER_IMAGE} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button className="login" onClick={() => {
            console.log("Button Click");
            const name = buttonName === "Login" ? "Logout" : "Login";
            setButtonName(name)
          }}> {buttonName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
