import React from "react";
import "./techniques.css";

const CartTechniques = ({ id, icon, title }) => {
  return (
    <div className="TechCart">
      <div className="number">
        <h4>{id}</h4>
      </div>
      <div className="content">
        <p>{icon}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CartTechniques;
