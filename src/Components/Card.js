import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ href, src, title }) => {
  return (
    <a href={href}>
      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <img src={src} alt="yt-link" />
          </div>
          <div className="card-body">
            <h2 className="card-heading">{title}</h2>
            <div className="youtube-icon">
              
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
