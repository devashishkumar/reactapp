import { RESTUARANT_CONSTANTS } from "./../../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

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

   const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg px">
      <div className="w-32">
        <img src={RESTUARANT_CONSTANTS.HEADER_IMAGE} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus === true ? <span>&#10003;</span>: <span>&#x292B;</span>}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
            </li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><button className="login" onClick={() => {
            console.log("Button Click");
            const name = buttonName === "Login" ? "Logout" : "Login";
            setButtonName(name)
          }}> {buttonName}</button></li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
