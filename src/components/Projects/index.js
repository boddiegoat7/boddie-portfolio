import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/coming-soon.gif";
import p1 from "../../assets/small/commercial/run-buddy.png";
import p2 from "../../assets/small/commercial/dentist.jpg";

function Projects(props) {
  const currentProjects = {
    name: "Projects",
    description: "A list of projects that i have done and are coming soon",
  };

  return (
    <section className="center">
      <h1>{capitalizeFirstLetter(currentProjects.name)}</h1>
      <p>Below are some of the links to my projects and there github repos!</p>

      <div className="flex-row center ">
        <h2>Project 1</h2>
        <img src={p1} alt="Project 1" className="img-thumbnail mx-1" />

        <h2>Project 2</h2>
        <img src={p2} alt="Project 1" className="img-thumbnail mx-1" />

        <h2>Project 3</h2>
        <img src={photo} alt="Project 1" className="img-thumbnail mx-1" />

        <h2>Coming Soon !</h2>
        <img src={photo} alt="Project 1" className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}

export default Projects;
