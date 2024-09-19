import React from 'react';

const BannerSection = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__content">
        <p className="section__subheader">EXCLUSIVE OFFER</p>
        <h2 className="section__header-E">Save Up to 30% on Your Stay</h2>
        <p className="section__description">
          Book now and enjoy an exclusive discount on luxury accommodations.
        </p>
        <button className="btn banner__btn">Book Now</button>
      </div>
    </section>
  );
};

export default BannerSection;
