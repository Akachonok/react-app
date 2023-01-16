import React from 'react';

import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Menu, MenuItem } from '@mui/material';

import './header.css'


export function Header() {
  const isNoLoginPage = window.location.pathname !== '/';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [logout, setLogout] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => setLogout(true);
  const handleProfile = () => setProfile(true);

  return (
    <div className="header-container">
      <img 
        className="header-container__logo" 
        src="https://w7.pngwing.com/pngs/70/772/png-transparent-vimeo-computer-icons-logo-short-film-vitag-svg-miscellaneous-television-text-thumbnail.png" alt="logo"/>
      <div className='header-container__controller'>
        {isNoLoginPage && <Button color="inherit" onClick={handleClick}><AccountCircleIcon /></Button>}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleProfile}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <div>

        {logout && <Navigate to="/" />}
        {profile && <Navigate to="/profile" />}
    </div>
      </div>
    </div>
  )
}