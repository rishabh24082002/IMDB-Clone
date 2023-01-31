import React from 'react';
import { useState } from 'react';
import {styled,AppBar,Toolbar,Box,Typography,InputBase} from '@mui/material';
import { logo } from '../../constants/constant';
import {Menu,BookmarkAdd,ExpandMore} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/routes';

const StyleToolbar=styled(Toolbar)`
background:black;
min-height:56px !important;
padding:0 100px !important;
justify-content:space-between;
&>div{
    display:flex;
    align-items:center;
    cursor:pointer;
    &>p{
        font-size:14px;
        font-weight:650;
    }
}
&>p{
    font-size:14px;
        font-weight:650;
}
`
const InputField=styled(InputBase)
`Width:55%;
height:30px;
background:#FFFFFF;
border-radius: 5px;
`

const Logo=styled('img')({
    width:60
})

const Header = () => {

const[open,setOpen]=useState(null);
const navigate = useNavigate();

const handleClick=(e)=>{
    setOpen(e.currentTarget)
}

const handleClose=()=>{
    setOpen(null);
}

  return (
    <AppBar position='static'>
        <StyleToolbar>
            <Logo src={logo} alt="logo" onClick={()=>navigate(routePath.home)}/>
            <Box onClick={handleClick}>
                <Menu/>
                <Typography>Menu</Typography>
            </Box>
            <HeaderMenu open={open} handleClose={handleClose}/>
            <InputField/>
            <Typography>IMDb<Box component="span">Pro</Box></Typography>
            <Box>
                <BookmarkAdd/>
                <Typography>Watchlist</Typography>
            </Box>
            <Typography>
                SignIn
            </Typography>
            <Box>
                <Typography>EN</Typography>
                <ExpandMore/>
            </Box>


        </StyleToolbar>
    </AppBar>
  )
}

export default Header