import React from "react";
import toast from "react-hot-toast";

const CategoryCard = ({ category, setSelectCategories }) => {
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

  const handleReport = (category) => {
    console.log(category);
    const items = {
      name,
      picture,
      resalePrice,
      orginialPrice,
      seller,
      location,
      registered,
      uses,
    };
    fetch("https://assignment-12-server-orcin.vercel.app/report", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reported Successfully");
          setSelectCategories(null);
        } else {
          toast.error(data.message);
        }
      });
  };

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
          <label
            htmlFor="my-modal"
            onClick={() => setSelectCategories(category)}
            className="btn btn-secondary w-full text-xl text-white"
          >
            Book Now
          </label>
          <label
            htmlFor="my-modal"
            onClick={() => handleReport(category)}
            className="btn btn-primary w-full text-xl text-white"
          >
            Report Item
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
