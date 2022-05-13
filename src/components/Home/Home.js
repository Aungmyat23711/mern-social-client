import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from './styles';

const Home = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={4}
          className={classes.mainContainer}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;
