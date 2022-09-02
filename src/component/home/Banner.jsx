import React from 'react';
import {makeStyles,Box,Typography} from '@material-ui/core'
import bc from './assets/bc.jpg'
const styles=makeStyles({
banner:{
    background:`url(${bc}) center/50% repeat-x black`,
    width:'100%',
    height:'50vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
}
})

const Banner = () => {
    const classes=styles()
    return (
        <Box className={classes.banner}>
            <Typography variant={"h2"} >Blog Website</Typography>
            <Typography variant={"h3"}>Hello World</Typography>

        </Box>
    );
};

export default Banner;




