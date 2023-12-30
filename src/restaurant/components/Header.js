import { RESTUARANT_CONSTANTS } from "./../../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
