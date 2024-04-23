import React from "react";
import Cards from "./Cards";
import Todolist from "../images/Todolist.png";
import Weather from "../images/Weather.png";
import Register from "../images/Register.png";
import Timer from "../images/timer.png";

function Projects(){
    const project=[
        {
            name:"Weather Wizard",
            alt:"Weather App",
            content:" Express.js, Node.js, OpenWeatherMap API, EJS, CSS",
            img: Weather,
            url:"https://github.com/sneha-thyagarajan/Weather-WebApplication"
           


        },
        {
            name:"To-Do Master",
            alt:"To-Do List",
            content:"CSS, Node.js, Express.js, EJS ",
            img:Todolist,

            url:"https://github.com/sneha-thyagarajan/ToDoList_UsingExpressJs"
        },
        {
            name:"Registration Form",
            alt:"Registration Form",
            content:"CSS, Node.js, Express.js, EJS ,MongoDB",
            img:Register,
            url:"https://github.com/sneha-thyagarajan/RegistrationForm"
        },
        {
            name:"Timer React-App",
            alt:"Timer App",
            content:"React.js, Javascript, CSS",
            img:Timer,
            url:"https://github.com/sneha-thyagarajan/React-Timerapp"
        }


    ]
    function open(id) {
        window.open(project[id].url, "_blank");
    }

    return(
        <div className="projects" id ="projects">
            <h1>Projects</h1>
            <div className="projectsContainer">
            { project.map((project, index)=>{
            return(
                <Cards
                    key={index}
                    id={index}
                    name={project.name}
                    alt={project.alt}
                    content={project.content}
                    img={project.img} 
                    onClick={open}
                />
                
            )
        })}
            </div>

        </div>
    )
}

export default Projects;