import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
function Maincontent(){
    return(
        <div className="maincontent">
        <About/>
        <hr style={{width:"40%", margin:"auto"}}/>

         <Skills/>

         <hr style={{width:"40%", margin:"auto"}}/>
       <Projects/>
        {/* <Art/> */}
        </div>
    )

}
export default Maincontent;