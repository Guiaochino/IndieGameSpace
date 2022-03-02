import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon,
        MobileIcon, NavMenu, NavItem, NavLinks
         } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = ({ toggle }) => {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' >
                            <NavIcon />
                                IndieGameSpace
                        </NavLogo>

                        <MobileIcon onClick={toggle} to='/'>
                            <FaBars />
                        </MobileIcon>

                        <NavMenu> 
                            <NavItem>
                                <NavLinks to='/' > 
                                    Home 
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/developers'> 
                                    Developers 
                                </NavLinks>
                            </NavItem>
                            
                            <NavItem>
                                <NavLinks to='games' > Games </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='devsSignIn' > Login </NavLinks>
                            </NavItem>
                            
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;