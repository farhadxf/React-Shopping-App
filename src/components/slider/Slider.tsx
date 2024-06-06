import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = useMemo(
    () => [
      {
        imageUrl: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg',
        text: 'Summer Sale - Up to 50% Off',
      },
      {
        imageUrl: 'https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg',
        text: 'Spring Specials',
      },
      {
        imageUrl: 'https://images.pexels.com/photos/346752/pexels-photo-346752.jpeg',
        text: 'New Arrivals with LIMITED TIME OFFERS',
      },
    ],
    [] //// Empty dependency array ensures that useMemo runs only once
  );

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex); // Update the current slide to the specified slide index
  };

  useEffect(() => {
    //  determine the next slide index
    const nextSlide = () => {
      return currentSlide >= data.length - 1 ? 0 : currentSlide + 1;
    };
    // Setting an interval to update the current slide every 10 seconds
    const interval = setInterval(() => {
      setCurrentSlide(nextSlide());
    }, 10000);
    // Cleanup function to clear the interval when the component unmounts or dependencies change and rerun the effect when currentSlide or data change
    return () => clearInterval(interval);
  }, [currentSlide, data]);

  const sliderImgStyles = {
    backgroundImage: `url(${data[currentSlide].imageUrl})`, // Set the background image URL based on the current slide
  };

  const slideVariants = {
    hidden: {
      x: '100%', // Initial position off screen to the right
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0, // Centered position
      transition: {
        duration: 0.01,
      },
    },

    exit: {
      opacity: 0,
      x: '-100%', // Exit position off screen to the left

      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='slider'>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='slider-img'
          style={sliderImgStyles}
        >
          <h1>{data[currentSlide].text}</h1>
        </motion.div>
      </AnimatePresence>

      <div className='sliders'>
        {data.map((_, slideIndex) => (
          //adding an underscore parameter to avoid linting error
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)} //trigger slide change
            className={currentSlide === slideIndex ? 'slide-number-active' : 'slide-number'} //apply active class to the current slide
          >
            {slideIndex + 1} {/* display the numbers */}
            {/* or replace the number with any icons */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
