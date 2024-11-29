import React from "react";
import "./ama-nav.css";
import Logo from "./SIteLogo.png";

const AmaNav1 = () => {
  return (
    <div className="ama-nav1">
      <div className="nav1-div1">
        <img src={Logo} alt="logo" />
        <div className="nav1-div1-deliver">
          <a href="#" className="nav1-div1-deliver-up">
            Deliver to
          </a>
          <a href="#" className="nav1-div1-deliver-down">
            <i class="fa-solid fa-location-dot"></i><pre>  India</pre>
          </a>
        </div>
      </div>

      <div className="nav1-div2">
        <select className="nav1-div2-left">
            <option value="frontend">All Categories</option>
            <option value="backend">Alex Skills</option>
            <option value="ai">Devices</option>
            <option value="blockchain">Fashion</option>
            <option value="trading">Fresh Meat</option>
            <option value="donate">Pharmacy</option>
            <option value="donate">Appliances</option>
            <option value="donate">Apps & Games</option>
            <option value="donate">Audiobooks</option>
            <option value="donate">Baby</option>
            <option value="donate">Beauty</option>
            <option value="donate">Books</option>
            <option value="donate">Auto Mobile</option>
            <option value="donate">Clothing</option>
            <option value="donate">Collectibles</option>
            <option value="donate">Computers</option>
            <option value="donate">Deals</option>
            <option value="donate">Electronics</option>
            <option value="donate">Furniture</option>
            <option value="donate">Outdoors</option>
            <option value="donate">Gift cards</option>
            <option value="donate">Grocery</option>
            <option value="donate">Health Care</option>
            <option value="donate">Home</option>
        </select>
        <input type="search" placeholder="Search Amazon" />
        <a href="#" className="nav1-div2-right">
          <i class="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>

      <div className="nav1-div3">
        <a className="nav1-div3-en">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png" />
          EN▼
        </a>
        <div className="nav1-div3-signin">
          <a className="nav1-div3-signin-up">Hello, sign in</a>
          <a className="nav1-div3-signin-down" type="selector">
            Account & Lists
          </a>
        </div>
        <div className="nav1-div3-return">
          <a className="nav1-div3-return-up">Returns</a>
          <a className="nav1-div3-return-down">& Orders</a>
        </div>
        <div className="nav1-div3-cart">
          <a className="nav1-div3-cart-icon">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
          <a className="nav1-div3-cart-name"> Cart</a>
        </div>
      </div>
    </div>
  );
};

export default AmaNav1;