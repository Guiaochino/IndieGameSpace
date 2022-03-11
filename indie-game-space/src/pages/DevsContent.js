import React, { useEffect, useState } from 'react';
import { Container } from '../globalStyles';
import { DevsCont, InfoRow, InfoColumn, TextWrapper, 
        TopLine, Heading, Subtitle, ImgWrapper, Img } from './DevsContent.elements';
import defaultUser from '../images/defaultUser.png';

const DevsContent = (props) => {
    
    const [lightBg, setLightBg] = useState(false);
    const [imgStart, setImgStart] = useState();
    const [lightTopLine, setLighttopLine] = useState(true);
    const [textAlign, setTextAlign] = useState(true);
    const [lightText, setLightText] = useState(true);
    const [lightTextDesc, setLightDesc] = useState(true);
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
            setStart('start');
            setPadding(false);
        } else {
            setLightBg(false);
            setImgStart('');
            setLighttopLine(true);
            setTextAlign(true);
            setLightText(true);
            setLightDesc(true);
            setStart('');
            setPadding(true);
        }
    }, [props.order])

    return (
        <>
            <DevsCont lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine} textAlign={textAlign}> {props.type} </TopLine>
                                <Heading lightText={lightText} textAlign={textAlign}> {props.devname} </Heading>
                                <Subtitle lightTextDesc={lightTextDesc} textAlign={textAlign}> Email: {props.email} </Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start} padding={padding}>
                                <Img src={props.profile_picture === "" ? defaultUser : props.profile_picture} alt="Profile" />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </DevsCont>
        </>
    );
};

export default DevsContent;