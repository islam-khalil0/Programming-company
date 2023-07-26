import React from "react";

const ProjectCart = ({ titleProject, descProject, image }) => {
  return (
    <div className="card">
      <img src={image} />
      <div className="card__content">
        <p className="card__title">{titleProject}</p>
        <p className="card__description">{descProject}</p>
      </div>
    </div>
  );
};

export default ProjectCart;
