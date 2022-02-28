import React from 'react';
import { Container } from '../globalStyles';
import { DevsCont, InfoRow, InfoColumn, TextWrapper, 
        TopLine, Heading, Subtitle, ImgWrapper, Img } from './DevsContent.elements';

const DevsContent = ({ lightBg, imgStart, lightTopLine, 
                        lightTextDesc, description, headline, 
                        lightText, topLine, img, alt, start }) => {
  return (
    <>
        <DevsCont lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
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
        </DevsCont>
    </>
  );
};

export default DevsContent;