import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const ImageSlider = () => {
  // Array of images for the slider
  const images = [
    { src: 'https://i.imgur.com/gZDCuj9.jpeg', alt: 'Image 1' },
    { src: 'https://i.imgur.com/eVG4WE7.jpeg', alt: 'Image 2' },
    { src: 'https://i.imgur.com/xJNhvVz.jpeg', alt: 'Image 3' },
    { src: 'https://i.imgur.com/a4igXSJ.jpeg', alt: 'Image 4' },
    { src: 'https://i.imgur.com/a4igXSJ.jpeg', alt: 'Image 5' },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center p-2">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-60 object-cover rounded-lg shadow-lg" // Fixed height and object-cover for uniform size
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
