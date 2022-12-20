import React from "react";

const Stack = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold text-center">
        Recent Record of Our Shop
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 p-12">
        <div className="stat border h-56">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-32 h-28 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="text-3xl font-bold">Total Users</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="text-2xl font-bold">21% more than last month</div>
        </div>

        <div className="stat border">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-32 h-28 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="text-3xl font-bold">Total Buyers</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="text-2xl font-bold">21% more than last month</div>
        </div>

        <div className="stat border">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
              </div>
            </div>
          </div>
          <div className="text-3xl font-bold">Most sell Product</div>
          <div className="text-xl font-bold">Hp Pavilion 2022</div>
          <div className="text-2xl font-bold text-secondary">
            31 tasks remaining
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
