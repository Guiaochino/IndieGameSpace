// developers sign in page styled components

import styled from "styled-components";
import { Link } from 'react-router-dom';

// export const Container = styled.div`
//     height: 100%;
//     background: #f2e6d0;
    
//     // linear-gradient (
//     //     108deg,
//     //     rgbs(1, 147, 86, 1) 0%,
//     //     rgba(10, 201, 122, 1) 100%
//     // )
// `;

// export const FormWrap = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     @media screen and (Max-width: 480px) {
//         height: 80%
//     };
// `;

// export const FormContent = styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     @media screen and (Max-width: 480px) {
//         padding: 10px;
//     }
// `;

export const Form = styled.form`
    background: #0a5d64;
    height: auto;
    width: 50%;
    display: grid;
    margin: auto;
    margin-top: 10vh;
    padding: 5vh 2vw;
    border-radius: 4px;
    box-shadow: 0 1px 3 px rgba(0, 0, 0, 0.9);

    @media screen and (Max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    boder: none;
    border-radius: 4px;
`;

export const FormButton = styled(Link)`
    background: #083b40;
    padding: 16px 0;
    boder: none;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    text-decoration : none;
    text-align : center;

    &:hover {
        color : white;
    }
`;

export const ForgotLink = styled(Link)`
    text-align: center;
    justify-content: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    display: flex;
    cursor: pointer;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const SignUpLink = styled(Link)`
    text-align: center;
    justify-content: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    display: flex;
    cursor: pointer;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const SignInLink = styled(Link)`
    text-align: center;
    justify-content: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    display: flex;
    cursor: pointer;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;


export const Text = styled.span`
    display: flex;
    height: 35px;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    color: #000;
`;

export const DropdownContent = styled.select`
    background-color: #f1f1f1;
    padding : 10px;
    margin-bottom: 32px;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    &:hover {
        background-color: #ddd;
    }
`;