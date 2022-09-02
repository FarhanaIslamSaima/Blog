import React, { useEffect, useState} from "react";
import pc3 from "./assets/pc3.jpg"
import {AddCircle} from '@material-ui/icons'
import { createpost,uploadFile } from "../service/api";
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






const Createpost = () => {

const init={
    title:'',
    description:'',
    picture:'',
    username:'farhana Islam',
    date:new Date()
}

const [post,setPost]=useState(init)
const [file,setFile]=useState('')
const[image,setImage]=useState('')
const url=post.picture?post.picture:{pc3}


const handleVal=(e)=>{
setPost({...post,[e.target.name]:e.target.value})
}

const click=()=>{
    createpost(post)
}


useEffect(()=>{
    const getImage=async()=>{
        if(file){
            const data=new FormData();
            data.append("name",file.name)
            data.append("file",file)
            const image=await uploadFile(data)
            post.picture=image.data
            setImage(image.data)
        }
    }
    getImage()
              
},[file])
























    const classes=style()
    return (
      <Box className={classes.container}>
          <img  className={classes.image}src={url}></img>
          <FormControl className={classes.form}>
              <label htmlFor="button">
            <AddCircle className={classes.icon} color={"action"}></AddCircle>
            </label>
            <input type="file" id="button" style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
            <InputBase className={classes.input}name="title" placeholder="place Your Title here" onChange={(e)=>handleVal(e)}> </InputBase>
            <Button variant="contained" color="primary" onClick={()=>click()} >Publish</Button>
           
          </FormControl>
          <TextareaAutosize className={classes.text}name="description" placeholder="Tell Your Story here..."   onChange={(e)=>handleVal(e)}         ></TextareaAutosize>
              
              
        

      </Box>
    );
};

export default Createpost;