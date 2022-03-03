import React from 'react';
import GameProfileContent from './GameProfileContent';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';

const GameProfile = () => {
  return (
    <>
      <GameProfileContent />
      <ImgSlider slides={ImgSliderData}/>;
    </>
  );
};

export default GameProfile;