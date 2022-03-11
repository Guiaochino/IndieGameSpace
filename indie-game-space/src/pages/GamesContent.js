import React, { useState, useEffect } from 'react';
import { Container } from '../globalStyles';
import { GamesCont, InfoRow, InfoColumn, TextWrapper, 
        TopLine, Heading, Subtitle, ImgWrapper, Img, Genre } from './GamesContent.elements';

const GamesContent = (props) => {

    const [lightBg, setLightBg] = useState(false);
    const [imgStart, setImgStart] = useState();
    const [lightTopLine, setLighttopLine] = useState(true);
    const [textAlign, setTextAlign] = useState(true);
    const [lightText, setLightText] = useState(true);
    const [lightTextDesc, setLightDesc] = useState(true);
    const [lightTextGenre, setLightTextGenre] = useState(true);
    const [start, setStart] = useState();
    const [padding, setPadding] = useState(true);

    useEffect(() => {
        if ((props.order + 1) % 2 === 0) {
            setLightBg(true);
            setImgStart('start');
            setLighttopLine(false);
            setTextAlign(false);
            setLightText(false);
            setLightDesc(false);
            setLightTextGenre(false);
            setStart('start');
            setPadding(false);
        } else {
            setLightBg(false);
            setImgStart('');
            setLighttopLine(true);
            setTextAlign(true);
            setLightText(true);
            setLightDesc(true);
            setLightTextGenre(true);
            setStart('');
            setPadding(true);
        }
    }, [])

    return (
        <>
        <GamesCont lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine} textAlign={textAlign}> {props.developer} </TopLine>
                            <Heading lightText={lightText} textAlign={textAlign}> {props.title} </Heading>
                            <Genre lightTextGenre={lightTextGenre} textAlign={textAlign}> {props.genre} </Genre>
                            <Subtitle lightTextDesc={lightTextDesc} textAlign={textAlign}> {props.desc} </Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start} padding={padding}>
                            <Img src={props.image} alt='game image' />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </GamesCont>
        </>
    );
};

export default GamesContent;