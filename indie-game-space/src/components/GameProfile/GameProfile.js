import React from 'react';
import GameProfileContent from './GameProfileContent';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';
import Footer from '../Footer/Footer';
import ReactPlayer from 'react-player/lazy';
import { YoutubeBox, VideoWrapper } from './GameProfileContent.elements';
import { Container } from '../../globalStyles';

const GameProfile = () => {
  return (
    <>
      <GameProfileContent />

      {/* TODO: YOUTUBE PLAYER GRAY SCREEN ERROR */}
      {/* <Container>
        <VideoWrapper>
          <YoutubeBox>
            <video src='https://www.youtube.com/watch?v=fe9DytkcSlc' controls/>
            <ReactPlayer url="https://www.youtube.com/watch?v=fe9DytkcSlc" playing={true} controls={true}/>
          </YoutubeBox>
        </VideoWrapper>
      </Container> */}

      <iframe width="420" height="315"
      src="https://www.youtube.com/embed/fe9DytkcSlc">
      </iframe>

      <ImgSlider slides={ImgSliderData}/>
      <Footer />
    </>
  );
};

export default GameProfile;