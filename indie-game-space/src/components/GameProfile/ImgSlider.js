import React, {useState} from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './ImgSlider.css';

const ImgSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = async () => {
      await setCurrent(current === length -1 ? 0 : current + 1);
  };
  
  const prevSlide = async () => {
    await setCurrent(current === 0 ? length -1 : current - 1);
  };

  if(!Array.isArray(props.slides) || props.slides.length <= 0) {
      return null;
  };

  return (
    <section className='slider'>
        <FaArrowLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowRight className='right-arrow'  onClick={nextSlide} />

        {props.slides.map((image, index) => {
            return (
              <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                {index === current && (
                  <img src={image} alt="samples" className='image' /> 
                )}
              </div>
            );
        })} 
    </section>
  );
};

export default ImgSlider;