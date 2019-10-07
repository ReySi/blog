import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Header: React.FC = () => (
  <div className="header">
    <AppBar title="Simons Blog" position="static">
      <Toolbar>
        <TypoGraphy variant="h6">
            My header
        </TypoGraphy>
      </Toolbar>
      <div className="sticky-tab-bar">
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
      </div>
    </AppBar>
  </div>
);

export default Header;