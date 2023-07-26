import React, { useEffect, useState } from "react";
import "./Team.css";
import CartTeam from "./CartTeam";
import data from "./DataTeam";

const Team = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="baseDivTeam" id="team">
      <h1>فريق العمل</h1>
      <div className="cateButton">
        <button
          onClick={() => setCategory("DateBase")}
          className={category === "DateBase" ? "selected" : ""}
        >
          قواعد البيانات
        </button>
        <button
          onClick={() => setCategory("manager")}
          className={category === "manager" ? "selected" : ""}
        >
          المدراء
        </button>
        <button
          onClick={() => setCategory("FrontEnd")}
          className={category === "FrontEnd" ? "selected" : ""}
        >
          مصمم الواجهات
        </button>
        <button
          onClick={() => setCategory("MobileDeveloper")}
          className={category === "MobileDeveloper" ? "selected" : ""}
        >
          مطور تطبيقات الهاتف
        </button>
        <button
          onClick={() => setCategory("WebDeveloper")}
          className={category === "WebDeveloper" ? "selected" : ""}
        >
          مطور الويب
        </button>
        <button
          onClick={() => setCategory("")}
          className={category === "" ? "selected" : ""}
        >
          الكل
        </button>
      </div>
      <div className="contentTeam">
        {category
          ? data
              .filter((item) => item.category === category)
              .map((item) => <CartTeam key={item.id} {...item} />)
          : data.map((item) => <CartTeam key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Team;
