import React, { useEffect, useState } from "react";
import "./Nav.css";
import DarkMood from "../../images/fi-rr-moon.png";
import Egypt from "../../images/NationalFlagOfEgypt.png";
import logo from "../../images/Ellipse 86.png";
import { RiMenu3Line } from "react-icons/ri";

const Nav = () => {
  const [OpenMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(OpenMenu);
  }, [OpenMenu]);

  return (
    <div className="baseDivNav">
      <div className="D_l">
        <div className="moonDiv">
          <img src={DarkMood} />
        </div>
        <div className="l_Div">
          <p>اللغة العربية</p>
          <img src={Egypt} />
        </div>
      </div>

      <div className={OpenMenu ? "linksNav" : "linksNav open"}>
        <a href="#team">
          <p>فريق العمل</p>
        </a>
        <a href="#home">
          <p>شركائنا</p>
        </a>
        <a href="#we">
          <p>من نحن</p>
        </a>
        <a href="#services">
          <p>خدمانتا</p>
        </a>
        <a href="#home">
          <p>الرئيسية</p>
        </a>
      </div>

      <div className="logo">
        <img src={logo} alt="Company logo" />
        <button onClick={() => setOpenMenu(!OpenMenu)} style={{ color: "red" }}>
          <RiMenu3Line style={{ fontSize: "27px", color: "#171836" }} />
        </button>
      </div>
    </div>
  );
};

export default Nav;
