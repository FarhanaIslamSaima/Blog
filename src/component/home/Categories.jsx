import React from 'react';
import {Link} from 'react-router-dom'
import {Button,Table,TableHead,TableRow,TableCell,TableBody,makeStyles} from "@material-ui/core"
const style=makeStyles({
    button:{
    background:'#3f3fd1',
    color:'white',
    width:'85%',
    margin:20
    },
    border:{
        borderRight:'1px solid #ded5d5 ',
        fontWeight:'bold'
    },
    font:{
        '&>*':{
     fontWeight:'bold',
     
     background:'black',
     color:'white'
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }

})

const Categories = () => {
    const classes=style()
    return (
       <>
      <Link to="/create" className={classes.link}><Button variant={"contained"} className={classes.button}>CreateBlog</Button></Link> 
       <Table className={classes.border}>
           <TableHead>
           <TableRow className={classes.font}>
               <TableCell>All Categories</TableCell>
           </TableRow>
           </TableHead>
           <TableBody>
               
               <TableRow>
                   <TableCell>Music</TableCell>
               
               </TableRow>
               <TableRow>
                   <TableCell>Music</TableCell>
               
               </TableRow>
               <TableRow>
                   <TableCell>Music</TableCell>
               
               </TableRow>
           </TableBody>
       </Table>
       </>
    );
};

export default Categories;