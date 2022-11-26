import React from "react";
import toast from "react-hot-toast";

const SellerProduct = ({ product, refetch }) => {
  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/product/${product._id}`, {
      method: "DELETE",
    })
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
        <h2 className="card-title">{product.name}</h2>
        <p>Resale Price: {product.resalePrice} $</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">UnSold</button>
          <button
            className="btn btn-primary"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete
          </button>
          <button className="btn btn-primary">Advertise</button>
        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
