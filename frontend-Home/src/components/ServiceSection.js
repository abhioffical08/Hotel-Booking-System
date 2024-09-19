import React, { useEffect, useRef } from 'react';

const ServiceSection = () => {
  const counters = useRef([]);

  useEffect(() => {
    counters.current.forEach((counterEl) => {
      let counterNumber = 0;
      const targetNumber = parseInt(counterEl.getAttribute('data-target'), 10);

      const updateCounter = setInterval(() => {
        counterNumber++;
        counterEl.textContent = counterNumber;

        if (counterNumber >= targetNumber) {
          clearInterval(updateCounter);
          counterEl.style.color = '#42b4b8'; // Color change after reaching the target number
        }
      }, 1);
    });
  }, []);

  return (
    <>
      <section className="service" id="service">
        <div className="section__container service__container">
          <div className="service__content">
            <p className="section__subheader">SERVICES</p>
            <h2 className="section__header">Strive Only For The Best.</h2>
            <ul className="service__list">
              <li>
                <span><i className="ri-shield-star-line"></i></span>
                High Class Security
              </li>
              <li>
                <span><i className="ri-24-hours-line"></i></span>
                24 Hours Room Service
              </li>
              <li>
                <span><i className="ri-headphone-line"></i></span>
                Conference Room
              </li>
              <li>
                <span><i className="ri-map-2-line"></i></span>
                Tourist Guide Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section__container banner__container">
        <div className="banner__content">
          <div className="banner__card">
            <span
              className="counter"
              data-target="100"
              ref={(el) => counters.current.push(el)}
            >
              0
            </span>
            <p>Properties Available</p>
          </div>
          <div className="banner__card">
            <span
              className="counter"
              data-target="750"
              ref={(el) => counters.current.push(el)}
            >
              0
            </span>
            <p>Bookings Completed</p>
          </div>
          <div className="banner__card">
            <span
              className="counter"
              data-target="1200"
              ref={(el) => counters.current.push(el)}
            >
              0
            </span>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
