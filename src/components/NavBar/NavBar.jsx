import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png';
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.appBar} color='inherit'>
      <Toolbar>
        <Typography variant='h6' className={classes.title} color='inherit'>
          <img
            className={classes.logo}
            src={logo}
            alt='Commerce.js'
            height='25px'
          />
          Commerce.js
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label='Show cart items'>
            <Badge badgeContent={totalItems} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
