import React from "react";
import add1 from "../../asset/add1.jpg";
import add2 from "../../asset/add2.jpg";

const Add = () => {
  return (
    <div className="mx-2 md:mx-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl image-full h-40">
          <figure>
            <img src={add1} className="w-full" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">30% discount with DELL</h2>
            <p>So add to cart all your favorite item</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full h-40">
          <figure>
            <img src={add2} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">50% discount with Hp</h2>
            <p>So add to cart all your favorite item</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
