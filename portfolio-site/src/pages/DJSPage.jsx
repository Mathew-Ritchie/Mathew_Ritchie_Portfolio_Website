import React from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/DJS/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function DJSPage() {
  return (
    <div>
      <h1>SDF</h1>
      <div className="ind-project-img-container">
        {imageList.map((image, index) => (
          <div key={index} className="ind-project-img-div">
            <img className="ind-project-img" src={image} alt={`SDF Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
