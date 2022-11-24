import React from "react";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <div className="card  bg-black shadow-xl">
        <figure className="px-3 pt-2">
          <img
            src={category.picture}
            alt="Shoes"
            className="rounded-xl h-72 w-ull"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="card-actions w-full">
            <Link
              to={`/category/${category.id}`}
              className="btn btn-secondary text-white text-2xl w-full"
            >
              <FaLaptop></FaLaptop>
              {category.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
