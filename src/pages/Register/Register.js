import React, { useContext, useState } from "react";
import SocialLogin from "./../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../Loading/Loader";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser, updateUserProfile, loading } = useContext(MyContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  if (loading) {
    return <Loader></Loader>;
  }

  const handleRegister = (data) => {
    // create register section
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile({
          displayName: data.name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        toast.success("User Created Successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <>
      <div className="text-center mt-16 w-4/5 lg:w-1/2 mx-auto login-container">
        <h1 className="text-2xl lg:text-5xl font-bold">Please Register !!</h1>
        <form className="py-4" onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-base">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="Full Name"
              className="input input-bordered"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text  text-base">Email</span>
            </label>
            <input
              type="email"
              required
              placeholder="email"
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
              placeholder="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters or longer", // JS only: <p>error message</p> TS only support string
                },
              })}
              className="input input-bordered"
              required
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
            <label className="label">
              <span className="label-text text-red-500 text-base">{error}</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent bg-green-500 text-white text-xl">
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="text-amber-600 font-bold">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Register;