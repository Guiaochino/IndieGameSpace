// developers sign up page styled components

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #f2e6d0;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (Max-width: 480px) {
        height: 80%
    };
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (Max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #0a5d64;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
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

export const FormButton = styled.button`
    background: #083b40;
    padding: 16px 0;
    boder: none;
    border-radius: 25px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
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

export const DropBtn = styled.select`
    background-color: #fff;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;

    &:hover {
        background-color: #fff;
    }
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`;

export const DropdownContent = styled.div`
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    option {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    &:hover {
        background-color: #ddd;
    }
`;