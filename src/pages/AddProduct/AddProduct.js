import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";

const AddProduct = () => {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.name.value;
    const orginialPrice = form.orginialPrice.value;
    const resalePrice = form.resalePrice.value;
    const picture = form.picture.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const category = form.category.value.toLowerCase();
    const uses = form.uses.value;
    const registered = form.registered.value;
    const product = {
      name: productName,
      email: user?.email,
      orginialPrice,
      resalePrice,
      picture,
      seller: { name: user?.displayName },
      phone,
      location,
      category,
      uses,
      registered,
    };
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Product add successfully");
          navigate("/dashboard/myProduct");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">Add Your Product</h2>
      <div className="w-3/4 mx-auto py-10">
        <form onSubmit={handleAddProduct}>
          <div className="form-control mt-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Product name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="orginialPrice"
              required
              placeholder="original Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="resalePrice"
              required
              placeholder="resalePrice"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="picture"
              required
              placeholder="imgUrl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="location"
              required
              placeholder="location"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="category"
              required
              placeholder="category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="phone"
              required
              placeholder="phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="uses"
              required
              placeholder="year of uses"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="text"
              name="registered"
              required
              placeholder="Date of registered"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-3">
            <input
              type="submit"
              value="Add Product"
              className="btn-accent btn  input-bordered"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
