import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Link from 'next/link';

const ImageSlider = () => {
  const images = [
    { src: 'https://i.imgur.com/oY7J1g1.jpeg', alt: 'Image 1', link: '/seva' },
    { src: 'https://i.imgur.com/LLq8qd4.jpeg', alt: 'Image 2', link: '/solo' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center p-2">
            <Link href={image.link}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer" 
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;