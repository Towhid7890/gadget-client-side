import React from "react";
import Category from "./Category";
import hp from "../../../asset/hp.jpg";
import dell from "../../../asset/dell.jpg";
import lenovo from "../../../asset/lenovo.jpg";

const Categories = () => {
  const categories = [
    { id: "01", name: "Hp", picture: hp },
    { id: "02", name: "Dell", picture: dell },
    { id: "03", name: "Lenovo", picture: lenovo },
  ];
  return (
    <div>
      <h2 className="text-4xl text-center py-5 font-bold">
        Show all of Our <br /> Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {categories.map((category) => (
          <Category category={category} key={category.id}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
