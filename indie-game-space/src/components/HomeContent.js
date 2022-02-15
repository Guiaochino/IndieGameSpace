import React from 'react';
import Container from '../globalStyles';
import { HomeCont } from './HomeContent.elements';
import { InfoRow, InfoColumn, TextWrapper } from './HomeContent.elements';

const HomeContent = ({lightBg, imgStart}) => {
  return (
    <>
        <HomeCont lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        </TextWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </HomeCont>
    </>
  );
};

export default HomeContent;