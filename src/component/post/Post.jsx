import React, { useEffect, useState } from "react";
import pc3 from "./assets/pc3.jpg"
import {AddCircle} from '@material-ui/icons'
import {Edit,Delete} from '@material-ui/icons'
import { createpost,getpost } from "../service/api";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";
import Commentsection from "../Comment/Commentsection";

import {Box,FormControl,InputBase,makeStyles,TextareaAutosize,Button, ClickAwayListener, Typography} from '@material-ui/core'

const style=makeStyles((theme)=>({
    container:{
         padding:'0 100px',
        [theme.breakpoints.down('md')]:{
                  padding:'0'
        }
    },
    image:{
        width:'100%',
        objectFit:'cover',
        height:'50vh',
        marginBottom:'10px'

    },
   icons:{
        float:'right',
       marginDown:'30px'
   },
   icon:{
        padding:'5px',
       border:'1px solid ',
       borderRadius:'10px',
       margin:'5px'
   },
   details:{
        display:'flex',

     color:'#ded5d5',
       fontWeight:'600',
       marginBottom:'20px',
       [theme.breakpoints.down('md')]:{
            display:'block',
           padding:'5px'
       }

   },
   Heading:{
        textAlign:'center',
       fontWeight:'600',
       fontSize:'35px',


   }
}))




const Post = ({match}) => {
    const[post,setPost]=useState({})

useEffect(()=>{
 const fetchdata=async()=>{
     let data=await getpost(match.params.id)
      setPost(data)
 }
 fetchdata()
},[])





















const url = post.picture?post.picture:{pc3}


    const classes=style()
    return (
<Box className={classes.container}>
       <img src={url} className={classes.image}/>
       <Box className={classes.icons}>
          <Link to={`/update/${post._id}`}>  <Edit className={classes.icon} color={"primary"}/></Link>
           <Delete className={classes.icon} color={"error"}/>
       </Box>
       <Typography className={classes.Heading}>{post.title}</Typography>
       <Box className={classes.details}>
           <Typography>Author:<span style={{fontWeight:'bold'}}>{post.username}</span></Typography>
               <Typography style={{marginLeft:"auto"}}>category:Music</Typography>

       </Box>
       <Typography>{post.description}</Typography>
       <Comment post={post}/>
       <Commentsection/>

   </Box>
    );
};

export default Post;