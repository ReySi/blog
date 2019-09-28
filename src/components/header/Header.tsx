import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Header: React.FC = () => (
    <div className="header">
        <AppBar title="Simons Blog" position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <TypoGraphy variant="h6">
                    My header
                </TypoGraphy>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;