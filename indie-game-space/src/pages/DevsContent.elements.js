import styled from 'styled-components';

export const DevsCont = styled.div`
    color: #ffffff;
    padding: 80px 0;
    background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#333333')};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 0px -15px 0px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px:
    margin-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 100%;
    flex-basis: 50%;

    @media screen and (max-width: 1000px) {
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
    text-align: ${({ textAlign }) => (textAlign ? 'left' : 'right')}; 

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    };
`;

export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#000000')}; 
    text-align: ${({ textAlign }) => (textAlign ? 'left' : 'right')}; 
    font-size: 18px;
    line-height 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    max-width: 600px;
`;

export const Heading = styled.h1`
    text-align: ${({ textAlign }) => (textAlign ? 'left' : 'right')}; 
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #85cca0;
    cursor: pointer;
    text-decoration: none;
    max-width: 600px;
    font-weight: bold;

    &:hover {
        color: ${({ lightText }) => (lightText ? '#fff' : '#333333')};
        transition: all 0.3s ease;
    }
`;

export const Genre = styled.p`
    color: ${({ lightTextGenre }) => (lightTextGenre ? '#a9b3c1' : '#1c2237')};
    text-align: ${({ textAlign }) => (textAlign ? 'left' : 'right')}; 
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
`;


export const Subtitle = styled.p`
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    text-align: ${({ textAlign }) => (textAlign ? 'left' : 'right')};
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 40px;
`;

export const ImgWrapper = styled.div`
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
    padding: ${({ padding }) => (padding ? '0 0 0 125px' : '0 125px 0 0')};
    max-width: 1000px;
    padding-bottom: 50px;
    display: flex;
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    width: 100%;
    height: 100%;
    box-shadow: 8px 8px 15px #85cca0;
    background: #fff;
`;