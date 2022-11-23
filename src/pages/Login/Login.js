import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "./../../context/AuthContext";
import { toast } from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const { userLogin } = useContext(MyContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    userLogin(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Successfully login");
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
      <h1 className="text-2xl lg:text-5xl font-bold text-amber-600">
        Please Login now!
      </h1>
      <form className="py-4" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-amber-600 text-base">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-amber-600 text-base">
              Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
          <p className="text-red-600">{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent bg-green-500 text-white text-xl">
            Login
          </button>
        </div>
      </form>
      <div>
        <p className="text-amber-600">
          New in here? <Link to="/register">Register</Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
