import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { MyContext } from "../../../context/AuthContext";

const MyOrder = () => {
  const { user } = useContext(MyContext);
  const url = `https://assignment-12-server-orcin.vercel.app/myorders?email=${user?.email}`;
  const { data: myOrders = [] } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <h2 className="text-4xl font-bold py-5">My Orders</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product Name</th>
            <th>Resale Price</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrders &&
            myOrders.map((myOrder, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myOrder.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myOrder.productName}</td>
                <td>{myOrder.resalePrice} $</td>
                <td>{myOrder.location}</td>
                <td>
                  <button className="btn btn-info">Pay</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
