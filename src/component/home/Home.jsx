import React from 'react';
import Banner from "./Banner"
import {Grid} from '@material-ui/core'
import Categories from './Categories';
import Posts from './Posts';

const Home = () => {
    return (
       <>
       <Banner></Banner>
       <Grid container>
       <Grid item lg={2} xs={12} sm={12}>
           <Categories></Categories>
       </Grid>
       <Grid  container item lg={10} xs={12} sm={12}>
           <Posts></Posts>
       </Grid>
       </Grid>
       
       </>
    );
};

export default Home;