// rafce

import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {deletePost} from '../../../actions/posts';

const Post = ( { post, setCurrentId } ) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay} >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.creatorAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
          <Edit fontSize='medium'></Edit>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='medium' />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color='primary' onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='medium' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post;