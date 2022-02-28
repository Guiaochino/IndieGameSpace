import React, {useState} from 'react'
import { ImgSliderData } from './ImgSliderData';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './ImgSlider.css';

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current + 1);
  };

  // image slider component for game profile
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
  };

  if(!Array.isArray(slides) || slides.length <= 0) {
      return null;
  }

  return (
    <section className='slider'>
        <FaArrowLeft className='left-arrow' onClick={prevSlide} />
        
        {ImgSliderData.map((slide, index) => {
            return (
              <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                {index === current && (
                  <img src={slide.image} alt="gameImg" className='image' /> 
                )}
              </div>
            );
        })}

        <FaArrowRight className='right-arrow'  onClick={nextSlide} />
    </section>
  );
};

export default ImgSlider;