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
                        <NavLogo to='/'>
                            <NavIcon />
                                IndieGameSpace
                        </NavLogo>

                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

                        <NavMenu> 
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                       
                            <NavItem>
                                <NavLinks to='/developers'>
                                    Developers
                                </NavLinks>
                            </NavItem>
                        
                            <NavItem>
                                <NavLinks to='/games'>
                                    Games
                                </NavLinks>
                            </NavItem>

                            {/* <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>
                                            &nbsp;SIGN UP&nbsp;
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn> */}
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;