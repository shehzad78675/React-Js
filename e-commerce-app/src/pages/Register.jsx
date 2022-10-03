import React from "react";

function Register() {
  return (
    <div className="flex justify-center p-10">
      <div className="flex flex-col shadow-lg rounded-lg border-2 p-5 w-[60%] md:w-[90%]">
        <text className="text-2xl">Register</text>
        <div className="flex mt-3">
          <input
            type="text"
            placeholder="First Name"
            className="border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration-200"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="ml-3 border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration-200"
          />
        </div>
        <div className="flex mt-3">
          <input
            type="text"
            placeholder="username"
            className="border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration-200"
          />
        </div>
        <div className="flex mt-3">
          <input
            type="Password"
            placeholder="Password"
            className="border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration2100"
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            className="ml-3 border-2 w-[100%] rounded-lg p-2 outline-purple-700 focus:border-purple-700 ease-linear duration2100"
          />
        </div>
        <input
          type="button"
          value="Register"
          className="btn mt-7 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

export default Register;
