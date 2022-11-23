import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { MyContext } from "./../../../context/AuthContext";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(MyContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("SignOut Successfully");
      })
      .catch((error) => {});
  };
  const menuItems = (
    <>
      <li className="">
        <Link className="normal-case" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {user?.uid ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}

      <li>
        <div>
          <input type="checkbox" className="toggle" />
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Blackery Laptop</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="my-drawer-2"
        tabIndex={2}
        className="btn navbar-end  btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
