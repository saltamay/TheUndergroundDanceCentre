import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import rocket from '../../assets/rocket.jpg';

const useStyles = makeStyles((theme) => ({
  infoButton: {
    backgroundColor: '#229AF8',
    fontSize: '15px',
    padding: '10px 30px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
  },
  content: {
    flex: '1 0 auto',
    flexDirection: 'row',
  },
  cover: {
    width: 120,
    borderRadius: 60,
  },
  modal: {
    display: 'flex',
    maxWidth: '60%',
    margin: '10% auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

export function BasicCard(props) {
  const classes = useStyles();
  const { description, name } = props.rocket;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid container direction='row'>
      <Grid item>
        <img src={rocket} alt='Rocket' />
      </Grid>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography component='h5' variant='h5'>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component='h5' variant='h5'>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>
      <Grid
        container
        spacing={10}
        alignItems='center'
        style={{
          margin: '0 auto',
        }}
      >
        <Grid item xs={2}>
          <CardMedia
            className={classes.cover}
            component='img'
            alt=''
            height='120'
            image={rocket}
          />
        </Grid>
        <Grid item xs={7}>
          <Grid container direction='column'>
            <Grid container spacing={2}>
              <Grid item>
                <Typography component='h5' variant='h5'>
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Divider orientation='vertical' color='primary' />
              </Grid>
              <Grid item>
                <Typography variant='subtitle1' color='textSecondary'>
                  Mac Miller
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' color='textSecondary'>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant='contained'
            color='primary'
            className={classes.infoButton}
            size='large'
            onClick={handleOpen}
          >
            More Info
          </Button>
        </Grid>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <span>Hery</span> */}
            {body}
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
