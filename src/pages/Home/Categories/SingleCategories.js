import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loading/Loader";
import CategoryCard from "./CategoryCard";

const SingleCategories = () => {
  let { userId } = useParams();
  const { data: categories = [] } = useQuery({
    queryKey: ["categories", userId],
    queryFn: () =>
      fetch(`http://localhost:5000/category/${userId}`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="mt-10">
      {categories.length === 0 ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3">
            {categories.map((category) => (
              <CategoryCard category={category}></CategoryCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCategories;
