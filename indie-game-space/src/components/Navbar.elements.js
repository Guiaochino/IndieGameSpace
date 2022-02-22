import styled from "styled-components";
import { Gi3DGlasses } from "react-icons/gi";
import { Container } from '../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #333333;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index;

    &:hover {
        color: white;
        
    };
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(Gi3DGlasses)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: asolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #333333;
    };
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    font-size: 1.8rem;

    $:hover {
        border-bottom: 1px solid #fff;
    }

    @media screen and (max-width: 960px) {
        border: none;
    }
`;

export const NavLinks = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 1rem;
        width: 100%;
        display: table;

        $:hover {
            color: #333333;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16 px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;