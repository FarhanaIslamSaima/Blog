import React,{useState,useEffect} from 'react';
import Post from "./Post"
import { Grid } from '@material-ui/core';
import { getallpost } from '../service/api.js';
const Posts = () => {
    const [posts,setPost]=useState([])

useEffect(()=>{
    
    const fetchData=async()=>{
       let data= await getallpost();
       console.log(data)
      return setPost(data)
    }
    fetchData()
},[])
   
    return (
        posts.map(post=>(
<Grid item lg={3} xs={12} sm={4}>
    <Post post={post}/>
</Grid>
        ))

    
     
    )
};

export default Posts;