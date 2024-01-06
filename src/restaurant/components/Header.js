import { RESTUARANT_CONSTANTS } from "./../../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  // if no dependency array => useEffect is called on every render
  useEffect(() => {
   console.log("render on every time rendering");
  });

  // if dependency array is empty = [] => useEffect called on initial render (Just once)
  useEffect(() => {
    console.log("render after intial render just once"); 
   }, []);

   // if dependency array is [buttonName] => useEffect called everytime buttonName is updated
  useEffect(() => {
    console.log("render everytime buttonName updated"); 
   }, [buttonName]);

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
