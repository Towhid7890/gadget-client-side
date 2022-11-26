import React from "react";
import { Link } from "react-router-dom";
import picture from "../../asset/notfound.png";

const Notfound = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl text-center">Nothing Found Here</h2>
      <div className="w-1/2 mx-auto">
        <img src={picture} alt="" />
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Notfound;
