// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_1.jpg';
import image2 from '../Images/Beach Portraits/Beach Portraits_2.jpg';
import image3 from '../Images/Destination wedding/Destination wedding_6.jpg';
import image4 from '../Images/Food photography/Food photography_1.jpg';
import image5 from '../Images/Christian Wedding/Christian Wedding_1.jpg';
import image6 from '../Images/Haldi/Haldi_1.jpg';
import image7 from '../Images/Creative urban Portraits/Creative urban Portraits_1.jpg';
import image8 from '../Images/Sports car photography/Sports car photography_1.jpg';
import './Photography_types.css';

const services = [
  { title: 'Lavish pre-wedding shoot', image: image1, link: '/services/pre-wedding', slogan: 'A Royal Start to Your Forever' },
  { title: 'Beach Portraits', image: image2, link: '/services/beach-portraits_1', slogan: 'Capturing Timeless Moments in the Sands of Time.' },
  { title: 'Destination Wedding', image: image3, link: '/services/destination-wedding', slogan: 'Where Romance Meets the World.' },
  { title: 'Food Photography', image: image4, link: '/services/food-photography', slogan: 'Food that Looks as Good as it Tastes' },
  { title: 'Christian Wedding', image: image5, link: '/services/christian-wedding', slogan: 'Two Hearts, One Soul' },
  { title: 'Haldi Shoot', image: image6, link: '/services/haldi-shoot', slogan: 'A Splash of Color' },
  { title: 'Creative Urban Portraits', image: image7, link: '/services/urban-portraits', slogan: 'City Vibes, Urban Lives' },
  { title: 'Sports Car Photography', image: image8, link: '/services/sports-car', slogan: 'Speed, Style, and Everything Nice' },
];

const Photography_types = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <Link to={service.link} key={index} className="service-tile">
          <img src={service.image} alt={service.title} />
          <div className="service-overlay">
            <h3>{service.title}</h3>
            <p className="slogan">{service.slogan}</p> {/* Display slogan for all services */}
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Photography_types;
