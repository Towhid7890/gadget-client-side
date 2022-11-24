import React, { useContext } from "react";
import { MyContext } from "../../../context/AuthContext";

const CategoryModal = ({ selectCategories }) => {
  const { user } = useContext(MyContext);
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{selectCategories.name}</h3>
          <form>
            <input
              type="text"
              placeholder="Type here"
              value={user?.email}
              disabled
              className="input input-bordered w-full mt-5 "
            />

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mt-2 "
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone Number"
              className="input input-bordered w-full  mt-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white mt-2 text-lg input-bordered w-full"
            />
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
