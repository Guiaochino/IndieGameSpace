import styled from "styled-components";
import { Gi3DGlasses } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    background: #0a5d64;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 1% 10%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    };
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8em;
    display: flex;
    align-items: center;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const NavIcon = styled(Gi3DGlasses)`
    margin-right: 1vw;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #fff;

        &:hover {
            color: #000000;
            transition: all 0.3s ease;
        }
    };
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
        // flex-direction: column;
        // width: 100%;
        // height: 90vh;
        // position: asolute;
        // top: 80px;
        // left: ${({ click }) => (click ? 0 : '-100%')};
        // opacity: 1;
        // transition: all 0.5s ease;
        // background: #333333;
    };
`;

export const NavItem = styled.li`
    border-bottom: 2px solid transparent;
    margin-top: 10px;

    $:hover {
        color: white;
        border-bottom: 1px solid #fff;
    }

    @media screen and (max-width: 960px) {
        border: none;
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 2vw;
    cursor: pointer;
    font-size: 1.3em;
    padding: 1vh 0;
   
    &:hover {
        color: #333333;
        transition: all 0.3s ease;
        border-bottom: 5px solid #083b40;
    };

    &:active.active {
        border-bottom: 5px solid #083b40;
        color: #083b40;
    };

    // @media screen and (max-width: 960px) {
    //     text-align: center;
    //     padding: 1rem;
    //     width: 100%;
    //     display: table;
    // }
`;



