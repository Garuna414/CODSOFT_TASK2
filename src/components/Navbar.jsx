import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styling/home.css";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  function toggle() {
    setIsToggled(!isToggled);
    console.log(isToggled);
  }
  return (
    <header className="bg-blue-500 px-5 items-center h-12 rounded-bl-xl rounded-br-xl flex flex-row justify-between text-white font-serif align-middle text-sm md:text-lg w-full">
      <p>Job Posting</p>
      <div className="md:flex md:flex-row hidden gap-2">
        <Link
          to="/"
          className="text-white rounded-lg px-3 py-1 hover:text-gray-200 transition-all ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/jobs"
          className="text-white rounded-lg px-3 py-1 hover:text-gray-200 transition-all ease-in-out"
        >
          Jobs
        </Link>
        <Link
          to="/login"
          className="text-white rounded-lg px-3 py-1 hover:text-gray-200 transition-all ease-in-out"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-white rounded-lg px-3 py-1 hover:text-gray-200 transition-all ease-in-out"
        >
          Sign Up
        </Link>
        <Link
          to="/dashboard"
          className="text-white rounded-lg px-3 py-1 hover:text-gray-200 transition-all ease-in-out"
        >
          Dashboard
        </Link>
      </div>
      <button
        className={`${
          isToggled
            ? "hidden"
            : "block md:hidden text-white border border-white px-3 py-1 rounded-lg text-sm"
        }`}
        onClick={toggle}
      >
        Toggle
      </button>
      <div
        className={`w-screen h-screen top-0 left-0 z-20 fixed flex flex-row + ${
          isToggled ? "block" : "hidden"
        }`}
      >
        <div className="w-[50%] opacity-50 bg-black" onClick={toggle}></div>
        <div className="w-[50%] bg-white md:hidden h-screen z-30 px-5 py-3">
          <div className="md:grid md:grid-cols-4 right-0 top-0 w-full flex flex-col text-black gap-2">
            <div
              className="w-full flex flex-row items-end justify-end"
              onClick={toggle}
            >
              <button className="bg-red-600 border text-white px-3 py-1 rounded-lg text-sm">
                X
              </button>
            </div>
            <Link
              to="/"
              className="rounded-lg text-md border border-black px-3 py-1 hover:text-gray-500 transition-all ease-in-out"
              onClick={toggle}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className="rounded-lg text-md border border-black px-3 py-1 hover:text-gray-500 transition-all ease-in-out"
              onClick={toggle}
            >
              Jobs
            </Link>
            <Link
              to="/login"
              className="rounded-lg text-md border border-black px-3 py-1 hover:text-gray-500 transition-all ease-in-out"
              onClick={toggle}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-lg text-md border border-black px-3 py-1 hover:text-gray-500 transition-all ease-in-out"
              onClick={toggle}
            >
              Sign Up
            </Link>
            <Link
              to="/dashboard"
              className="rounded-lg text-md border border-black px-3 py-1 hover:text-gray-500 transition-all ease-in-out"
              onClick={toggle}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="w-screen h-screen opacity-50 top-0 left-0 z-20 fixed bg-black">
        hello
      </div>
       mr-0 ml-[calc(100vw_-_128px)]*/}
    </header>
  );
}
