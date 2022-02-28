import React from 'react';
import { Container } from '../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, 
        TopLine, Heading, Subtitle, ImgWrapper, Img } from './GamesContent.elements';
import { handleHistory1 } from '../App';

const GamesContent = ({ lightBg, imgStart, lightTopLine, 
                        lightTextDesc, description, headline, 
                        lightText, topLine, img, alt, start }) => {
  return (
    <>
        <GamesCont lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>

                            {/* clickable link to redirect to game profile page (onClick function not working - Location: App.js) */}
                            <Heading lightText={lightText}>{headline}</Heading> 

                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </GamesCont>
    </>
  );
};

export default GamesContent;