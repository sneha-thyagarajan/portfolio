import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Maincontent from "./Maincontent";





function App(){
    


    return(

           <div>

               <Navbar/>



               <div className="main">
               <Sidebar />
               <Maincontent />
               
               </div>

           </div>

        

    )

}

export default App;