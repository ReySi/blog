import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import avatarPicture from '../../images/image.jpg';
import Sticky from 'react-sticky-el';

const Header: React.FC = () => (
    <AppBar position="relative">
      <Toolbar>
        <TypoGraphy variant="h3">
          Simon's Blog
        </TypoGraphy>
        <Avatar src={avatarPicture} className="big-avatar"></Avatar>
      </Toolbar>
      <Sticky>
        <Tabs
          value="irgendwas"
          indicatorColor="primary"
          textColor="primary"
          centered
          className="nav-bar"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Sticky>
    </AppBar>

);

export default Header;