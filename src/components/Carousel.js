import React, { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = ({ children }) => {
  console.log("children: ", children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div onClick={goToPrevious} className='navButton'><FaAngleLeft/></div>
      <div className="carousel-content">{children[currentIndex]}</div>
      <div onClick={goToNext} className='navButton'><FaAngleRight/></div>
    </div>
  );
};

export default Carousel;