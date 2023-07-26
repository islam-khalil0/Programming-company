import React from "react";
import "./Services.css";
import data from "./DataServicesCart";
import ServicesCart from "./ServicesCart";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Virtual } from "swiper/modules";
const Services = () => {
  return (
    <div className="BaseDivServices" id="services">
      <div className="titleSer">
        <h3>خدمتنا</h3>
        <p>كل الخدمات التي تحتاجونها في مكان واحد وبأيد أمينة</p>
      </div>
      <div className="contentSer">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
          Virtual
          loop={true}
          spaceBetween={30}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ServicesCart {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
