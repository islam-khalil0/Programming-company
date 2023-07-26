import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import "./Team.css";

const CartTeam = ({ image, name, JobTitle }) => {
  return (
    <div className="BaseDivCartTeam">
      <div className="imageCart">
        <img src={image} />
      </div>
      <div className="textCartTeam">
        <h2>{name}</h2>
        <h5>{JobTitle}</h5>
      </div>
      <div className="linksDiv">
        <TiSocialLinkedinCircular />
        <AiOutlineGithub />
        <AiFillBehanceCircle />
      </div>
    </div>
  );
};

export default CartTeam;
