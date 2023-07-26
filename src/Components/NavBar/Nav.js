import React, { useEffect, useState } from "react";
import "./Nav.css";
import DarkMood from "../../images/fi-rr-moon.png";
import Egypt from "../../images/NationalFlagOfEgypt.png";
import logo from "../../images/Ellipse 86.png";
import { RiMenu3Line } from "react-icons/ri";

const Nav = () => {
  const [OpenMenu, setOpenMenu] = useState(true);

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
        <p>فريق العمل</p>
        <p>شركائنا</p>
        <p>من نحن</p>
        <p>خدمانتا</p>
        <p>الرئيسية</p>
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
