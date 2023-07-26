import React from "react";
import { TbNetwork } from "react-icons/tb";
import { BsFileCode } from "react-icons/bs";
import "./Steps.css";
import bgSteps from "../../images/bgSteps.png";

const CartSteps = ({ id, icon, title, desc }) => {
  return (
    <div className="stepsCart">
      <div className="number">
        <h4>{id}</h4>
      </div>
      <div className="icon">
        <img src={icon} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CartSteps;
