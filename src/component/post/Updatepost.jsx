import React, { useEffect, useState } from "react";
import pc3 from "./assets/pc3.jpg"
import {AddCircle} from '@material-ui/icons'
import { createpost,getpost,updatepost } from "../service/api";
import {Box,FormControl,InputBase,makeStyles,TextareaAutosize,Button, ClickAwayListener} from '@material-ui/core'

const style=makeStyles({
    container:{
       padding:'0 100px'
     
 },
    image:{
        width:'100%',
        objectFit:'cover',
        height:'50vh'


    },
    form:{
        display:'flex',
        flexDirection:'row'
    },
    input:{
        flex:1
    },
    text:{
        width:'100%',
        border:'none',
        fontSize:'20px',
        '&:focus-visible':{
            outline:'none'
        }

    },
    icon:{
        fontSize:40,
        padding:'10px'
    }
})






const Updatepost = ({match}) => {

const init={
    title:'',
    description:'',
    picture:'',
    username:'farhana Islam',
    date:new Date()
}

const [post,setPost]=useState({init})


const handleVal=(e)=>{
setPost({...post,[e.target.name]:e.target.value})
}

const click=()=>{
   updatepost(match.params.id,post)
}



useEffect(()=>{
 const fetchdata=async()=>{
     let data=await getpost(match.params.id)
      setPost(data)
 }
 fetchdata()
},[])
































    const classes=style()
    return (
      <Box className={classes.container}>
          <img  className={classes.image}src={pc3}></img>
          <FormControl className={classes.form}>
            <AddCircle className={classes.icon} color={"action"}></AddCircle>
            <InputBase className={classes.input}name="title" placeholder="place Your Title here" onChange={(e)=>handleVal(e)} value={post.title}> </InputBase>
            <Button variant="contained" color="primary" onClick={()=>click()} >Publish</Button>
           
          </FormControl>
          <TextareaAutosize className={classes.text}name="description" placeholder="Tell Your Story here..."   onChange={(e)=>handleVal(e) }        value={post.description}></TextareaAutosize>
              
              
        

      </Box>
    );
};

export default Updatepost;