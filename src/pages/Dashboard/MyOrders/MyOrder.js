import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { MyContext } from "../../../context/AuthContext";

const MyOrder = () => {
  const { user } = useContext(MyContext);
  const url = `http://localhost:5000/myorders?email=${user?.email}`;
  const { data: myOrders = [] } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Resale Price</th>
            <th>Original Price</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((myOrder, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{myOrder.productName}</td>
              <td>{myOrder.resalePrice} $</td>
              <td>{myOrder.orginialPrice}</td>
              <td>{myOrder.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
