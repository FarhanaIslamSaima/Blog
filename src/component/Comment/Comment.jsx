import React from 'react';
import {Box, Button, TextareaAutosize} from '@material-ui/core'
import pc from './assets/pic.png'
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { uploadComment } from '../service/api';
const style=makeStyles({
    container:{
        marginTop:'100px',
        display:'flex'
    },
    image:{
        width:'50px',
        height:'50px',
        borderRadius:'50%'
    },
    comment:{
        width:'100%',
        margrin:'0 20px'
    }
    ,
    button:{
        width:'100px',
        height:'50px',
        margin:'10px'
    }
})

const Comment = ({post}) => {
    const initialValue={
        user: '',
        userId: '',
        date:new Date(),
        comment:''
    }
    const[comment,setComment]=useState(initialValue)

    const commenthandler=(e)=>{
       setComment({...comment,
      user:post.username,
      userId:post._id,
      comment:e.target.value
    
    
    
    
    })
    }


    const commentpush=async()=>{
        await uploadComment(comment)

    }
  
    const classes=style()
    return (
      <Box>
          <Box className={classes.container}>
              <img src={pc} className={classes.image}/>
              <TextareaAutosize className={classes.comment}
              
              minRows={5}
               onChange={(e)=>commenthandler(e)}
              
              ></TextareaAutosize>
              <Button variant={'contained'} color={'primary'} className={classes.button} onClick={(e)=>commentpush(e)}>Post</Button>
          </Box>
      </Box>
    );
};

export default Comment;