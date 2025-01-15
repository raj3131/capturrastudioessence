import React from 'react';
import './Services.css';
import preWeddingImage from '../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_1.jpg'; // Example image
import beachPortraitsImage from '../Images/Beach Portraits/Beach Portraits_1.jpg';
import destinationWeddingImage from '../Images/Destination wedding/Destination wedding_1.jpg';
import foodPhotographyImage from '../Images/Food photography/Food photography_1.jpg';
import christianWeddingImage from '../Images/Christian Wedding/Christian Wedding_1.jpg';
import haldiShootImage from '../Images/Haldi/Haldi_1.jpg';
import urbanPortraitsImage from '../Images/Christian Wedding/Christian Wedding_1.jpg';
import sportsCarImage from '../Images/Sports car photography/Sports car photography_1.jpg';

const services = [
  { title: 'Lavish Pre-Wedding Shoot', price: '₹65,000', description: 'Get captured in a lavish pre-wedding shoot by Vogue Films.', image: preWeddingImage },
  { title: 'Beach Portraits', price: '₹15,000', description: 'Get your shoot done at the beautiful beaches of Goa.', image: beachPortraitsImage },
  { title: 'Destination Wedding', price: '₹1,50,000', description: 'Effortlessly capture your wedding day at your dream destination.', image: destinationWeddingImage },
  { title: 'Food Photography', price: '₹10,000', description: 'Professional food photography for your brand.', image: foodPhotographyImage },
  { title: 'Christian Wedding', price: '₹1,00,000', description: 'Capture your most wonderful day with elegance.', image: christianWeddingImage },
  { title: 'Haldi Shoot', price: '₹12,000', description: 'Goan Haldi ceremony captured beautifully.', image: haldiShootImage },
  { title: 'Creative Urban Portraits', price: '₹10,000', description: 'Amazing creative urban photoshoot in Goa.', image: urbanPortraitsImage },
  { title: 'Sports Car Photography', price: '₹10,000', description: 'Professional sports car shoot.', image: sportsCarImage },
];

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-container">
            <div className="container noselect">
              <div className="canvas">
                {/* Render tracker divs dynamically for each service card */}
                {Array.from({ length: 25 }, (_, i) => (
                  <div key={i + 1} className={`tracker tr-${i + 1}`}></div>
                ))}

                <div id="card">
                  <div className="service-card">
                    <div className="service-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-info">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <p><strong>{service.price}</strong></p>
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
