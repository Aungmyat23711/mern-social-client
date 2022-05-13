import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './actions/posts';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Router>
      <Container maxidth='lg' className={classes.heading}>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home currentId={currentId} setCurrentId={setCurrentId} />}
          />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
};
export default App;
