import React from 'react'
import './APP.css'
import Header from "./component/header_page/Header";
import Hero from './component/Hero/Hero';
import About from './component/about-page/About';
import Service from './component/service-page/Service'
import Card  from './component/Card/Card';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <div className="abebe">
        <h1 className='my-service'> my Service</h1>
        <div className="web-development">
          <Card
            id="01 "
            title="web development"
            paragraf=" I do some research before starting my development to choose the right way for the job."
            readmore="read more"
          />
          <Card
            id="02 "
            title="Fully Responsive"
            paragraf="I design my websites for every screen size available and I make sure it looks great on every device.

"
            readmore="read more"
          />
          <Card
            id="03 "
            title="Beautiful Code"
            paragraf="Working on projects, I write beautiful and clean codes to make them better readable for any partner or client."
            readmore="read more"
          />
        </div>
        <div className='on-timet'>
          <Card
            id="04"
            title="On Timet"
            paragraf="Always responsible to complete any given project on time.

"
            readmore="read more"
          />
          <Card
            id="05"
            title="Quick Learner"
            paragraf="I like to learn new things and I have the ability to learn it quickly."
            readmore="read more"
          />
          <Card
            id="06 "
            title="Quick Learner"
            paragraf="Easy to reach and happy to help."
            readmore="read more"
          />
        </div>
      </div>
    </div>
  );
}

export default App
