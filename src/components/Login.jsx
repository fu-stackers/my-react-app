import React from "react";

function Login() {
  return (
    <div className="bg-black flex text-white gap-10 h-50  justify-center items-center">
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold">
          Want tips & tricks to optimize flow?
        </h1>
        <p>sign up to our new letter and stay up to date</p>
      </div>
      <div>
        <input
          type="text"
          className="bg-white text-black py-2 px-4 rounded-[8px] "
          placeholder="Enter your email ? "
        />
        <button className="rounded-[8px] bg-[#00df9a] ml-4 py-2 px-6" >
          Notify me
        </button>
        <p>
          we care acout the protecttion of your data road our{" "}
          <link rel="stylesheet" href="" />
          privacy policy
        </p>
      </div>
    </div>
  );
}

export default Login;
