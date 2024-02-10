import React from "react";
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';






function Navbar(){

    return(
        
        <nav className="navbar">
        


        <h1><button className="collapse" style={{display:"none" , marginRight:"10px", backgroundColor:"transparent" ,color:"#3399ff", border:"none"}}> <DehazeRoundedIcon/> </button> Portfolio</h1>
        <div className="desktopMenu"  >
            <a className="desktopMenuListItem" style={{textDecoration:"none" }} smooth duration={5000} href="#about">About</a>
            <a className="desktopMenuListItem" style={{textDecoration:"none"}} smooth duration={5000} href="#skills" >Skills</a>
            <a className="desktopMenuListItem" style={{textDecoration:"none"}} smooth duration={5000} href="#projects">Projects</a>
            <a className="desktopMenuListItem" style={{textDecoration:"none"}}  smooth duration={5000} href="#arts" >Art</a>
            
    
        </div> 




        </nav>
            

    )

}

export default Navbar;