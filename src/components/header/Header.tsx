import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import avatarPicture from '../../images/image.jpg';

const Header: React.FC = () => (
    <AppBar position="sticky" className="blog-header">
      <Toolbar>
        <TypoGraphy variant="h3">
          My header
        </TypoGraphy>
        <Avatar src={avatarPicture} className="big-avatar" ></Avatar>
      </Toolbar>
        <Tabs
          value="irgendwas"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
    </AppBar>

);

export default Header;