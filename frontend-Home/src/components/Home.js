import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
// import './App.css'


function Home() {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);
  const menuBtnIconRef = useRef(null);

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;
    const menuBtnIcon = menuBtnIconRef.current;

    const handleMenuToggle = () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
    };

    menuBtn.addEventListener('click', handleMenuToggle);

    const handleNavLinksClick = () => {
      navLinks.classList.remove('open');
      menuBtnIcon.setAttribute('class', 'ri-menu-line');
    };

    navLinks.addEventListener('click', handleNavLinksClick);

    // ScrollReveal animations
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    ScrollReveal().reveal('.header__container p', { ...scrollRevealOption });
    ScrollReveal().reveal('.header__container h1', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.about__image img', { ...scrollRevealOption, origin: 'left' });
    ScrollReveal().reveal('.about__content .section__subheader', { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal('.about__content .section__header', { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal('.about__content .section__description', { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal('.about__btn', { ...scrollRevealOption, delay: 2000 });
    ScrollReveal().reveal('.room__card', { ...scrollRevealOption, interval: 500 });
    ScrollReveal().reveal('.service__list li', { ...scrollRevealOption, interval: 500, origin: 'right' });

    return () => {
      menuBtn.removeEventListener('click', handleMenuToggle);
      navLinks.removeEventListener('click', handleNavLinksClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="#"><img src="assets/AvLogo.png" alt="logo" style={{ borderRadius: '50%' }} width="60" height="60" /></a>
            </div>

            <div className="nav__menu__btn" id="menu-btn" ref={menuBtnRef}>
              <i className="ri-menu-line" ref={menuBtnIconRef}></i>
            </div>
          </div>

          <ul className="nav__links" id="nav-links" ref={navLinksRef}>
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

      {/* Booking Section */}
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

      {/* About Section */}
      <section className="section__container about__container" id="about">
        <div className="about__image">
          <video src="assets/Hotel-Pramotion.mp4" width="450" height="400" controls style={{ borderRadius: '15px' }} />
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description">
            With a focus on quality accommodations, personalized experiences, and seamless booking, our platform is dedicated to ensuring that every traveler embarks on their dream holiday with confidence and excitement.
          </p>
          <div className="about__btn">
            <button className="btn">Read More</button>
          </div>
        </div>
      </section>

      {/* Room Section */}
      <section className="section__container room__container">
        <div className="typewriter">
          <p className="section__subheader">OUR LIVING ROOM</p>
          <h2 className="section__header">The Most Memorable Rest Time Starts Here...</h2>
        </div>
        <div className="room__grid">
          {/* Repeated Room Card Example */}
          {[1, 2, 3, 4, 5, 6].map((room, index) => (
            <div className="room__card" key={index}>
              <div className="room__card__image">
                <img src={`assets/room-${room}.jpg`} alt={`room ${room}`} />
                <div className="room__card__icons">
                  <span><i className="ri-heart-fill"></i></span>
                  <span><i className="ri-paint-fill"></i></span>
                  <span><i className="ri-shield-star-line"></i></span>
                </div>
              </div>
              <div className="room__card__details">
                <h4>Deluxe Ocean View</h4>
                <p>Bask in luxury with breathtaking ocean views from your private suite.</p>
                <h5>Starting from <span>$299/night</span></h5>
                <button className="btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li><span><i className="ri-shield-star-line"></i></span>High Class Security</li>
              <li><span><i className="ri-24-hours-line"></i></span>24 Hours Room Service</li>
              <li><span><i className="ri-headphone-line"></i></span>Conference Room</li>
              <li><span><i className="ri-map-2-line"></i></span>Tourist Guide Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo">
              <a href="#home"><img src="assets/AvLogo.png" alt="logo" style={{ borderRadius: '50%' }} /></a>
            </div>
            <p className="section__description">
              Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your stay an unforgettable one.
            </p>
            <div className="social__icons">
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-instagram-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
              <span><i className="ri-linkedin-fill"></i></span>
            </div>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact Info</h4>
            <ul>
              <li><span><i className="ri-phone-fill"></i></span>+123 456 7890</li>
              <li><span><i className="ri-mail-fill"></i></span>info@hotel.com</li>
              <li><span><i className="ri-map-pin-fill"></i></span>123 Luxury Avenue, Beach City</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2023 Hotel. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
