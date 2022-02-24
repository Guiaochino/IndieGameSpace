import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,
      SidebarLink, SidebarMenu } from './Sidebar.elements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/' onClick={toggle}> Home </SidebarLink>
            <SidebarLink to='developers' onClick={toggle}> Developers </SidebarLink>
            <SidebarLink to='games' onClick={toggle}> Games </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;