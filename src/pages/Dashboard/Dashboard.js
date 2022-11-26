import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/AuthContext";
import AddProduct from "../AddProduct/AddProduct";
import useAdmin from "./../../hooks/useAdmin";
import AllBuyer from "./AllBuyer/AllBuyer";
import MyOrder from "./MyOrders/MyOrder";

const Dashboard = () => {
  const { user } = useContext(MyContext);
  const [role, setRole] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data));
  }, [user?.email]);

  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      {isAdmin ? (
        <>
          <AllBuyer></AllBuyer>
        </>
      ) : (
        <>
          {role.map((r) =>
            r.role === "seller" ? (
              <AddProduct></AddProduct>
            ) : (
              <>
                <MyOrder></MyOrder>
              </>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
