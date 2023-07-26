import React from "react";
import "./Info.css";
import imgHand from "../../images/hand.png";
import { TbNetwork } from "react-icons/tb";
import { BsFileCode } from "react-icons/bs";

const Info = () => {
  return (
    <div className="BaseDivInf">
      <div className="top">
        <h1>من نحن</h1>
        <h4>هؤلاء وثقوا بنا , كن انت التالي</h4>
        <p>
          نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من
          العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بأفضل الخبرات
          والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا باصحاب
          الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة الدفع
          والبنوك
        </p>
      </div>

      <div className="under">
        <div className="infoCard">
          <div className="number">
            <h4>2</h4>
          </div>
          <div className="icon">
            <TbNetwork />
          </div>
          <div className="content">
            <h3>13+</h3>
            <p>عمل تطبيقات هاتف في الشرق الاوسط و الوطن العربي</p>
          </div>
        </div>
        <div className="infoImage">
          <img src={imgHand} />
        </div>
        <div className="infoCard">
          <div className="number">
            <h4>2</h4>
          </div>
          <div className="icon">
            <BsFileCode />
          </div>
          <div className="content">
            <h3>10+</h3>
            <p>أخبرنا بأي شئ تريد تصميمه</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
