import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../../context/AuthContext";

const CategoryModal = ({ selectCategories, setSelectCategories }) => {
  const { user } = useContext(MyContext);
  const { name, orginialPrice, resalePrice, picture } = selectCategories;
  console.log(selectCategories);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const item = form.item.value;
    const orginialPrice = form.orginialPrice.value;
    const resalePrice = form.resalePrice.value;
    const location = form.location.value;

    const booking = {
      userName: user?.displayName,
      productName: item,
      picture,
      email,
      phone,
      orginialPrice,
      resalePrice,
      location,
    };

    fetch("https://assignment-12-server-orcin.vercel.app/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking Confirmed Successfully");
          setSelectCategories(null);
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              name="email"
              type="email"
              placeholder="Type here"
              value={user?.email}
              disabled
              className="input input-bordered w-full mt-5 "
            />

            <input
              name="name"
              type="text"
              value={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input input-bordered w-full mt-2 "
            />
            <input
              name="item"
              type="text"
              disabled
              value={name}
              placeholder="Your Email"
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="picture"
              type="text"
              disabled
              value={picture}
              placeholder="Your Email"
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="orginialPrice"
              type="text"
              disabled
              value={orginialPrice}
              placeholder="Your Email"
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="resalePrice"
              type="text"
              disabled
              value={resalePrice}
              placeholder="Your Email"
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting location"
              className="input input-bordered w-full  mt-2"
            />
            <input
              name="phone"
              type="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full  mt-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white mt-2 text-lg input-bordered w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
