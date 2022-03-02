import React from 'react';
import { Container } from '../../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, 
        TopLine, Heading, Subtitle, ImgWrapper, Img } from './GameProfileContent.elements';

const GameProfileContent = () => {
  return (
    <>
        <GamesCont>
            <Container>
                <InfoRow>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine> [Game Genre Here] </TopLine>
                            <Heading> [GAME TITLE HERE] </Heading> 
                            <Subtitle> [Game Deiscription Here]</Subtitle>
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