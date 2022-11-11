import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
        
        <h1 id="about">Victor Boddie</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <p> Hello my name is Victor boddie.</p>
        
    </section>
    );
}

export default About;
