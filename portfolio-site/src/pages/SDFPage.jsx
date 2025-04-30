import React from "react";
import "./individual-show-pages.css";

const imageModules = import.meta.glob("../assets/SDF/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function SDFPage() {
  return (
    <div>
      <h1>SDF</h1>
      <div className="ind-project-img-container">
        {imageList.map((image, index) => (
          <div className="ind-project-img-div">
            <img
              className="ind-project-img"
              key={index}
              src={image}
              alt={`SDF Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
