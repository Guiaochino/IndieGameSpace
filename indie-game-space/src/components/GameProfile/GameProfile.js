import React from 'react';
import GameProfileContent from './GameProfileContent';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';
import Footer from '../Footer/Footer';
import ReactPlayer from 'react-player';
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
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=fe9DytkcSlc" playing={false} controls={true} /> */}
          {/* </YoutubeBox>
        </VideoWrapper>
      </Container> */}

      <ImgSlider slides={ImgSliderData}/>;
      <Footer />
    </>
  );
};

export default GameProfile;