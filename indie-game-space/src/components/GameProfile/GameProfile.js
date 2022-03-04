import React from 'react';
import GameProfileContent from './GameProfileContent';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';
import Footer from '../Footer/Footer';
import ReactPlayer from 'react-player';
import { VideoWrapper} from './GameProfileContent.elements';
import { Container } from '../../globalStyles';
import StarComment from './StarComment';

const GameProfile = () => {
  return (
    <>
      <GameProfileContent />

      <Container>
        <VideoWrapper>
            <ReactPlayer url="https://www.youtube.com/watch?v=fe9DytkcSlc" playing={false} controls={true} width='1200px' height='675px'/>
        </VideoWrapper>
      </Container>

      <ImgSlider slides={ImgSliderData}/>
      <StarComment />
      <Footer />
    </>
  );
};

export default GameProfile;