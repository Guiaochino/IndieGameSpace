import styled from "styled-components";
import { Gi3DGlasses } from "react-icons/gi";
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #0a5d64;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    };
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
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

export const NavIcon = styled(Gi3DGlasses)`
    margin-right: 10px;
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
    align-items: center;
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
    height: 80px;
    // border-bottom: 2px solid transparent;
    // font-size: 24px;
    // margin-top: 10px;

    // $:hover {
    //     color: white;
    //     border-bottom: 1px solid #fff;
    // }

    // @media screen and (max-width: 960px) {
    //     border: none;
    // }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0rem 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 6px;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }

    // @media screen and (max-width: 960px) {
    //     text-align: center;
    //     padding: 1rem;
    //     width: 100%;
    //     display: table;
    // }
`;