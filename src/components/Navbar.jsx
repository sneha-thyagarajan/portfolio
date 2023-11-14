import React from "react";
import {Link} from "react-scroll";
import { Switch } from '@mui/material';

function Navbar(props){
    return(

        <nav className="navbar">

        <h1>Portfolio</h1>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Art</Link>
            <Switch
              checked={props.checked}
              onChange= {props.changeTheme}
              inputProps={{ 'aria-label': 'controlled' }}
            />
    
        </div> 

        </nav>

    )

}

export default Navbar;