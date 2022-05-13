import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, setPost, updatePost } from '../../actions/posts';
import { useLocation } from 'react-router-dom';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const location = useLocation();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => (currentId ? p._id == currentId : null))
  );
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      dispatch(
        updatePost({ ...postData, name: user?.result?.name }, currentId)
      );
      setCurrentId(null);
      clear();
    } else {
      dispatch(setPost({ ...postData, name: user?.result?.name }));
      clear();
    }
  };
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>
          Please Sign In to create your own post and like other post.
        </Typography>
      </Paper>
    );
  }
  const clear = () => {
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  const cancel = () => {
    setCurrentId(null);
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Creating a Memory</Typography>

        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          {currentId ? 'Update' : 'Submit'}
        </Button>

        <Button
          variant='contained'
          color='secondary'
          size='small'
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
        {currentId && (
          <Button
            fullWidth
            className={classes.buttonSubmit}
            onClick={() => cancel()}
            color='secondary'
          >
            Cancel
          </Button>
        )}
      </form>
    </Paper>
  );
};
export default Form;
