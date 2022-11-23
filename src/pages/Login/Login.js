import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "./../../context/AuthContext";
import { toast } from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import Loader from "../Loading/Loader";
const Login = () => {
  const { userLogin, loading } = useContext(MyContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <Loader></Loader>;
  }

  const handleLogin = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
      <h1 className="text-2xl lg:text-5xl font-bold">Please Login now!</h1>
      <form className="py-4" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-base">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid email",
              },
            })}
            placeholder="email"
            className="input input-bordered"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-base">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters or longer",
              },
            })}
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
          <p className="text-red-600">{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent bg-green-500 text-white text-xl">
            Login
          </button>
        </div>
      </form>
      <div>
        <p className="text-amber-600 font-bold">
          New in here? <Link to="/register">Register</Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
