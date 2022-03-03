import styled from 'styled-components';

export const DevsCont = styled.div`
    color: #ffffff;
    padding: 160px 0;
    background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#333333')};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px:
    margin-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    };
`;

export const TextWrapper = styled.div`
    max-width: 540 px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    };
`;

export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#000000')}; 
    font-size: 18px;
    line-height 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #0a5d64;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    font-weight: bold;

    &:hover {
        color: ${({ lightText }) => (lightText ? '#f2e6d0' : '#333333')};
        transition: all 0.3s ease;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')}
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;