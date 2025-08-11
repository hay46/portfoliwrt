import React from "react";
import "./About.css";
function About() {
  return (
    <div className="div-About">
      <div className="div-about-me">
        <h1>about me</h1>
        <p>
          I'm a passionate Full-Stack Developer with a knack for building <br />
          seamless digital experiences from front-end finesse to back-end <br />
          muscle. With a strong foundation in both client-side and server-side{" "}
          <br />
          technologies, I thrive on turning complex problems into elegant,{" "}
          <br />
          scalable solutions.
          <h1> 🔧 Tech Stack Highlights</h1>
          <span>Frontend:</span>
          <p>React, Vue.js, HTML5,CSS3, JavaScript/TypeScript</p>
          <span>Backend:</span>
          <p>Node.js, Express, Django, Flask, Ruby on Rails</p>
          <span>Databases:</span> <p>MongoDB, PostgreSQL, MySQL</p>
          <span>DevOps & Tools:</span>
          <p>Git, CI/CD, AWS, Firebase,Docker</p>
        </p>
      </div>
    </div>
  );
}
export default About;
