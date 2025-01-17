import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./Categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";

// Import your custom icons
import loveIcon from "../Icons/love.png";
import kiss from "../Icons/kiss.png";
import photographer from "../Icons/photographer.png";
import thai from "../Icons/thai.png";
import videoIcon from "../Icons/video.png";
import wedding from "../Icons/wedding-couple.png";
import dance from "../Icons/dance.png";

// Import your images and videos
import cinematicVideo from "../Images/videos/Sahana For Upload.mp4";
import candidImage1 from "../Images/Haldi/Untitled design (4).jpg";
import traditionalImage1 from "../Images/Christian Wedding/Christian Wedding_10.jpg";
import traditionalVideo from "../Images/videos/final summer house.mp4";
import engagementImage1 from "../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_1.jpg";
import weddingImage from "../Images/Christian Wedding/Christian Wedding_8.jpg";
import coupleshootImage1 from "../Images/Lavish pre-wedding shoot/Lavish pre-wedding shoot_3.jpg";

const categories = [
  {
    id: 1,
    name: "Cinematic Videography",
    type: "video",
    icon: videoIcon,
    media: [cinematicVideo],
    description:
      "Experience cinematic storytelling with high-quality videography.",
    backgroundImage: "path-to-cinematic-background.jpg",
  },
  {
    id: 2,
    name: "Candid Photography",
    type: "image",
    icon: photographer,
    media: [candidImage1],
    description: "Capture the raw and emotional moments of your special day.",
    backgroundImage: "path-to-candid-background.jpg",
  },
  {
    id: 3,
    name: "Traditional Photography",
    type: "image",
    icon: dance,
    media: [traditionalImage1],
    description: "Timeless traditional photos to preserve your memories.",
    backgroundImage: "path-to-traditional-background.jpg",
  },
  {
    id: 4,
    name: "Traditional Videography",
    type: "video",
    icon: thai,
    media: [traditionalVideo],
    description: "Beautifully captured traditional moments in video.",
    backgroundImage: "path-to-traditional-video-background.jpg",
  },
  {
    id: 5,
    name: "Engagement Photography",
    type: "image",
    icon: loveIcon,
    media: [engagementImage1],
    description: "Perfect photos to remember the magic of your engagement.",
    backgroundImage: "path-to-engagement-background.jpg",
  },
  {
    id: 6,
    name: "Wedding Photography",
    type: "image",
    icon: wedding,
    media: [weddingImage],
    description: "Capture every moment of your dream wedding.",
    backgroundImage: "path-to-wedding-background.jpg",
  },
  {
    id: 7,
    name: "Coupleshoot",
    type: "image",
    icon: kiss,
    media: [coupleshootImage1],
    description: "Romantic and intimate photos for couples.",
    backgroundImage: "path-to-coupleshoot-background.jpg",
  },
];

const Categories = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sliderRef = useRef(null);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const settings = {
    dots: false, // No dots for navigation
    infinite: false, // Loop through the categories
    speed: 500, // Animation speed
    slidesToShow: 7, // Default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For devices below 768px width
        settings: {
          dots: false, // No dots for navigation
          infinite: false, // Loop through the categories
          speed: 500, // Animation speed
          slidesToShow: 2, // Default for larger screens
          slidesToScroll: 1,
          arrows: false, // Disable navigation arrows
          swipe: true, // Enable swipe functionality
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="app-container">
      <div className="category-slider">
        <Slider className = "slider" ref={sliderRef} {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="category">
              <div
                className="icons"
                onClick={() => toggleDropdown(category.id)}
              >
                <img
                  src={category.icon}
                  alt={`${category.name} icon`}
                  className="category-icon"
                />
                <span>{category.name}</span>
                <span className="arrow">
                  {activeDropdown === category.id ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </span>
              </div>
            </div>
          ))}
        </Slider>

        <div className="floating-buttons">
          <button className="prev-btn" onClick={prevSlide}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {activeDropdown && (
        <div
          className="dropdown"
          style={{
            backgroundImage: `url(${
              categories.find((category) => category.id === activeDropdown)
                .backgroundImage
            })`,
          }}
        >
          <div className="dropdown-content">
            <h1>
              {
                categories.find((category) => category.id === activeDropdown)
                  .name
              }
            </h1>
            <p>
              {
                categories.find((category) => category.id === activeDropdown)
                  .description
              }
            </p>
            <div className="media-container">
              {categories
                .find((category) => category.id === activeDropdown)
                .media.map((item, index) =>
                  categories.find((category) => category.id === activeDropdown)
                    .type === "video" ? (
                    <video
                      key={index}
                      controls
                      src={item}
                      className="media-item video"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      key={index}
                      src={item}
                      alt={`Media ${index + 1}`}
                      className="media-item"
                    />
                  )
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
