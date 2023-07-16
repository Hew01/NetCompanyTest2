import React from "react";
import CatItem from "./CatItem";

const CatList = ({ cats }) => {
  return (
    <section id="cats">
      <h2 style={{ textAlign: "center" }}>List of Cats</h2>
      <ul id="cat-list" className="cat-list">
        {cats.map((cat, index) => (
          <CatItem key={index} cat={cat} />
        ))}
      </ul>
    </section>
  );
};

export default CatList;
