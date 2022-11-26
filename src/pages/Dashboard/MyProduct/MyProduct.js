import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import SellerProduct from "../SellerProduct/SellerProduct";
import { MyContext } from "./../../../context/AuthContext";

const MyProduct = () => {
  const { user } = useContext(MyContext);
  const url = `http://localhost:5000/myProducts?email=${user?.email}`;
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl font-bold py-6">All Of My Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {myProducts.map((product) => (
          <SellerProduct
            key={product._id}
            refetch={refetch}
            product={product}
          ></SellerProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
