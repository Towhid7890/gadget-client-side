import React from "react";

const SellerProduct = ({ product }) => {
  return (
    <div className="card border card-side bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img src={product.picture} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
