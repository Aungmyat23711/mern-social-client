import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <>
      <Grid container spacing={4}>
        {posts
          .map((data) => (
            <Grid xs={12} md={6} item key={data._id}>
              <Post post={data} setCurrentId={setCurrentId} />
            </Grid>
          ))
          .reverse()}
      </Grid>
    </>
  );
};
export default Posts;
