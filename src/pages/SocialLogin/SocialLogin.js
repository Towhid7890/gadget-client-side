import React, { useContext, useState } from "react";
import google from "../../asset/icons/google.png";
import facebook from "../../asset/icons/facebook.png";
import github from "../../asset/icons/github.png";
import "./SocialLogin.css";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/AuthContext";
import Loader from "../Loading/Loader";

const SocialLogin = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const { providerLogin } = useContext(MyContext);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // for github sign in with
  const handleGithubSignIn = () => {
    providerLogin(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // for google sign in
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user?.displayName, user?.email, "user");
        if (loading) {
          return <button className="btn btn-square loading"></button>;
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://assignment-12-server-orcin.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (loading) {
          return <Loader></Loader>;
        }
        navigate("/");
      });
  };
  return (
    <div className="py-5">
      <span className="text-red-600">{error}</span>
      <div className="flex items-center">
        <div
          style={{ height: "1px" }}
          className="flex block bg-white w-1/2 mx-2"
        ></div>
        <div className="text-white">Or</div>
        <div
          style={{ height: "1px" }}
          className="flex block bg-white w-1/2 mx-2"
        ></div>
      </div>
      <div>
        <div className="icon-container flex justify-center mt-5">
          <img
            onClick={handleGoogleSignIn}
            className="bg-white"
            src={google}
            alt=""
          />
          <img className="bg-white" src={facebook} alt="" />
          <img
            onClick={handleGithubSignIn}
            className="bg-white"
            src={github}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
