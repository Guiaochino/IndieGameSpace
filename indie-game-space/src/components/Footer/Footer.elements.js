import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Gi3DGlasses } from "react-icons/gi";

export const FooterContainer = styled.div`
    background-color: #0a5d64;
    padding: 2vh 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterSubHeading = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin-bottom: 10px;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export const FooterSubText = styled.p`
    color: white;
    margin-bottom: 1px;
    margin-right: 80px;
    margin-left: 80px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        padding-top: 32px;
    };
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    };
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 820px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    };
`;

export const FooterLinksTitle = styled.h2`
    margin-bottom: 0;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover{
        color: #0467fb;
        transition: 0.3s ease-out;
    };
`;

export const SocialMedia = styled.section`
    max-width: 820px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    };
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const SocialIcon = styled(Gi3DGlasses)`
    margin-right: 10px;
`;

export const WebsiteRights = styled.small`
    color: #fff;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;