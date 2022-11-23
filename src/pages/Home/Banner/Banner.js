import React from "react";
import banner from "../../../asset/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md py-16">
            <h1 className="mb-5 text-5xl text-white font-bold">
              Find Us For Your Best Laptop
            </h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
