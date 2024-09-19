import React from 'react';

const rooms = [
  {
    title: 'Deluxe Ocean View',
    description: 'Bask in luxury with breathtaking ocean views from your private suite.',
    price: '$299/night',
    image: 'room-1.jpg',
  },
  {
    title: 'Executive Cityscape Room',
    description: 'Experience urban elegance and modern comfort in the heart of the city.',
    price: '$199/night',
    image: 'room-2.jpg',
  },
  {
    title: 'Family Garden Retreat',
    description: 'Spacious and inviting, perfect for creating cherished memories with loved ones.',
    price: '$249/night',
    image: 'room-3.jpg',
  },
  {
    title: 'Deluxe Ocean View',
    description: 'Bask in luxury with breathtaking ocean views from your private suite.',
    price: '$299/night',
    image: 'room-4.jpg',
  },
  {
    title: 'Deluxe Ocean View',
    description: 'Bask in luxury with breathtaking ocean views from your private suite.',
    price: '$499/night',
    image: 'room-8.png',
  },
  {
    title: 'Deluxe Ocean View',
    description: 'Bask in luxury with breathtaking ocean views from your private suite.',
    price: '$799/night',
    image: 'room-7.png',
  }
  

  // Add more room data here
];

const RoomSection = () => {
  return (
    <section className="section__container room__container">
      <div class="typewriter">
      <p className="section__subheader">OUR LIVING ROOM</p>
      <h2 className="section__header">The Most Memorable Rest Time Starts Here...</h2>
      </div>

      <div className="room__grid">

        {rooms.map((room, index) => (

          <div className="room__card" key={index}>
            <div className="room__card__image">
              <img src={room.image} alt="room" />

              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>

            <div className="room__card__details">
              <h4>{room.title}</h4>
              <p>{room.description}</p>
              <h5>Starting from <span>{room.price}</span></h5>
              <button className="btn">Book Now</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
