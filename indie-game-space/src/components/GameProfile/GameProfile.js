import React from 'react';
import TopFiller from '../TopFiller/TopFiller';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';

const GameProfile = () => {
  return (
    <>
      <TopFiller />
      <ImgSlider slides={ImgSliderData}/>;
    </>
  );
};

export default GameProfile;