import React from 'react';
import Video from '../../images/Video.mp4';
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroH1, HeroP, HeroOverlay } from './HeroSection.elements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay='autoPlay' loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroOverlay></HeroOverlay>
        
        <HeroContent>
            <HeroH1> IndieGameSpace </HeroH1>
            <HeroP>
                content here content here content here content here content here content here content here content here content here content here content here content here
            </HeroP>
        </HeroContent>
        
    </HeroContainer>
  );
};

export default HeroSection;