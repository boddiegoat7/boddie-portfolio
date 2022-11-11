import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/coming-soon.gif";

function Projects(props) {
  const currentProjects = {
    name: "Projects",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };

  return (
    <section>
        <h1>{capitalizeFirstLetter(currentProjects.name)}</h1>
        <p>Below are some of the links to my projects and there github repos!</p>
    
        <div className="flex-row">
        
        <img
        src={photo}
        alt="Project 1"
        className="img-thumbnail mx-1"
        />
        
        
        
        </div>
    
      </section>
  );
}

export default Projects;
