import React from "react";
import "./Home.css";
import imageLending from "../../images/Saly-19.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from "react-icons/bs";
import bgFilter from "../../images/bgFilter.png";

const Home = () => {
  return (
    <>
      <img src={bgFilter} className="bgFilter" />
      <div className="handleUnderDiv">
        <div className="baseDivHome">
          <div className="imageLending">
            <img src={imageLending} />
          </div>
          <div className="contentLending">
            <h1>
              ابحث عن أفضل <span>الحلول</span> البرمجية
            </h1>
            <p>خيارك الاول لتحول فكرتك الي واقع مع افضل سعر ل اعلي جودة</p>
            <button>الحصول علي استشارة</button>
          </div>
        </div>
        <div className="info">
          <div className="linksInfo">
            <h3>صفحاتنا علي السوشيال ميديا</h3>
            <div className="links">
              <a>
                <AiFillLinkedin />
              </a>
              <a>
                <AiOutlineYoutube />
              </a>
              <a>
                <AiOutlineInstagram />
              </a>
              <a>
                <CiTwitter />
              </a>
              <a>
                <BsFacebook />
              </a>
            </div>
          </div>
          <div className="target">
            <h3>هدفنا</h3>
            <p>
              أخبرنا بفكرة تطبيقك وسنساعدك على إحياء هذه الفكرة من خلال إنشاء
              تطبيقات و موقع ويب من البداية يناسب احتياجاتك
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
