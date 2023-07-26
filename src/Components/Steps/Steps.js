import React from "react";
import "./Steps.css";
import data from "./DataOfCartSteps";
import CartSteps from "./CartSteps";


const Steps = () => {
  return (
    <div className="BaseDivSteps">
      <div className="titleSteps">
        <h1>
          نحن هنا <span>لمساعدتك</span>
        </h1>
        <h4>تعرف علي خطوات العمل علي اي مشروع</h4>
      </div>
      <div className="contentSteps">
        {
            data.map((item) => (
                <CartSteps key={item.id} {...item}/>
            ))
        }
        </div>
    </div>
  );
};

export default Steps;
