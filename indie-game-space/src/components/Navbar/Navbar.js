import React from 'react';
import { Nav, NavLogo, NavIcon, LogOut, NavButton,
        MobileIcon, NavMenu, NavItem, NavLinks, Login
         } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLogo to='/' >
                    <NavIcon /> IndieGameSpace 
                </NavLogo>

                <MobileIcon onClick={toggle} to='/'> <FaBars /> </MobileIcon>

                <NavMenu> 
                    <NavItem>
                        <NavLinks to='/' > Home </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/developers'> Developers </NavLinks>
                    </NavItem>
                        
                    <NavItem>
                        <NavLinks to='/games' > Games </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/devsSignIn' > <Login /> </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavButton> <LogOut /> </NavButton>
                    </NavItem>
                        
                </NavMenu>
            </Nav>
    </>
    );
};

export default Navbar;