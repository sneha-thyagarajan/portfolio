import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Maincontent from "./Maincontent";
import {Paper} from '@mui/material';
import { ThemeProvider ,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function App(){
    const [mode, setMode] = useState(true);

    const appTheme = createTheme({
        palette: {
          mode: mode?"dark":"light",
        },
    });
    const Theme=function(){
        if(mode){
            setMode(false)
        }
        else{
                setMode(true)
        }     
    }

    return(
        <ThemeProvider theme={appTheme}>
              <CssBaseline />
        <Paper elevation={0} sx={{height:"100"}}>

       <Navbar
            checked = {mode}
            changeTheme= {Theme}
        />
        <div className="main">
        <Sidebar/>
        <Maincontent/>
        </div>

        </Paper>
        </ThemeProvider>
        

    )

}

export default App;