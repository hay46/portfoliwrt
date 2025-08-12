import React from 'react'
import './Card.css';
function Card(props) {
  return (
    <div className="div-card">
      <div className="div-id">
        <h1>{props.id}</h1>
      </div>
      <div className="div-title">
        <h1>{props.title}</h1>
      </div>
      <div className="div-parag">
        <p>{props.paragraf}</p>
      </div>
      <div>
        <h2>{props.readmore}</h2>
      </div>
    </div>
  );
}

export default Card
