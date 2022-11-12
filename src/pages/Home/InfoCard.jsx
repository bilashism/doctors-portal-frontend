import React from "react";

const InfoCard = ({ card }) => {
  const { id, name, description, icon, bgClass } = card;
  return (
    <div className={`card card-side ${bgClass} text-white px-6 shadow-xl`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
