import React from 'react';
import Video from '../../images/Video.mp4';
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroH1, HeroP, HeroOverlay,
        HeroBtnWrapper, Button } from './HeroSection.elements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay='autoPlay' loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroOverlay></HeroOverlay>
        
        <HeroContent>
            <HeroH1> IndieGameSpace </HeroH1>
            <HeroP> Welcome to IndieGameSpace </HeroP>
            <HeroP> The Home of Indepdendent Game Developers </HeroP>
            <HeroBtnWrapper>
              <Button to='games'>
                Discover Games 
              </Button>
            </HeroBtnWrapper>
        </HeroContent>
        
    </HeroContainer>
  );
};

export default HeroSection;