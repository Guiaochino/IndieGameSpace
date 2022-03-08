import React, { useState } from 'react';
import { Nav, NavLogo, NavIcon,
        MobileIcon, NavMenu, NavItem, NavLinks, Login, DropMenu, DropItem
         } from './Navbar.elements.js';
import { FaBars } from 'react-icons/fa';

const LogoutRender =() =>{

    const [show, setShow] = useState(false);

    function destroySession() {
        sessionStorage.clear();
    };

    return(
        <DropMenu title={ (<Login/>) } variant="success" show={show}
        onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} 
        menuVariant="dark" >
            <DropItem href='/Profile'> Profile </DropItem>
            <DropItem href='/' onClick={ destroySession } > LogOut </DropItem>
        </DropMenu>
    )
};

const LoginRender = () => {

    const [show, setShow] = useState(false);

    return(
        <DropMenu title={ (<Login/>) } variant="success" show={show}
        onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}} 
        menuVariant="dark" >
            <DropItem href='/login' > Login </DropItem>
            <DropItem href='/signup'> Sign Up </DropItem>
        </DropMenu>
    )
};

const Navbar = (props) => {

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

                {props.logStatus ? (<LogoutRender />) : (<LoginRender />) }
                
            </Nav>
    </>
    );
};

export default Navbar;