import React from 'react';
import GameProfileContent2 from './GameProfileContent2';
import ImgSliderSub from './ImgSliderSub';
import {ImgSliderDataSub} from './ImgSliderDataSub';
import Footer from '../Footer/Footer';
import ReactPlayer from 'react-player';
import { VideoWrapper} from './GameProfileContent.elements';
import { Container } from '../../globalStyles';
import StarComment from './StarComment';

const GameProfile2 = () => {
  return (
    <>
      <GameProfileContent2 />

      <Container>
        <VideoWrapper>
            <ReactPlayer url="https://www.youtube.com/watch?v=NN-9SQXoi50" playing={false} controls={true} width='1200px' height='675px'/>
        </VideoWrapper>
      </Container>

      <ImgSliderSub slides={ImgSliderDataSub}/>
      <StarComment />
      <Footer />
    </>
  );
};

export default GameProfile2;