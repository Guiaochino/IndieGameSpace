import React from 'react';
import { Container } from '../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, 
        TopLine, Heading, Subtitle, ImgWrapper, Img, Genre } from './GamesContent.elements';

const GamesContent = ({ lightBg, imgStart, lightTopLine, lightTextGenre,
                        lightTextDesc, description, headline, textAlign,
                        lightText, topLine, img, alt, start, genre, padding }) => {
  return (
    <>
        <GamesCont lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine} textAlign={textAlign}> {topLine} </TopLine>
                            <Heading lightText={lightText} textAlign={textAlign}> {headline} </Heading>
                            <Genre lightTextGenre={lightTextGenre} textAlign={textAlign}> {genre} </Genre>
                            <Subtitle lightTextDesc={lightTextDesc} textAlign={textAlign}> {description} </Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start} padding={padding}>
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