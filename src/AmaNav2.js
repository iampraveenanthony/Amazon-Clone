import React from 'react'

const AmaNav2 = () => {
  return (
    <div className="ama-nav2">
      <div className="nav2-option">
        <div className="nav2-menu-icon">
          <a href="#"><i class="fa-solid fa-bars"></i></a>
          <a href="#" className="nav2-menu-icon-text">All</a>
        </div>
        <div className="nav2-menu-list">
          <a href="#">Fresh</a>
          <a href="#">Mx Player</a>
          <a href="#">Sell</a>
          <a href="#">Best Sellers</a>
          <a href="#">Today's Deals</a>
          <a href="#">Mobiles</a>
          <a href="#">Electronics</a>
          <a href="#">Home & Kitchen</a>
          <a href="#">Prime</a>
          <a href="#">Customer Service</a>
          <a href="#">Fashion</a>
          <a href="#">New Releases</a>
        </div>
      </div>
      <div className="nav2-img">
        <img src="https://m.media-amazon.com/images/G/31/Events/img24/Jupiter24/HERO1/J24_SWM_Shopnow._CB562557233_.jpg" height={39} width={350}/>
      </div>
    </div>
  )
}

export default AmaNav2