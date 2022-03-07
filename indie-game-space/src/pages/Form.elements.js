// developers sign in page styled components

import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Form = styled.form`
    background: #333333;
    height: auto;
    width: 50%;
    display: grid;
    margin: auto;
    margin-top: 10vh;
    margin-bottom: 10vh;
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
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 1em;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 2vh 1vw;
    margin-bottom: 4vh;
    boder: none;
    border-radius: 10px;
`;

export const FormButton = styled.button`
    background: #85cca0;
    padding: 16px 0;
    boder: none;
    border-radius: 25px;
    color: #333;
    font-size: 20px;
    cursor: pointer;
    text-decoration : none;
    text-align: center;

    &:hover {
        color : #fff;
        background : #548a69;
        transition : all 0.2s ease-in-out;
    }
`;

export const ValidationText = styled.p`
    color : ${props => props.valid ? 'green' : 'red'};
    margin-top : -3vh;
    margin-bottom : 2vh;
    font-size : 0.8em;
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
        color: #85cca0;
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
        color: #85cca0;
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
        color: #85cca0;
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