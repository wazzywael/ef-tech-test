import React from "react";
import "./Card.css";

const Card = ({ index, title, image, description, anchorUrl, anchorText }) => {
  return (
    <div className="card-container" key={index}>
      <img className="card-image" src={image} alt={title} />
      <div className="card-information">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-description">{description}</h5>
        <a className="card-link" href={anchorUrl}>
          {anchorText}
        </a>
      </div>
    </div>
  );
};

export default Card;
