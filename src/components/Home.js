import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_1.jpg";
import image2 from "../Images/Beach Portraits/Beach Portraits_2.jpg";
import image3 from "../Images/Destination wedding/Destination wedding_6.jpg";
import image4 from "../Images/Food photography/Food photography_1.jpg";
import image5 from "../Images/Christian Wedding/Christian Wedding_1.jpg";
import image6 from "../Images/Haldi/Haldi_9.jpg";
import image7 from "../Images/Creative urban Portraits/Creative urban Portraits_1.jpg";
import image8 from "../Images/Sports car photography/Sports car photography_4.jpg";

import arch1 from "../Images/joel property edited photos/_A730091-2.jpg";
import "./Home.css";

import sampleVideo1 from "../Images/videos/final summer house.mp4";
import sampleVideo2 from "../Images/videos/Sahana For Upload.mp4";

import hero1 from "../Images/photo-collage.png.png";
import hero2 from "../Images/photo-collage.png (1).png";

import Categories from "./Categories";
function Home() {
  const gridRef = useRef(null);

  useEffect(() => {
    const gridItems = gridRef.current.querySelectorAll(".service-tile");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    });

    gridItems.forEach((item) => observer.observe(item));

    return () => {
      if (observer) {
        gridItems.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  const [highlight, setHighlight] = useState("heading");

  useEffect(() => {
    const handleScroll = () => {
      const slogan = document
        .getElementById("slogan")
        .getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (slogan < windowHeight / 2) {
        setHighlight("slogan");
      } else {
        setHighlight("heading");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Lavish pre-wedding shoot",
      image: image1,
      link: "/services/pre-wedding",
      slogan: "A Royal Start to Your Forever",
    },
    {
      title: "Beach Portraits",
      image: image2,
      link: "/services/beach-portraits",
      slogan: "Capturing Timeless Moments in the Sands of Time.",
    },
    {
      title: "Destination Wedding",
      image: image3,
      link: "/services/destination-wedding",
      slogan: "Where Romance Meets the World.",
    },
    {
      title: "Food Photography",
      image: image4,
      link: "/services/food-photography",
      slogan: "Food that Looks as Good as it Tastes",
    },
    {
      title: "Christian Wedding",
      image: image5,
      link: "/services/christian-wedding",
      slogan: "Two Hearts, One Soul",
    },
    {
      title: "Haldi Shoot",
      image: image6,
      link: "/services/haldi-shoot",
      slogan: "A Splash of Color",
    },
    {
      title: "Creative Urban Portraits",
      image: image7,
      link: "/services/urban-portraits",
      slogan: "City Vibes, Urban Lives",
    },
    {
      title: "Sports Car Photography",
      image: image8,
      link: "/services/sports-car",
      slogan: "Speed, Style, and Everything Nice",
    },
    {
      title: "Architecture Photography",
      image: arch1,
      link: "/services/Architecture",
      slogan: "Where Art Meets Structure",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div class="hero">
          <img src={hero1} alt="Image 1" />
          <img src={hero2} alt="Image 2" />
          <div className="overlay">
            <div className="button">
              <div className="hero-content">
                <h1>Welcome to Capturra Studio</h1>
                <p>Capturing Moments, Creating Memories</p>
                {/* <div className="container-button">
            <Link to="/services" className="hero-button">Explore Services</Link>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header" ref={gridRef}>
          <h2> Our Services </h2>
          <p id="slogan" className={highlight === "slogan" ? "highlight" : ""}>
            Discover the best solutions tailored for you.
          </p>
        </div>

        <Categories />

        <div className="services-grid" ref={gridRef}>
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className={`service-tile ${index % 2 === 0 ? "even" : ""}`}
            >
              <img src={service.image} alt={service.title} />
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p className="slogan">{service.slogan}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Experience the Magic</h2>
        <div className="video-grid">
          <div className="video-container video-1">
            <video
              src={sampleVideo1}
              autoPlay
              loop
              muted
              playsInline
              className="running-video"
            />
          </div>
          <div className="quote-container quote-1">
            <p>"Capturing Moments, Creating Memories"</p>
          </div>
          <div className="quote-container quote-2">
            <p>"Where Every Frame Tells a Story"</p>
          </div>
          <div className="video-container video-2">
            <video
              src={sampleVideo2}
              autoPlay
              loop
              muted
              playsInline
              className="running-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
