import React, { useState } from 'react';
import { Nav, NavLogo, NavIcon, LogOut, NavButton,
        MobileIcon, NavMenu, NavItem, NavLinks, Login, DropMenu, DropItem
         } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';

const LogoutRender =() =>{
    return(
        <DropMenu title={ (<Login/>) } variant="success" >
            <DropItem> Profile </DropItem>
            <DropItem> LogOut </DropItem>
        </DropMenu>
    )
};

const LoginRender = () => {
    return(
        <DropMenu title={ (<Login/>) } variant="success" >
            <DropItem href={'/devsSignIn'}> Login </DropItem>
            <DropItem href={'/devsSignUp'}> Sign Up </DropItem>
        </DropMenu>
    )
};

const Navbar = (props) => {

    const [view, setView] = useState(props.logStatus ? true : false);

    return (
        <>
            <Nav>
                <NavLogo to='/' >
                    <NavIcon /> IndieGameSpace 
                </NavLogo>
                <MobileIcon onClick={props.toggle} to='/'> <FaBars /> </MobileIcon>

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
    
                </NavMenu>

                {view ? (<LogoutRender />) : (<LoginRender/>) }
                
            </Nav>
    </>
    );
};

export default Navbar;