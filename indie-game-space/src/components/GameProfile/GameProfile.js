import React from 'react';
import TopFiller from '../TopFiller/TopFiller';
import GameProfileContent from './GameProfileContent';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';

const GameProfile = () => {
  return (
    <>
      <TopFiller />
      <GameProfileContent />
      <ImgSlider slides={ImgSliderData}/>;
    </>
  );
};

export default GameProfile;