import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    // <TextField
    //   id='standard-full-width'
    //   label='Label'
    //   style={{ margin: 8 }}
    //   placeholder='Placeholder'
    //   helperText='Full width!'
    //   // fullWidth
    //   margin='normal'
    //   InputLabelProps={{
    //     shrink: true,
    //   }}
    // />
    <TextField
      label='None'
      id='margin-none'
      defaultValue='Default Value'
      className={classes.textField}
      helperText='Some important text'
      fullWidth
    />
  );
}
