import React from "react";
import "../styling/home.css";

export default function home() {
  return (
    <div className="overflow-x-hidden">
      <div className="p-5 font-serif grid grid-cols-1 w-full">
        <div className="flex flex-col md:flex-row gap-5 md:p-5 justify-center">
          <div className="relative md:w-[40%] grid justify-center items-center">
            <img
              src="https://picsum.photos/600/400"
              alt="img"
              className="order-1 rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-white max-w-[600px] mx-auto"></div>
          </div>
          <div className="flex flex-col order-2 md:p-5 md:w-[60%]">
            <h1 className="text-2xl md:text-3xl text-black font-bold">
              Website catchy slogan
            </h1>
            <p className="text-md md:text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              eveniet fugit, soluta cupiditate incidunt dignissimos a totam
              ullam temporibus, rerum error itaque modi nulla illo odio.
              Similique ab iure blanditiis?
            </p>
            <br />
            <button className="bg-blue-500 hover:bg-blue-400 w-full md:w-24 px-3 py-2 rounded-lg transition-all ease-in-out hover:shadow-md hover:shadow-black text-white hover:text-black">
              Find Jobs
            </button>
          </div>
        </div>
        <br />
        <div className="flex flex-col md:flex-row gap-5 md:p-5 justify-center">
          <div className="flex flex-col order-2 md:order-1 md:p-5 md:w-[60%]">
            <h1 className="text-2xl md:text-3xl text-black font-bold">
              Website catchy slogan
            </h1>
            <p className="text-md md:text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              eveniet fugit, soluta cupiditate incidunt dignissimos a totam
              ullam temporibus, rerum error itaque modi nulla illo odio.
              Similique ab iure blanditiis?
            </p>
            <br />
            <button className="bg-blue-500 hover:bg-blue-400 w-full md:w-24 px-3 py-2 rounded-lg transition-all ease-in-out hover:shadow-md hover:shadow-black text-white hover:text-black">
              Find Jobs
            </button>
          </div>
          <div className="relative md:w-[40%] grid justify-center items-center order-1 md:order-2">
            <img
              src="https://picsum.photos/600/400"
              alt="img"
              className="order-1 rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white md:bg-gradient-to-r md:from-white md:via-transparent md:to-transparent mx-auto max-w-[600px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
