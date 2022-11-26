import React from "react";

const AdvertiseCard = ({ product }) => {
  return (
    <div className="card border bg-black shadow-xl p-3">
      <figure>
        <img className="h-60 w-full " src={product.picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-400">
          {product.name}
          <div className="badge badge-secondary">Used</div>
        </h2>
        <p className="text-white">Seller: {product.seller}</p>
        <p className="text-white">Resale Price: {product.resalePrice}$</p>
        <p className="text-white">Category: {product.category}</p>
      </div>
    </div>
  );
};

export default AdvertiseCard;
