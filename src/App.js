import React, { useState } from "react";
import CatList from "./CatList";
import CatForm from "./CatForm";

import "./styles.css";

const App = () => {
  const [cats, setCats] = useState([
    {
      name: "Byron",
      stage: "Kitten",
      breed: "American Short Hair"
    },
    {
      name: "Missy",
      stage: "Young",
      breed: "Domestic Short Hair"
    }
  ]);
  // TODO: Update this function
  const handleCatSubmit = (name, stage, breed, gender, avatar) => {
    // TODO: This should be changed when we have new props
    const newCat = {
      name,
      stage,
      breed,
      gender,
      avatar
    };

    setCats((prevCats) => [newCat, ...prevCats]);
  };

  return (
    <div>
      <h1>Meowville: A Cat Lover's Paradise</h1>
      <CatForm handleCatSubmit={handleCatSubmit} />
      <CatList cats={cats} />
    </div>
  );
};

export default App;
