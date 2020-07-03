import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Header } from '../Header';
import { CardList } from '../CardList';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '30px 30px',
  },
  specialText: {
    color: '#229AF8',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(10),
    margin: '200px 30px 0 54px',
  },
  label: {
    color: '#FFF',
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '32px',
  },
  underline: {
    color: 'white',
  },
  indicator: {
    backgroundColor: '#FFF',
  },
}));

export function Home() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [query, setQuery] = React.useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <TextField
            id='standard-full-width'
            label='Dashboard'
            style={{ margin: 30 }}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
              className: classes.label,
            }}
            value={query}
            onChange={handleChange}
          />
        </Toolbar>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label='simple tabs example'
          style={{ margin: '30px 30px 0 30px', paddingLeft: 24 }}
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab label='Rockets' />
          <Tab label='Satellites' />
        </Tabs>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.container}>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <span className={classes.icon}>
                <svg
                  width='35'
                  height='30'
                  viewBox='0 0 30 29'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M23.1981 16.8954C27.9339 11.245 29.1424 3.37363 29.0117 0.989368C29.0117 0.728079 28.8811 0.499451 28.7178 0.303484C28.5545 0.140178 28.3259 0.00953344 28.0319 0.00953344C25.6476 -0.121111 17.7763 1.05469 12.1586 5.79056L10.8521 5.30064C8.56587 4.45145 5.98564 5.13733 4.4179 6.99902L0.792512 11.2776C0.269933 11.8655 0.531223 12.8127 1.28243 13.074L5.16911 14.5111C4.31992 15.9482 3.73202 17.1566 3.34008 18.0058C3.01347 18.6917 3.17678 19.5082 3.73202 20.0635L8.9578 25.3219C9.48038 25.8445 10.2969 26.0078 11.0155 25.6812C11.8646 25.2893 13.0731 24.7014 14.5102 23.8522L15.9146 27.7389C16.1759 28.4901 17.1231 28.7187 17.711 28.2288L21.9569 24.6034C23.8186 23.0356 24.5045 20.4554 23.6553 18.1691L23.1981 16.8954ZM20.7485 12.8127C19.5074 14.0538 17.4824 14.0538 16.2086 12.8127C14.9675 11.5716 14.9675 9.54659 16.2086 8.27281C17.4497 7.03168 19.4747 7.03168 20.7485 8.27281C21.9896 9.54659 21.9896 11.5716 20.7485 12.8127Z'
                    fill='#229AF8'
                  />
                </svg>
              </span>
            </Grid>
            <Grid item>
              <Typography>
                Welcome, <span className={classes.specialText}>Ryan</span>
              </Typography>
            </Grid>
          </Grid>
        </div>
        {/* <div className={classes.toolbar} /> */}
        <Divider />
        <List>
          {['Dashboard', 'Profile', 'Subscription'].map((text, index) => (
            <ListItem
              button
              key={text}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>
                {text === 'Dashboard' ? (
                  <HomeIcon />
                ) : text === 'Profile' ? (
                  <PeopleAltIcon />
                ) : (
                  <CreditCardIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      {/* <Header /> */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant='h5'>Active Rockets</Typography>
        <CardList />
      </main>
    </div>
  );
}
