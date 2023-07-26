import React from "react";
import "./Services.css";


const ServicesCart = ({ id, icon, title, desc }) => {
  return (
    <div className="BaseDivServicesCart">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServicesCart;
