import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from '../../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, Rating,
        TopLine, Heading, Subtitle, ImgWrapper, Img, Genre
         } from './GameProfileContent.elements';


const GameProfileContent = () => {
  return (
    <>
        <GamesCont>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine> FJRD Interactive </TopLine>
                            <Heading> Among Trees </Heading> 
                            <Genre> Genre: Adventure, Indie, Simulation </Genre>
                            <Rating> Rating: 3.5/5 <FaStar /></Rating>
                            <Subtitle> 
                                Escape to an enchanting, living sandbox surrounded by 
                                wildlife and nature. Scavenge materials and craft tools to turn your 
                                small cabin into a warm, well-supplied home. Survive by fishing, cooking 
                                and growing your own food. Be careful though, the forest is as dangerous 
                                as it is wonderful.
                            </Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                
                    <InfoColumn>
                        <ImgWrapper>
                            <Img src="https://worldofpcgames.co/wp-content/uploads/2021/11/Among-Trees-Free-Download-By-Worldofpcgames.jpg" />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </GamesCont>
    </>
  );
};

export default GameProfileContent;