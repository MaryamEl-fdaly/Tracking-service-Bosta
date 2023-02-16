import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { RiArrowDropDownLine,RiArrowDropRightLine } from 'react-icons/ri';
import logo2 from '../Images/logo2.png'
import { Grid } from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

  return (
<AppBar position="static" sx={{ bgcolor: "white",mt:2 }} elevation={0} >
  <Toolbar variant="regular" >
    <Grid
       container
       direction="row"
       justifyContent="space-between"
       alignItems="center"
    >
      <Grid item>
         <Box component="img"
        sx={{ height:{lg:35, xs:30} ,ml:6}}
        alt="Logo"
        src={logo2}/>
      </Grid>

    <Grid item sx={{mr:10}}>
    <Typography color="#4f5665" sx={{ fontSize:{lg:20, xs: 16}  ,fontWeight:'bold' ,":hover":{color:'red'},flexGrow: 1}} >
      En
      <IconButton edge="end" color="#cbd5e0" aria-label="menu" sx={{ fontSize:30,pl:0, ":hover":{color:'red'}}} onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >
     {isHovering ? <RiArrowDropRightLine /> : <RiArrowDropDownLine />}

    </IconButton>
    </Typography>
 
    </Grid>
   </Grid>
  </Toolbar>
</AppBar>
  )
}
