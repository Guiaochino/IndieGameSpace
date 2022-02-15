import React from 'react';
import { Container, Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { HomeCont, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle } from './HomeContent.elements';

const HomeContent = ({primary, lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topLine }) => {
  return (
    <>
        <HomeCont lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </HomeCont>
    </>
  );
};

export default HomeContent;