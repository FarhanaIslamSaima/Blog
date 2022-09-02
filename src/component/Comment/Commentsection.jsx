import React from 'react';
import {Box,makeStyles, Typography} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import pic from './assets/pic.png'
const style=makeStyles({
    container:{
  marginTop:'50px',
  display:'flex'
    },
    image:{
        height:'25px',
        width:'25px',
        borderRadius:'50%'
    },
    text:{
        width:'100%',
    padding:'5px 10px',
        backgroundColor:'#dddddd',
        margin:'0 10px',
        
    }
})

const Commentsection = () => { 
    const classes=style()
    return (
      <Box>
          <Box className={classes.container}>
              <img src={pic} className={classes.image}/>
              <Box className={classes.text}>
                  
                  <Typography><span style={{fontWeight:'bold'}}>Saima: </span> My comments will go here..My comments will go here</Typography>

             <Typography >Time:12.00</Typography>
              
              </Box>

              
             <Delete></Delete>
              

          </Box>
      </Box>
    );
};

export default Commentsection;