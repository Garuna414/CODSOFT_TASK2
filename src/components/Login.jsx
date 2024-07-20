import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-white p-5 flex flex-col items-center justify-center align-middle h-full">
      <div className="bg-blue-500 rounded-lg w-full md:w-[50vw] grid grid-cols-1 justify-center items-center px-3 py-2">
        <form
          action="post"
          className="grid grid-cols-1 md:grid-cols-2 items-center p-3 text-white text-sm md:text-lg md:gap-5"
        >
          <div className="items-center justify-center">
            <label className="font-serif" htmlFor="username">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="h-8 rounded-lg mt-1 mb-5 px-3 w-full"
            />
            <br />
            <label className="font-serif" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="h-8 rounded-lg mt-1 mb-5 px-3 w-full"
            />
            <br />
            <div className="w-full flex flex-col justify-center items-center">
              <button className="bg-white text-black font-serif px-3 py-2 rounded-xl m-auto hover:scale-105 hover:shadow-md hover:shadow-gray-500">
                Submit
              </button>
            </div>
            <div className="flex flex-row justify-start gap-2 mt-5">
              <p className="font-serif">Don't have an account?</p>
              <Link to="/signup" className="font-serif hover:underline">
                Register
              </Link>
            </div>
          </div>
          <hr className="block md:hidden" />
          <div className="flex flex-col justify-center items-center font-serif w-full mt-5 md:mt-0">
            <p className="text-md md:text-lg m-auto">Sign in with Google</p>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-2xl mt-2 hover:scale-105 hover:shadow-md hover:shadow-gray-500 m-auto">
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
