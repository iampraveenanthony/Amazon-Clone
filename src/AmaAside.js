import React from "react";

const AmaAside = () => {
  return (
    <div className="ama-aside">
      <div className="aside-category">
        <h1>Category</h1>
        <h2>Electronics</h2>
        <a>Accessories</a>
        <a>Cameras & Photography</a>
        <a>Car & Vehicle Electronics</a>
        <a>Computers & Accessories</a>
        <a>GPS & Accessories</a>
        <a>Home Audio</a>
        <a>Home Theater, TV & Video</a>
        <a>Mobiles & Accessories</a>
        <a>Portable Media Players</a>
        <a>Radio Communication</a>
        <a>Tablets</a>
        <a>Telephones & Accessories</a>
        <a>Warranties</a>
        <a>eBook Readers & Accessories</a>
        <a>Wearable Technology</a>
        <a>General Purpose Batteries & Battery Chargers</a>
        <a>Headphones, Earbuds & Accessories</a>
        <a>Power Accessories</a>
      </div>

      <div className="aside-brands">
        <p>Made for Amazon Brands</p>
        <div className="aside-brands-input">
          <input type="checkbox" />
          <span>Made for Amazon</span>
        </div>
        <p>Amazon Prime</p>
        <div className="aside-brands-input">
          <input type="checkbox" />
          <span className="checkbox-prime">✓ prime</span>
        </div>
        <p>Delivery day</p>
        <div className="aside-brands-input">
          <input type="checkbox" />
          <span>Get it by Tomorrow</span>
        </div>
        <p>Pay On Delivery</p>
        <div className="aside-brands-input">
          <input type="checkbox" />
          <span>Eligible for Pay On Delivery</span>
        </div>
        <p>Brand</p>
        <div className="aside-brands-input-brand">
          <input type="checkbox" />
          <span>Apple</span>
          <br />
          <input type="checkbox" />
          <span>OnePlus</span>
          <br />
          <input type="checkbox" />
          <span>Samsung</span>
          <br />
          <input type="checkbox" />
          <span>boAt</span>
          <br />
          <input type="checkbox" />
          <span>Amazon</span>
          <br />
          <input type="checkbox" />
          <span>Redmi</span>
          <br />
          <input type="checkbox" />
          <span>realme</span>
          <br />
        </div>
      </div>

      <div className="aside-category">
        <h1>Avg. Customer Review</h1>
        <a>
          {" "}
          <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>{" "}
          <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>{" "}
          <i class="fa-regular fa-star"></i> & Up
        </a>
        <br />
        <a>
          {" "}
          <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>{" "}
          <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>{" "}
          <i class="fa-regular fa-star"></i> & Up
        </a>
        <br />
        <a>
          {" "}
          <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>{" "}
          <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>{" "}
          <i class="fa-regular fa-star"></i> & Up
        </a>
        <br />
        <a>
          {" "}
          <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>{" "}
          <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>{" "}
          <i class="fa-regular fa-star"></i> & Up
        </a>

        <h1>New Arrivals</h1>
        <a>Last 30 days</a>
        <br />
        <a>Last 90 days</a>

        <h1>Item Condition</h1>
        <a>New</a>
        <br />
        <a>Renewed</a>

        <h1>Price</h1>
        <a>Under ₹1,000</a>
        <a>₹1,000 - ₹5,000</a>
        <a>₹5,000 - ₹10,000</a>
        <a>₹10,000 - ₹20,000</a>
        <a>Over ₹20,000</a>

        <h1>Deals & Discounts</h1>
        <a>Great Indian Festival</a>

        <h1>Discount</h1>
        <a>10% Off or more</a>
        <a>25% Off or more</a>
        <a>35% Off or more</a>
        <a>50% Off or more</a>
        <a>60% Off or more</a>
        <a>70% Off or more</a>
      </div>

      <div className="aside-brands">
        <p>Seller</p>
        <div className="aside-brands-input-brand">
          <input type="checkbox" />
          <span>Clicktech Retail PrivateLtd</span>
          <br />
          <input type="checkbox" />
          <span>Cocoblu Retail</span>
          <br />
          <input type="checkbox" />
          <span>TheGiftKart</span>
          <br />
          <input type="checkbox" />
          <span>Spigen India</span>
          <br />
          <input type="checkbox" />
          <span>Pikkme</span>
          <br />
          <input type="checkbox" />
          <span>Clicktech Retail</span>
          <br />
          <input type="checkbox" />
          <span>ESR Official</span>
          <br />
          <input type="checkbox" />
          <span>Easy Cart</span>
          <br />
          <input type="checkbox" />
          <span>ImagineDesign</span>
          <br />
          <input type="checkbox" />
          <span>VONZEE®</span>
          <br />
        </div>
        <p>Availability</p>
        <div className="aside-brands-input-brand">
          <input type="checkbox" />
          <span>Include Out of Stock</span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AmaAside;
