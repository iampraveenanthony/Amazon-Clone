import React from "react";
import "./ama-nav.css"
import Logo from "./SIteLogo.png"

const AmaNav1 = () => {
  return (
    <div className="ama-nav1">
      <div className="nav1-div1">
        <img
          src={Logo}
          alt="logo"
        />
        <div className="nav1-div1-deliver">
          <a href="#" className="nav1-div1-deliver-up">
            Deliver to
          </a>
          <a href="#" className="nav1-div1-deliver-down">
            <i class="fa-solid fa-location-dot"></i>`India
          </a>
        </div>
      </div>

      <div className="nav1-div2">
        <a href="#" className="nav1-div2-left">
          Deals▼
        </a>
        <input type="text" placeholder="Search Amazon" />
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