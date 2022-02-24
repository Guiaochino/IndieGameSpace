import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon,
        MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = ({ toggle }) => {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                                IndieGameSpace
                        </NavLogo>

                        <MobileIcon onClick={toggle} to='/'>
                            <FaBars />
                        </MobileIcon>

                        <NavMenu> 
                                <NavLinks to='/' > Home </NavLinks>
                                <NavLinks to='developers' > Developers </NavLinks>
                                <NavLinks to='games' > Games </NavLinks>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;