import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { BasicCard } from '../BasicCard';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const ACTIVE_ROCKETS = gql`
  {
    rockets {
      active
      description
      name
      id
      wikipedia
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    marginTop: theme.spacing(2),
    display: 'flex',
  },
}));

export function CardList() {
  const { loading, error, data } = useQuery(ACTIVE_ROCKETS);
  const classes = useStyles();
  const [activeRockets, setActiveRockets] = useState(null);

  useEffect(() => {
    if (!error && !loading) {
      setActiveRockets(data.rockets.filter((rocket) => rocket.active === true));
    }
    console.log(data);
  }, [data, error, loading]);

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading ...</p>;

  return (
    <Card className={classes.root}>
      <Grid container direction='column'>
        {activeRockets
          ? activeRockets.map((rocket) => (
              <BasicCard rocket={rocket} key={rocket.id} />
            ))
          : null}
      </Grid>
    </Card>
  );
}
