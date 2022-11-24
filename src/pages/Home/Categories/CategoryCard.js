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
    uses,
  } = category;
  return (
    <div className="card border border-lime-900 bg-base-100 shadow-xl">
      <figure className="border">
        <img className="w-full h-80" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Seller: {seller.name}</p>
        <p>Location: {location}</p>
        <p>Original Price: {orginialPrice} $</p>
        <p>Resale Price: {resalePrice} $</p>
        <p>Uses: {uses}</p>
        <p>Posted In: {registered}</p>
        <div className="card-actions w-full">
          <button className="btn btn-secondary w-full text-xl text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
