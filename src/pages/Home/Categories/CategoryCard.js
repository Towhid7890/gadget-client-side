import React from "react";

const CategoryCard = ({ category }) => {
  const {
    name,
    picture,
    resalePrice,
    orginialPrice,
    seller,
    location,
    registered,
  } = category;
  return (
    <div className="card border bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
