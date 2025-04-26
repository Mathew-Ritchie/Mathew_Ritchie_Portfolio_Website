import React from "react";

const imageModules = import.meta.glob("../assets/JSL/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function JSLPage() {
  return (
    <div>
      <h1>SDF</h1>
      <div>
        {imageList.map((image, index) => (
          <img key={index} src={image} alt={`SDF Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
