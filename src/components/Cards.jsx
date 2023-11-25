import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

function Cards(props) {
    return (
        <div className="cards" onClick={() => props.onClick(props.id)}>
                <p className="hovertext">View Project</p>
            
    <Card sx={{ background:"#2a2929"}} >

         <CardActionArea>
         <CardMedia
          component="img"
          height="190"
          image= {props.img} 
            
          />

         <CardContent>
          <h3 style={{fontSize:"1.2rem", margin:"5px 0" , color:"white"}}>{props.name}</h3>
          <p style={{color:"#bab9b9"}}>{props.content}</p>
         </CardContent>

      </CardActionArea>

    </Card>
        </div>
    )
}
export default Cards;




    
