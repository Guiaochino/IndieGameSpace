import React, { useState } from 'react';
import { Nav, NavLogo, NavIcon,
        MobileIcon, NavMenu, NavItem, NavLinks, Login, DropMenu, DropItem
         } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';

const LogoutRender =() =>{

    const [show, setShow] = useState(false);

    return(
        <DropMenu title={ (<Login/>) } variant="success" show={show}
        onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} 
        menuVariant="dark" >
            <DropItem> Profile </DropItem>
            <DropItem> LogOut </DropItem>
        </DropMenu>
    )
};

const LoginRender = () => {

    const [show, setShow] = useState(false);

    return(
        <DropMenu title={ (<Login/>) } variant="success" show={show}
        onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} 
        menuVariant="dark" >
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