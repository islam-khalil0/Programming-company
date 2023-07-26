import React, { useState } from "react";
import "./Projects.css";
import data from "./dataProjects";
import CartProject from "./ProjectCart";

const Projects = () => {
  const [project, setProject] = useState("");

  return (
    <div className="BaseDivProjects">
      <div className="topProj">
        <h1>دعنا نعرفك علي مشاريعنا السابقة</h1>
        <p>اكتشف اهم مشاريعنا في السنوات الماضية</p>
      </div>
      <div className="projButton">
        <button
          onClick={() => setProject("graphicDesigns")}
          className={project === "graphicDesigns" ? "selected" : ""}
        >
          {" "}
          تصاميم الجرافك
        </button>
        <button
          onClick={() => setProject("InterfaceDesign")}
          className={project === "InterfaceDesign" ? "selected" : ""}
        >
          تصاميم الواجهات
        </button>
        <button
          onClick={() => setProject("mobileApp")}
          className={project === "mobileApp" ? "selected" : ""}
        >
          {" "}
          تطبيقات الهاتف
        </button>
        <button
          onClick={() => setProject("website")}
          className={project === "website" ? "selected" : ""}
        >
          مواقع الويب{" "}
        </button>
        <button
          onClick={() => setProject("")}
          className={project === "" ? "selected" : ""}
        >
          الكل
        </button>
      </div>
      <div className="contentProjects">
        {project
          ? data
              .filter((item) => item.category === project)
              .map((item) => <CartProject key={item.id} {...item} />)
          : data.map((item) => <CartProject key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Projects;
