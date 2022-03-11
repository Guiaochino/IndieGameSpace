import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Container } from '../../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, Rating,
        TopLine, Heading, Subtitle, ImgWrapper, Img, Genre
         } from './GameProfileContent.elements';


const GameProfileContent = (props) => {

    return (
        <>
            <GamesCont>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine> {props.dev} </TopLine>
                                <Heading> {props.title} </Heading> 
                                <Genre> {props.genre} </Genre>
                                <Rating> {props.rating} <FaStar /></Rating>
                                <Subtitle> 
                                    {props.description}
                                </Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                    
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={props.game_img} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </GamesCont>
        </>
    );
};

export default GameProfileContent;