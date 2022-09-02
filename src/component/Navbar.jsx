import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { useHistory } from 'react-router-dom';
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'
import { useOktaAuth } from '@okta/okta-react';
 const style=makeStyles({
     header:{
         background:'white',
         color:'black'
     },
     Component:{
          justifyContent:'center',
          '&>*':{
              padding:20
          }
     },
     link:{
         textDecoration:'none',
         color:'inherit'
     }
 })
const Navbar = () => {
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();


    
    if (authState && authState.isPending) return null;
    const login = async () => history.push('/login');

    const logout = async () => oktaAuth.signOut();
  
    const button=authState.isAuthenticated ?
    <button onClick={logout}
    style={
        {
        
            background:'unset',
            border:'none',
            fontFamily:'Helvetica',
            fontSize:'14px',
            textTransform:'uppercase'
        
        
        
        }
        
        
        
            }
    
    
    
    
    
    >Logout</button> :
    <button onClick={login} >Login</button>;
    const classes=style()
    return (
        <div>
            <AppBar className={classes.header}>
                <Toolbar className={classes.Component}>
               <Link to={"/"} className={classes.link}> <Typography>Home</Typography></Link>
                    <Typography>About </Typography>
                    <Typography>Contact </Typography>
                    <Typography>{button}</Typography>
                </Toolbar>
            </AppBar>
            
        </div>
    );
};

export default Navbar;