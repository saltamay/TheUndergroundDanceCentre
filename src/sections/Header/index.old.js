import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'black',
  },
  logo: {
    border: '1px solid white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '1.15',
    margin: '10px',
    textAlign: 'left',
    textTransform: 'none',
    padding: '10px 25px',
  },
}));

export function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Button to='/' className={classes.logoContainer} disableRipple>
          <div alt='Company Logo' className={classes.logo}>
            The
            <br />
            Underground
            <br />
            Dance
            <br />
            Centre
          </div>
        </Button>
        <span>Home</span>
      </Toolbar>
    </AppBar>
  );
}
