import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    //setCategories([newCategory, ...categories]);

    if (categories.includes(newCategory)) return;
    //setCategories((cat) => [...cat, newCategory]);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifexpertApp</h1>
      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        /* <div key={category}>
          <h3>{category}</h3>
          <li>{category}</li>
        </div> */
        <GifGrid key={category} category={category}/>
      ))}
    </>
  );
};
