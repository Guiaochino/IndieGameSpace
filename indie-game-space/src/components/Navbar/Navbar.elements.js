import styled from "styled-components";
import { Gi3DGlasses } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const Nav = styled.nav`
    background: #85cca0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 1% 10%;
    Position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    };
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
    align-items: center;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const NavIcon = styled(Gi3DGlasses)`
    margin-right: 1vw;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const Login = styled(BiUserCircle)`
    margin-right: 0;
    color: #fff;
    font-size: 24px;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
`;

export const LogOut = styled(FaPowerOff)`
    margin-right: 0;
    color: #fff;
    font-size: 24px;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    }
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
            color: #333333;
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

// For Dropdown of Signup naf Login
export const DropMenu = styled(DropdownButton)``;

export const DropItem = styled(Dropdown.Item)``;

export const NavLinks = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 2vw;
    cursor: pointer;
    font-size: 1.3Rem;
    padding: 1vh 0;
   
    &:hover {
        color: #333333;
        transition: all 0.3s ease;
        border-bottom: 5px solid #333333;
    };
`;

export const NavButton = styled.button`
    color: #fff;
    text-decoration: none;
    margin-left: 2vw;
    cursor: pointer;
    font-size: 1.3Rem;
    background: none;
    border: none;
   
    &:hover {
        color: #333333;
        transition: all 0.3s ease;
    };
`;



