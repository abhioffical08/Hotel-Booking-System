import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#home">
              <img src="AvLogo.png" alt="logo" style={{ borderRadius: '50%' }} />
            </a>
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="btn">Book Now</button>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness & Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li><a href="mailto:avdeveloper@info.com">avdeveloper@info.com</a></li>
          </ul>

          <div className="footer__socials">
            <a href="#"><img src="facebook.png" alt="facebook" id='facebook' /></a>
            <a href="#"><img src="instagram.png" alt="instagram" id='instagram' /></a>
            <a href="#"><img src="youtube.png" alt="youtube" id='youtube' /></a>
            <a href="#"><img src="twitter.png" alt="twitter" id='twitter' /></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 AV  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
