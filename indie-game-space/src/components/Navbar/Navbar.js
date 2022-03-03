import React from 'react';
import { Nav, NavLogo, NavIcon,
        MobileIcon, NavMenu, NavItem, NavLinks
         } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib';

const Navbar = ({ toggle }) => {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
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
                            <NavLinks to='/devsSignIn' > <BiUserCircle /> </NavLinks>
                        </NavItem>
                            
                    </NavMenu>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;