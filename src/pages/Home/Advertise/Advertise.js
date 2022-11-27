import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const url = `https://assignment-12-server-orcin.vercel.app/advertise`;
  const { data: myProducts = [] } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="pt-10">
      {myProducts && myProducts.length > 0 ? (
        <h2 className="text-3xl font-bold text-purple-700 text-center py-4">
          All Advertisement Product{" "}
        </h2>
      ) : (
        <></>
      )}
      <div className="px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {myProducts &&
          myProducts.map((product) => (
            <AdvertiseCard product={product} key={product._id}></AdvertiseCard>
          ))}
      </div>
    </div>
  );
};

export default Advertise;
