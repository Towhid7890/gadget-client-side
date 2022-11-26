import React from "react";
import toast from "react-hot-toast";

const SellerProduct = ({ product, refetch }) => {
  const handleDeleteProduct = (id) => {
    fetch(
      `https://assignment-12-server-orcin.vercel.app/product/${product._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Deleted successfully`);
        }
      });
  };
  return (
    <div className="card border card-side bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img src={product.picture} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="text-lg md:text-2xl">{product.name}</h2>
        <p>Resale Price: {product.resalePrice} $</p>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm">UnSold</button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete
          </button>
          <button className="btn btn-accent btn-sm">Advertise</button>
        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
