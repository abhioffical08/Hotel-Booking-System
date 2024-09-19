import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className="header">
      <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="#home">
              <img src="AvLogo.png" alt="logo" style={{ borderRadius: '50%' }} width="60" height="60" />
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </div>
        </div>
        <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn nav__btn">Book Now</button>
      </nav>
      <div className="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Make Yourself At Home<br />In Our <span>Hotel</span>.</h1>
      </div>
    </header>


<section className="section__container booking__container">
<form className="booking__form">
  <div className="input__group">
    <span><i className="ri-calendar-2-fill"></i></span>
    <div>
      <label htmlFor="check-in">CHECK-IN</label>
      <input type="text" placeholder="Check In" />
    </div>
  </div>
  <div className="input__group">
    <span><i className="ri-calendar-2-fill"></i></span>
    <div>
      <label htmlFor="check-out">CHECK-OUT</label>
      <input type="text" placeholder="Check Out" />
    </div>
  </div>
  <div className="input__group">
    <span><i className="ri-user-fill"></i></span>
    <div>
      <label htmlFor="guest">GUEST</label>
      <input type="text" placeholder="Guest" />
    </div>
  </div>
  <div className="input__group input__btn">
    <button className="btn">CHECK OUT</button>
  </div>
</form>
</section>

    </>
  );
};

export default Header;
