import React from "react";
import { LinearProgress } from '@mui/material';



function Skills(){
    const frontend =[
        {
            title:"HTML",
            text:"90",
            icon:<LinearProgress color="secondary"  variant="determinate" value={90} style={{height:"10px", borderRadius:"10px" , marginTop:"5px" , marginBottom:"10px"}}/>
        },
        {
            title:"CSS",
            text:"90",
            icon:<LinearProgress color="secondary"  variant="determinate" value={90} style={{height:"10px", borderRadius:"10px" , marginTop:"5px", marginBottom:"10px"}}/>
        },
        {
            title:"JavaScript",
            text:"60",
            icon:<LinearProgress color="secondary"  variant="determinate" value={60} style={{height:"10px", borderRadius:"10px" , marginTop:"5px", marginBottom:"10px"}}/>
        },
        {
            title:"React",
            text:"50",
            icon:<LinearProgress color="secondary"  variant="determinate" value={50} style={{height:"10px", borderRadius:"10px" , marginTop:"5px", marginBottom:"10px"}}/>
        },
        {
            title:"EJS",
            text:"80",
            icon:<LinearProgress color="secondary"  variant="determinate" value={80} style={{height:"10px", borderRadius:"10px" , marginTop:"5px", marginBottom:"10px"}}/>
        }
        // {
        //     title:"Bootstrap",
        //     text:"80%",
        //     icon:<LinearProgress color="secondary"  variant="determinate" value={80} style={{height:"10px", borderRadius:"10px" , marginTop:"10px"}}/>
        // },
        // {
        //     title:"Material UI",
        //     text:"80%",
        //     icon:<LinearProgress color="secondary"  variant="determinate" value={80} style={{height:"10px", borderRadius:"10px" , marginTop:"10px"}}/>
        // },

      
    ]

    const backend=[
        {
        title:"NodeJs",
                text:"70",
        icon:<LinearProgress color="secondary"  variant="determinate" value={70} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
        {
              title:"ExpressJS",
             text:"70",
                icon:<LinearProgress color="secondary"  variant="determinate" value={70} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
    ]

    const database=[
        {            
            title:"MongoDB",
            text:"60",
            icon:<LinearProgress color="secondary"  variant="determinate" value={60} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
        {
            title:"SQL",
            text:"40",
            icon:<LinearProgress color="secondary"  variant="determinate" value={40} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
    ]

    // const devops=[
    //     {
    //         title:"Git",
    //         text:"40",
    //         icon:<LinearProgress color="secondary"  variant="determinate" value={40} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
    //     }
    // ]

    const languages=[
        {
            title:"Python",
            text:"70",
            icon:<LinearProgress color="secondary"  variant="determinate" value={70} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
        {
            title:"Java",
            text:"40",
            icon:<LinearProgress color="secondary"  variant="determinate" value={40} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
        {
            title:"C",
            text:"80",
            icon:<LinearProgress color="secondary"  variant="determinate" value={80} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
        {
            title:"C++",
            text:"80",
            icon:<LinearProgress color="secondary"  variant="determinate" value={80} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
    ]
    const Ai=[
        {
            title:"Machine Learning",
            text:"10",
            icon:<LinearProgress color="secondary"  variant="determinate" value={30} style={{height:"10px", borderRadius:"10px" , marginTop:"10px", marginBottom:"10px"}}/>
        },
    ]

    return(

        <div className="skills">
            <h1>Skills</h1> 

            <div className="skillsContainer">

                <div className="webContainer skillitem">
                    <h3>Web  development</h3>
                    <div className="webSkills">
                        <div className="frontEnd">
                            <h4>Frontend</h4>
                            {frontend.map((item)=>{
                                return(
                                    <>
                                    <p style={{fontSize:"1rem"}}>{item.title}</p>
                                    <div className="bar">
                                      <LinearProgress color="primary"  variant="determinate" value={item.text} style={{height:"5px", borderRadius:"10px" , marginTop:"5px" , marginBottom:"10px"}}/>
                                    </div>
                                    </>                                   
                                )
                            })
                            }
                        </div>
                        <div className="box">
                        <div className="backend">
                            <h4>Backend</h4>
                            {backend.map((item)=>{
                                return(
                                    <>
                                    <p style={{fontSize:"1rem"}}>{item.title}</p>
                                    <div className="bar">
                                    <LinearProgress color="primary"  variant="determinate" value={item.text} style={{height:"5px", borderRadius:"10px" , marginTop:"5px" , marginBottom:"10px"}}/>
                                    </div>
                                    </>                                   
                                )
                            })
                            }
                        </div>
                        <div className="database">
                        <h4>Database</h4>
                            <div className="databaseSkills">
                            {database.map((item)=>{
                                return(
                                    <>
                                    <p style={{fontSize:"1rem"}}>{item.title}</p>
                                    <div className="bar">
                                    <LinearProgress color="primary"  variant="determinate" value={item.text} style={{height:"5px", borderRadius:"10px" , marginTop:"5px" , marginBottom:"10px"}}/>
                                    </div>
                                    </>                                   
                                )
                            })
                            }
                            </div>
                          </div> 

                        </div>

                        
                     </div>
                </div>


                <div className="langContainer skillitem">
                    <h3>Languages</h3>
                    <div className="langSkills">
                    {languages.map((item)=>{
                                return(
                                    <>
                                    <p style={{fontSize:"1rem"}}>{item.title}</p>
                                    <div className="bar">
                                    <LinearProgress color="primary"  variant="determinate" value={item.text} style={{height:"5px", borderRadius:"10px" , marginTop:"5px" , marginBottom:"10px"}}/>
                                    </div>
                                    </>                                   
                                )
                            })
                            }
                     </div>
                </div>

                <div className="aiContainer skillitem">
                    <h3>Artificial Intelligence</h3>
                    <div className="aiSkills">
                    {Ai.map((item)=>{
                                return(
                                    <>
                                    <p style={{fontSize:"1rem"}}>{item.title}</p>
                                    <div className="bar">
                                    <LinearProgress color="primary"  variant="determinate" value={item.text} style={{height:"5px", borderRadius:"10px" , marginTop:"5px" , marginBottom:"10px"}}/>
                                    </div>
                                    </>                                   
                                )
                            })
                            }
                     </div>
                </div>

            </div>

        </div>
    )
    
}

export default Skills;