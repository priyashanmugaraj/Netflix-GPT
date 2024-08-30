import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleFn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header></Header>
      <img
        className="absolute w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
        alt="background-logo"
      ></img>
      <form className="bg-black text-white absolute w-4/12 p-12 bg-opacity-80 my-32 mx-auto right-0 left-0">
        <h1 className="m-2 my-4 w-full text-4xl">
          {" "}
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 m-2  w-full bg-gray-600"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-3 m-2  w-full bg-gray-600"
        ></input>
        <input
          type="text"
          placeholder="password"
          className="p-4 m-2 my-3 w-full bg-gray-600"
        ></input>
        <button className="p-4 m-2 my-3 w-full bg-red-700 rounded-lg">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p className="m-2 my-4 w-full text-xl cursor-pointer" onClick={toggleFn}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registed? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
