import React from 'react';


import image from '../images/Avatarpic.png';
import {Avatar} from '@mui/material';
import Contact from './Contact';

function Sidebar() {
    return (
      <div className="sidebar">
        <div  className="avatar">
             <Avatar
               alt="Profile"
               src={image}
              //  sx={{ width: 170, height: "auto" }}
               variant='rounded'
             />
        </div>
        <hr style={{width:100}}/>

        <Contact/>

      </div>

    )
}

export default Sidebar;