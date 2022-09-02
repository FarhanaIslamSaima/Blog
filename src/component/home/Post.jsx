import React from 'react';
import pc from "./assets/pc.jpg"
import Posts from './Posts';
import {Link} from 'react-router-dom'

import {Box,Typography,makeStyles} from '@material-ui/core'
const style=makeStyles({
    box:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
       margin:20,
        height:'300px',
        border:' 1px solid #ded5d5',
        borderRadius:10
    },
    image:{
        width:'100%',
        height:150,
        objectFit:'cover',
        marginBottom:'20px'

    },
    minword:{
        fontSize:'15px',
        color:'#ded5d5',

    },
    maxword:{
      fontSize:'25px',
      fontWeight:'bold'
    },
    para:{
        wordBreak:'break-word',
        fontWeight:'bold'
    }
})
const Post = ({post}) => {
    const url= post.picture?post.picture:{pc}
    const classes=style()
    return (
     <Box className={classes.box}>
         <img src={url} className={classes.image}></img>
        
        <Link to={`/details/${post._id}`}> <Typography className={classes.minword}>Music</Typography></Link>
         <Typography>{post.title}</Typography>
         <Typography className={classes.maxword}>{post.username}</Typography>
     </Box>
    );
};

export default Post;