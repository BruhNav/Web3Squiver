import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {AiOutlineMenu,AiFillHome,AiFillInfoCircle,AiOutlineSolution} from 'react-icons/ai';
import {MdContactMail} from 'react-icons/md'
import {GrResources} from 'react-icons/gr'
import { IconContext } from "react-icons";
import '../styles/navdrawer.css';


const NavDrawer=()=>{

    
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        
        <nav className="navbar">
            <div className="squiverlogo floatLeft"><img src=".\icons\squirrel_Logo.png" alt="" /></div>
            <div className='drawer'>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              ><IconContext.Provider value={{ color: "white", className: "floatLeft" }}>
              <div>
                <AiOutlineMenu size={30}/>
              </div>
            </IconContext.Provider>
                
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                    <AiFillHome size={22}/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <AiFillInfoCircle size={22}/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <AiOutlineSolution size={22}/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <GrResources size={22}/>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <MdContactMail size={22}/>
                </MenuItem>
              </Menu>
            </div>
        </nav>
            
    )
}

export default NavDrawer;