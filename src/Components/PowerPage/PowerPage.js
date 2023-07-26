import React from "react";
import "./PowerPage.css";
import imgHand from "../../images/hand.png";
import rows from "../../images/rows.png";
import { TbNetwork } from "react-icons/tb";
import { BsFileCode } from "react-icons/bs";

const PowerPage = () => {
  return (
    <div className="BaseDivPower">
      <div className="topPower">
        <h1>
          {" "}
          يمكننا <span> تطوير تطبيقات الهاتف</span>
        </h1>
        <p>
          أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء
          تطبيقات / موقع ويب من البداية يناسب احتياجاتك
        </p>
      </div>

      <div className="underPower">
        <div className="AllPowerCard">
          <div className="PowerCard">
            <div className="icon">
              <TbNetwork />
            </div>
            <div className="content">
              <h3>تصميم واجهة المستخدم</h3>
              <p>
                من خلال تزودنا بما تحتاجه سنعمل علي انشاء واجهه مصتخدم سهله و
                مرنه
              </p>
            </div>
          </div>

          <div className="PowerCard">
            <div className="icon">
              <TbNetwork />
            </div>
            <div className="content">
              <h3>كود قوي و مرن</h3>
              <p>يتم تنظيم الكود الخاص بك و تأمينه ليمنحك افضل أداء</p>
            </div>
          </div>
        </div>

        <div className="PowerImage">
          <img src={imgHand} />
          <img src={rows} />
        </div>

        <div className="AllPowerCard">
          <div className="PowerCard">
            <div className="icon">
              <TbNetwork />
            </div>
            <div className="content">
              <h3>السرعة</h3>
              <p>نحن مرنون في التعديلات ومع اخراج المشروع بأعلى جوده</p>
            </div>
          </div>

          <div className="PowerCard">
            <div className="icon">
              <TbNetwork />
            </div>
            <div className="content">
              <h3>سهل الاطلاق</h3>
              <p>سوف نقدم لك لوحه الادارة و كيفيه التعامل معها بشكل كامل </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPage;
