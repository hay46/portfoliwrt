import React from 'react'
import './Hero.css'
import logo from '../../assets/image_folder/haymanot-photo.jpg'
function Hero() {
  return (
    <div className="div-portfolio">
      <div className="div-all">
        <div className="div-img">
          <img src={logo} alt="" />
        </div>

        <div className="div-name">
          <h1 className="h1-name">
            <span>i'm haymanot ebabu</span>,and also <br />
            fullstack web developer
          </h1>
        </div>
        <div className="div-discribtion">
          <p>
            As a passionate and versatile Full-Stack Developer, I specialize in
            building robust, <br />
            scalable,scalable, and user-centric web applications from concept to
            deployment. <br />
            With hands-on experience across both front-end and back-end <br />
            technologies, I bring a holistic approach to software <br />
            development—merging intuitive design with powerful functionality
          </p>
        </div>
        <div className="contact-resume">
          <h2>contact with me</h2>
          <h3>my resume</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero