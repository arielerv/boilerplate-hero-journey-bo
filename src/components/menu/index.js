import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { routes } from 'constant';
import Sidebar from 'components/sidebar';

import { SidebarItem } from './styled';

const Menu = ({ onRedirect, onLogout, show }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const getPathName = path => location.pathname === path;

  const onClickSidebar = e => {
    setOpen(false);
    onRedirect(e);
  };

  return (
    show && (
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarItem id={routes.HOME} onClick={onClickSidebar} active={getPathName(routes.HOME)}>
          Home
        </SidebarItem>
        <SidebarItem id={routes.MAIN} onClick={onClickSidebar} active={getPathName(routes.MAIN)}>
          Menu
        </SidebarItem>
        <SidebarItem
          id={routes.DICE_ROLLER}
          onClick={onClickSidebar}
          active={getPathName(routes.DICE_ROLLER)}
        >
          Dice Roller
        </SidebarItem>
        <SidebarItem
          id={routes.PROFILE}
          onClick={onClickSidebar}
          active={getPathName(routes.PROFILE)}
        >
          Profile
        </SidebarItem>
        <SidebarItem onClick={onLogout}>Sign Out</SidebarItem>
      </Sidebar>
    )
  );
};

Menu.propTypes = {
  onRedirect: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Menu.defaultProps = {
  show: false,
};

export default Menu;
