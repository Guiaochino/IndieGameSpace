import React, { useState } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon,
        MobileIcon, NavMenu, NavItem, NavLinks,
        NavDropdown } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Dropdown from './Dropdown';

const Navbar = ({ toggle }) => {
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

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

                            <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <NavLinks to='/developers'> 
                                    Developers <NavDropdown />
                                </NavLinks>
                                {dropdown && <Dropdown />}
                            </NavItem>
                            
                            <NavItem>
                                <NavLinks to='games' > Games </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='devsSignUp' > Sign Up </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;