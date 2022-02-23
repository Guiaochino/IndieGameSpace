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
            <SidebarLink to='/'> Home </SidebarLink>
            <SidebarLink to='/'> Developers </SidebarLink>
            <SidebarLink to='/'> Games </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;