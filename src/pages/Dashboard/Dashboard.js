import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/AuthContext";
import useAdmin from "./../../hooks/useAdmin";
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
          <p>This is admin</p>
        </>
      ) : (
        <>
          {role.map((r) =>
            r.role === "seller" ? (
              <>This is seller</>
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
