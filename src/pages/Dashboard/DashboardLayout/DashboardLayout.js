import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MyContext } from "../../../context/AuthContext";
import useAdmin from "../../../hooks/useAdmin";
import Header from "../../Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(MyContext);
  const [role, setRole] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-12-server-orcin.vercel.app/users?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setRole(data));
  }, [user?.email]);

  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {!isAdmin &&
              role?.map((r) =>
                r.role === "user" && r.role === "" ? (
                  <>
                    <li>
                      <Link to="/dashboard">My Orders</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/dashboard/addProduct">Add A product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/myProduct">My product</Link>
                    </li>
                  </>
                )
              )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allBuyer">All Buyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/allSeller">All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
