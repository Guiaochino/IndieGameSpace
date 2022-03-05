import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from '../../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, Rating,
        TopLine, Heading, Subtitle, ImgWrapper, Img, Genre
         } from './GameProfileContent.elements';


const GameProfileContent2 = () => {
  return (
    <>
        <GamesCont>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine> Studio MDHR Entertainment Inc. </TopLine>
                            <Heading> Cuphead </Heading> 
                            <Genre> Genre: Adventure, Indie, Simulation </Genre>
                            <Rating> Rating: 4/5 <FaStar /></Rating>
                            <Subtitle> 
                                Cuphead is a classic run and gun action game heavily focused 
                                on boss battles. Inspired by cartoons of the 1930s, 
                                the visuals and audio are painstakingly created with 
                                the same techniques of the era, i.e. 
                                traditional hand drawn cel animation, watercolor 
                                backgrounds, and original jazz recordings.
                            </Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                
                    <InfoColumn>
                        <ImgWrapper>
                            <Img src="https://upload.wikimedia.org/wikipedia/en/b/be/Cuphead_%28artwork%29.jpg" />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </GamesCont>
    </>
  );
};

export default GameProfileContent2;