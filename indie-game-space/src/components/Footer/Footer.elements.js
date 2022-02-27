import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Gi3DGlasses } from "react-icons/gi";

export const FooterContainer = styled.div`
    background-color: #0a5d64;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// export const FooterHeading = styled.h1`
//     font-family: 'Montserrat', sans-serif;
//     color: white;
//     margin-bottom: 24px;
//     font-size: 48px;
//     align-items: center;
//     justify-content: center;
// `;

export const FooterSubHeading = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: white;
    margin-bottom: 10px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
`;

export const FooterSubText = styled.p`
    color: white;
    margin-bottom: 1px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
`;

// export const Form = styled.form`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media screen and (max-width: 828px) {
//         width: 80%;
//         flex-direction: columm;
//     };
// `;

// export const FormInput = styled.input`
//     padding: 10px 20px;
//     boreder-radius: 2px;
//     margin-right: 10px;
//     outline: none;
//     order: none;
//     font-size: 16px;
//     border: 1px solid #ffffff;

//     &::placeholder{
//         color: #242424;
//     };
// `;

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