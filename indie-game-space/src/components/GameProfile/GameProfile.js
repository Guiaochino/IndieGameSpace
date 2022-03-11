import React from 'react';
import { useLocation } from 'react-router-dom';
import GameProfileContent from './GameProfileContent';
import ImgSlider from './ImgSlider';
import { ImgSliderData } from './ImgSliderData';
import Footer from '../Footer/Footer';
import ReactPlayer from 'react-player';
import { VideoWrapper} from './GameProfileContent.elements';
import { Container } from '../../globalStyles';
import StarComment from './StarComment';

const GameProfile = () => {

  const location = useLocation();
  const gameDetails = location.state;

  // Samp Images
  const samp_image = [gameDetails.samp_img_1, gameDetails.samp_img_2, gameDetails.samp_img_3, gameDetails.samp_img_4, gameDetails.samp_img_5, gameDetails.samp_img_6];
  const filter_samp = samp_image.filter(x => x);

  

  return (
    <>
      <GameProfileContent dev={gameDetails.devUser} title={gameDetails.game_name} genre={gameDetails.game_genre} rating={gameDetails.rating} description={gameDetails.game_desc} game_img={gameDetails.game_image} />

      <Container>
        <VideoWrapper>
            <ReactPlayer url={gameDetails.trailer_link} playing={false} controls={true} width='1200px' height='675px'/>
        </VideoWrapper>
      </Container>

      <ImgSlider slides={filter_samp} />
      <StarComment />
      <Footer />
    </>
  );
};

export default GameProfile;