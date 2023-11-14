import React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';

function Contact() {
    const items =[
        {
            title:"Email",
            text:"snehathiyagarajan3@gmailcom",
            icon:<EmailOutlinedIcon/>,
            path:" "
        },
        {
            title:"LinkedIn",
            text:"Sneha Thiyagarajan",
            icon: <LinkedInIcon/>,
            path: "https://www.linkedin.com/in/sneha-thiyagarajan-6a93ba273/"
        },
        {
            title:"Github",
            text:"Sneha-thyagarajan",
            icon: <GitHubIcon/>,
            path:"https://github.com/sneha-thyagarajan"
        },
        {
            title:"Instagram",
            text:"@_.aesthete7._",
            icon: <InstagramIcon/>,
            path:"https://www.instagram.com/_.aesthete7._/"
        }
    ]
    return (
        <List className="contact">
            {
                items.map((item)=>{
                    return(
                        <ListItem key={item.title} >
                             <ListItemIcon style={{color:"#3399ff"}}>{item.icon}</ListItemIcon>
                             <div>
                              <ListItemText primary={item.title}></ListItemText>
                              <a href={item.path} style={{fontWeight:500, fontSize:"0.7rem", color:"#7A7A7A"}}> {item.text}</a>
                             </div>  
                       </ListItem>

                    )

                })
            }
        </List>

    )
}

export default Contact;